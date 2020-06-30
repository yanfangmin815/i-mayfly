import React, { Component } from 'react';
import { cloneDeep, debounce, isBoolean } from 'lodash'
import Checkbox from '../checkbox'
import '../checkbox/style/css'

export default class Tree extends Component {
    constructor(props) {
        super(props);
        this.depthStatistics = 0
        this.initialArr = []
        this.timer = null
        this.tops = ''
        this.bottoms = ''
        this.disY = ''
        this.height = ''
        this.position = ''
        this.item = ''
        this.initialDepth = 4
        this.state = {
            _Tree: this.props.data || [
                {
                    key: '1',
                    title: 'parent-0',
                    checked: true,
                    children: [
                        {
                            key: '1-0',
                            title: '1-child-0',
                            checked: true,
                            children: [
                                {
                                    key: '1-0-0',
                                    title: 'grand-child-0',
                                    checked: true
                                },
                                {
                                    key: '1-0-1',
                                    title: 'grand-child-1',
                                    checked: true
                                },
                                {
                                    key: '1-0-2',
                                    title: 'grand-child-2',
                                    checked: true,
                                    children: [
                                        {
                                            key: '1-0-2-0',
                                            title: 'grand-grand-child-0',
                                            checked: true
                                        },
                                        {
                                            key: '1-0-2-1',
                                            title: 'grand-grand-child-1',
                                            checked: true
                                        }
                                    ]
                                },
                                {
                                    key: '1-1-3',
                                    title: 'grand-child-3',
                                    checked: true
                                }
                            ]
                        },
                        {
                            key: '1-1',
                            title: '1-child-1',
                            checked: true
                        }
                    ]
                },
                {
                    key: '2',
                    title: 'parent-1',
                    checked: true,
                    children: [
                        {
                            key: '2-0',
                            title: '2-child-0',
                            checked: true,
                            children: [
                                {
                                    key: '2-0-0',
                                    title: '2-grand-grand-child-0',
                                    checked: true
                                },
                                {
                                    key: '2-0-1',
                                    title: '2-grand-grand-child-1',
                                    checked: true
                                }
                            ]
                        },
                        {
                            key: '2-1',
                            title: '2-child-1',
                            checked: true
                        }
                    ]
                },
                {
                    key: '3',
                    title: 'parent-2',
                    checked: true,
                    children: [
                        {
                            key: '3-0',
                            title: '3-child-0',
                            checked: true
                        },
                        {
                            key: '3-1',
                            title: '3-child-1',
                            checked: true,
                            children: [
                                {
                                    key: '3-1-0',
                                    title: '3-grand-child-0',
                                    checked: true,
                                    children: [
                                        {
                                            key: '3-1-0-0',
                                            title: '3-grand-grand-child-0',
                                            checked: true,

                                        },
                                        {
                                            key: '3-1-0-1',
                                            title: '3-grand-grand-child-1',
                                            checked: true
                                        }
                                    ]
                                },
                                {
                                    key: '3-1-1',
                                    title: '3-grand-child-1',
                                    checked: true
                                }
                            ]
                        }
                    ]
                }
            ],
            newData: []
        };
    }

    componentDidMount() {
        const { _Tree } = this.state
        this.depthStatistics = 0
        this.initialArr = []
        this.timer = null
        // this.setState({
        //     newData: []
        // }, () => {
        new Promise((resolve, reject) => {
            let len
            let newLen
            const result = this.handleData(_Tree, 'root', 0)
            const timer = setInterval(() => {
                len = result && result.length
                if (len === newLen) {
                    clearInterval(timer)
                    resolve(result)
                }
                newLen = len
            }, 100)
        }).then((result) => {
            // 节点展开状态
            this.depthStatusCheck(result)
            this.preHandle(result)
        })
        // })
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps')
        // const { _Tree } = nextProps
        const { _Tree } = this.state
        this.depthStatistics = 0
        this.initialArr = []
        this.timer = null
        // this.setState({
        //     newData: []
        // }, () => {
        new Promise((resolve, reject) => {
            let len
            let newLen
            const result = this.handleData(_Tree, 'root', 0)
            const timer = setInterval(() => {
                len = result && result.length
                if (len === newLen) {
                    clearInterval(timer)
                    resolve(result)
                }
                newLen = len
            }, 100)
        }).then((result) => {
            // 节点展开状态
            this.depthStatusCheck(result)
            this.preHandle(result)
        })
        // })
    }

    depthStatusCheck = (result) => {
        const len = result.length
        for (let i = 0; i < len; i++) {
            const memo = result[i]
            if (Number(this.initialDepth) <= memo.depth) {
                memo.folded = true
                memo.subFolded = true
            }
            if (Number(this.initialDepth) - 1 === memo.depth) {
                memo.subFolded = true
            }
        }
    }

    handleData = (treeData, parent, depth) => {
        const arr = []
        treeData.forEach((item, index) => {
            const obj = {}
            obj.key = item.key
            obj.title = item.title
            obj.checked = item.checked
            obj.parent = parent
            obj.depth = depth
            obj.state = ''
            obj.folded = false  // 是否折叠
            obj.subFolded = false  // 子项是否折叠
            obj.upLine = false  // 上方border
            obj.belowLine = false  // 下方border
            arr.push(obj)

            this.initialArr.push(obj)
            if (item.children && item.children.length) {
                const newObj = cloneDeep(obj)
                newObj.depth += 1
                this.handleData(item.children, item.key, newObj.depth)
            }
        })
        return this.initialArr
    }

    preHandle = (result) => {
        const len = result.length
        for (let i = 0; i < len; i++) {
            const data = result[i]
            const key = data.key
            const arr = []
            for (let j = 0; j < len; j++) {
                const data = result[j]
                if (key === data.parent) {
                    arr.push(data.key)
                }
            }
            data.children = arr
        }
        // 确定父子关系 保证节点顺序
        const arr = []
        const depthArr = result.map((item, index) => {
            if (item.depth === this.depthStatistics) {
                arr.push(item)
            }
            return item.depth
        })
        // 找出最大值
        const maxVal = this.bubbleSort(depthArr)[depthArr.length - 1]
        this.debounce(this.sequenceAdjustment.bind(this, result, arr, maxVal), 800)()
    }

    bubbleSort = (arr) => {
        for (let i = 0, l = arr.length; i < l - 1; i++) {
            for (let j = i + 1; j < l; j++) {
                if (arr[i] > arr[j]) {
                    let tem = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tem;
                }
            }
        }
        return arr
    }

    // 防抖--应用于自调用函数
    debounce = (fn, delay) => {
        return () => {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(fn, delay)
        }
    }

    sequenceAdjustment = (newData, arr, maxVal) => {
        this.depthStatistics++
        let newArr = cloneDeep(arr)
        let initItem
        arr.map((item, index) => {
            const con = []
            newData.some((memo, key) => {
                if (Number(memo.depth) === this.depthStatistics && item.key === memo.parent) {
                    initItem = item
                    con.push(memo)
                }
            })
            if (con.length) {
                const indexes = newArr.findIndex((item, index) => item.key === initItem.key)
                newArr = [...newArr.slice(0, indexes + 1), ...con, ...newArr.slice(indexes + 1)]
            }
        })
        // console.log(newArr, 'sequenceAdjustment')
        if (maxVal === this.depthStatistics) {
            // 渲染时 处理父级节点选择状态 逐级递归
            this.renderInitial(maxVal, newArr)
        }
        if (this.depthStatistics <= maxVal - 1) {
            this.sequenceAdjustment(newData, newArr, maxVal)
        }
    }

    handleFold(item) {
        const { children, key, subFolded } = item
        if (!children.length) return
        const { newData } = this.state
        const data = cloneDeep(newData)
        const antiFolded = !subFolded
        const index = data.findIndex(memo => memo.key === key && children.length)
        data[index].subFolded = !subFolded
        data.splice(index, 1, data[index])
        this.setState({
            newData: data
        }, () => {
            if (children.length) {
                this.subHandleFold(children, data, antiFolded)
            }
        })
    }

    subHandleFold = (children, data, folded) => {
        children.forEach(memo => {
            const subIndex = data.findIndex(subMemo => subMemo.key === memo)
            data[subIndex].folded = folded
            data.splice(subIndex, 1, data[subIndex])
            this.setState({
                newArr: data
            }, () => {
                // 维持枝节点折叠状态
                if (data[subIndex].children.length && !data[subIndex].subFolded) {
                    this.subHandleFold(data[subIndex].children, data, folded)
                }
            })
        })
    }

    renderInitial = (depth, result) => {
        result.some((item, index) => {
            if (item.depth === depth && item.children.length) {
                const newArr = []
                item.children.some((mome, key) => {
                    result.some((data, subIndex) => {
                        if (data.key === mome) {
                            newArr.push(data.checked)
                            return true
                        }
                    })
                })
                // 获取同级别选择状态数组
                const checkedState = this.getCheckedState(newArr)
                item.checked = checkedState
            }
        })
        if (depth === 0) {
            this.setState({
                newData: result
            })
            return
        }
        depth--
        this.renderInitial(depth, result)
    }

    mouseDownEvent(e) {
        const top = document.getElementsByClassName(e.target.className.split(' ')[1])[0].offsetTop
        this.disY = e.clientY - top
    }

    dragTarget(e, item) {
        this.height = document.getElementsByClassName(e.target.className.split(' ')[1])[0].offsetHeight
        this.tops = e.clientY - this.disY
        this.bottoms = Number(this.tops) + Number(this.height)
        this.item = item
    }

    dropLogic = (deepData, disVal, item, type) => {
        const that = this
        if (this.item.children.length) {
            const index = deepData.findIndex(memo => memo.key === this.item.key)
            // 获取当前被拖拽节点并其子节点
            const arr = []
            for (let i = index; i < deepData.length; i++) {
                const memo = deepData[i]
                if (arr.length && memo.depth === that.item.depth) break
                memo.depth = Number(memo.depth) + disVal
                arr.push(memo)
            }
            // 更新parent
            arr[0].parent = item.parent
            // 向父节点添加被拖拽item之key
            const parent = deepData.find(item => item.key === arr[0].parent)
            const key = arr[0].key
            parent && parent.children.push(key)
            // 先删再添
            arr.map((single, key) => {
                const index = deepData.findIndex(item => item.key === single.key)
                deepData.splice(index, 1)
            })
            let itemIndex = deepData.findIndex(memo => memo.key === item.key)

            if (type === 'up') {
                deepData.splice(itemIndex, 0, ...arr)
            } else if (type === 'below') {
                item.children.length && this.handleDeepData(deepData, item, itemIndex, arr)
                !item.children.length && deepData.splice(itemIndex + 1, 0, ...arr)
            }
        } else {
            const targetIndex = deepData.findIndex((memo) => memo.key === this.item.key)
            this.item.depth = item.depth
            this.item.parent = item.parent
            deepData.splice(targetIndex, 1)
            let itemIndex = deepData.findIndex(memo => memo.key === item.key)

            if (type === 'up') {
                deepData.splice(itemIndex, 0, this.item)
            } else if (type === 'below') {
                item.children.length && this.handleDeepData(deepData, item, itemIndex, [this.item])
                !item.children.length && deepData.splice(itemIndex + 1, 0, this.item)
            }
            const parent = deepData.find(item => item.key === this.item.parent)
            const key = this.item.key
            parent && parent.children.push(key)
        }
        let itemIndex = deepData.findIndex(memo => memo.key === item.key)
        item.belowLine = false
        item.upLine = false
        item.onOver = false
        deepData.splice(itemIndex, 1, item)

        this.setState({
            newData: deepData
        })
    }

    handleDeepData = (deepData, item, index, arr) => {
        const len = deepData.length
        for (let i = index; i < len; i++) {
            const memo = deepData[i]
            if (memo.depth === item.depth && i < len - 1 && memo.key !== item.key) {
                deepData.splice(i, 0, ...arr)
                break
            }
            if (i === len - 1 && memo.depth > item.depth) {
                deepData.splice(i + 1, 0, ...arr)
                break
            }
        }
    }

    dropTarget(e, item) {
        // console.log(this.position, item, this.item, 'dropTarget')
        const position = this.position
        const { newData } = this.state
        let deepData = cloneDeep(newData)
        const that = this
        let disVal = Number(item.depth) - Number(this.item.depth)
        // disVal -> 跨层级拖拽 -> 旧父节点需移除此item对应之key -> 新父节点添加此item之key
        const key = that.item.key
        const itemIndex = deepData.findIndex(memo => memo.key === this.item.key)
        const parent = deepData.find(item => item.key === that.item.parent)
        const index = parent.children.findIndex(item => item === key)
        parent && parent.children.splice(index, 1)

        if (position === 'up') {
            this.dropLogic(deepData, disVal, item, 'up')
            // if (this.item.children.length) {
            //     const index = deepData.findIndex(memo => memo.key === this.item.key)
            //     const itemIndex = deepData.findIndex(memo => memo.key === item.key)
            //     // 获取当前被拖拽节点并其子节点
            //     const arr = []
            //     for (let i = index; i < deepData.length; i++) {
            //         const memo = deepData[i]
            //         if (arr.length && memo.depth === that.item.depth) break
            //         memo.depth = Number(memo.depth) + disVal
            //         arr.push(memo)
            //     }
            //     // 更新parent
            //     arr[0].parent = item.parent
            //     // 向父节点添加此item之key
            //     const parent = deepData.find(item => item.key === arr[0].parent)
            //     const key = arr[0].key
            //     parent && parent.children.push(key)
            //     // 先删再添
            //     arr.map((single, key) => {
            //         const index = deepData.findIndex(item => item.key === single.key)
            //         deepData.splice(index, 1)
            //     })
            //     deepData.splice(itemIndex, 0, ...arr)
            // } else {
            //     const targetIndex = deepData.findIndex((memo) => memo.key === this.item.key)
            //     this.item.depth = item.depth
            //     this.item.parent = item.parent
            //     deepData.splice(targetIndex, 1)
            //     const targetItemIndex = deepData.findIndex((memo) => memo.key === item.key)
            //     deepData.splice(targetItemIndex, 0, this.item)
            //     if (disVal) {
            //         const parent = deepData.find(item => item.key === this.item.parent)
            //         const key = this.item.key
            //         parent && parent.children.push(key)
            //     }
            // }
            // this.setState({
            //     newData: deepData
            // })
        }
        else if (position === 'below') {
            this.dropLogic(deepData, disVal, item, 'below')
            // if (this.item.children.length) {
            //     const index = deepData.findIndex(memo => memo.key === this.item.key)
            //     const itemIndex = deepData.findIndex(memo => memo.key === item.key)
            //     // 获取当前被拖拽节点并其子节点
            //     const arr = []
            //     for (let i = index; i < deepData.length; i++) {
            //         const memo = deepData[i]
            //         if (arr.length && memo.depth === that.item.depth) break
            //         memo.depth = Number(memo.depth) + disVal
            //         arr.push(memo)
            //     }
            //     // 更新parent
            //     arr[0].parent = item.parent
            //     // 向父节点添加此item之key
            //     const parent = deepData.find(item => item.key === arr[0].parent)
            //     const key = arr[0].key
            //     parent && parent.children.push(key)
            //     // 先删再添之删除
            //     arr.map((single, key) => {
            //         const index = deepData.findIndex(item => item.key === single.key)
            //         deepData.splice(index, 1)
            //     })
            //     // 先删再添之添加
            //     deepData.splice(itemIndex + 1, 0, ...arr)
            // } else {
            //     const targetIndex = deepData.findIndex((memo) => memo.key === this.item.key)
            //     this.item.depth = item.depth
            //     this.item.parent = item.parent
            //     deepData.splice(targetIndex, 1)
            //     const targetItemIndex = deepData.findIndex((memo) => memo.key === item.key)
            //     deepData.splice(targetItemIndex + 1, 0, this.item)
            //     if (disVal) {
            //         const parent = deepData.find(item => item.key === this.item.parent)
            //         const key = this.item.key
            //         parent && parent.children.push(key)
            //     }
            // }
            // this.setState({
            //     newData: deepData
            // })
        }
        else if (position === 'middle') {
            if (this.item.children.length) {
                const index = deepData.findIndex(memo => memo.key === this.item.key)
                // 获取当前被拖拽节点并其子节点
                const arr = []
                for (let i = index; i < deepData.length; i++) {
                    const memo = deepData[i]
                    if (arr.length && memo.depth === that.item.depth) break
                    memo.depth = Number(memo.depth) + disVal + 1
                    arr.push(memo)
                }
                // 更新parent
                arr[0].parent = item.key
                // 向父节点添加被拖拽item之key
                item.children.push(key)
                // 先删再添 之 删除
                arr.map((single, key) => {
                    const index = deepData.findIndex(item => item.key === single.key)
                    deepData.splice(index, 1)
                })
                // 先删再添 之 添加
                let itemIndex = deepData.findIndex(memo => memo.key === item.key)
                item.children.length && this.handleDeepData(deepData, item, itemIndex, arr)
                // 无子元素需单独讨论
                !item.children.length && deepData.splice(itemIndex + 1, 0, ...arr)
            } else {
                const targetIndex = deepData.findIndex((memo) => memo.key === this.item.key)
                this.item.depth = Number(item.depth) + 1
                this.item.parent = item.key
                deepData.splice(targetIndex, 1)
                let itemIndex = deepData.findIndex(memo => memo.key === item.key)
                item.children.length && this.handleDeepData(deepData, item, itemIndex, [this.item])
                !item.children.length && deepData.splice(itemIndex + 1, 0, this.item)
                item.children.push(key)
            }
            let itemIndex = deepData.findIndex(memo => memo.key === item.key)
            item.belowLine = false
            item.upLine = false
            item.onOver = false
            deepData.splice(itemIndex, 1, item)

            this.setState({
                newData: deepData
            })
        }
    }

    onDragOverTarget(e, item) {
        e.preventDefault();
        const { newData } = this.state
        let deepData = cloneDeep(newData)
        const top = document.getElementsByClassName(e.target.className.split(' ')[1])[0].offsetTop
        const height = document.getElementsByClassName(e.target.className.split(' ')[1])[0].offsetHeight
        const bottom = Number(top) + Number(height)
        console.log(this.tops, this.bottoms, top, bottom, e.target.innerHTML, 'onDragOverTarget')
        if (this.bottoms - bottom >= 3 && this.bottoms - bottom <= 19) {
            console.log('到了下面')
            this.position = 'below'
            item.belowLine = true
            item.upLine = false
            item.onOver = false
            let itemIndex = newData.findIndex(memo => memo.key === item.key)
            newData.splice(itemIndex, 1, item)
            this.setState({
                newData
            })
        }
        if (top - this.tops >= 6 && top - this.tops <= 19) {
            console.log('在上面了')
            this.position = 'up'
            item.belowLine = false
            item.upLine = true
            item.onOver = false
            let itemIndex = newData.findIndex(memo => memo.key === item.key)
            newData.splice(itemIndex, 1, item)
            this.setState({
                newData
            })
        }
        if (top - this.tops < 6 && this.bottoms - bottom < 3) {
            console.log('在中间')
            this.position = 'middle'
            item.onOver = true
            item.belowLine = false
            item.upLine = false
            if (item.subFolded && item.children.length) {
                item.children.forEach((items, index) => {
                    let itemIndex = deepData.findIndex(memo => memo.key === items)
                    deepData[itemIndex].folded = false
                })
                item.subFolded = false
            }
            let itemIndex = deepData.findIndex(memo => memo.key === item.key)
            deepData.splice(itemIndex, 1, item)
            this.setState({
                newData: deepData
            })
        }
    }

    onDragLeaveTarget(e, item) {
        const { newData } = this.state
        item.belowLine = false
        item.upLine = false
        item.onOver = false
        let itemIndex = newData.findIndex(memo => memo.key === item.key)
        newData.splice(itemIndex, 1, item)
        this.setState({
            newData
        })
    }

    renderLayout = (newData) => {
        console.log(newData, 'newData-newData')
        return newData.map((item, index) => {
            const className = item.depth && !item.children.length ? `ml${(Number(item.depth) + 1) * 10 + 6}` : item.depth ? `ml${Number(item.depth)}0` : ''
            return !item.folded ? <div className={className} key={index}>
                {item.children.length ? <svg viewBox="0 0 1024 1024" onClick={this.handleFold.bind(this, item)} focusable="false"
                    className={[item.children.length && item.subFolded ? 'tree-branch-node-close' : 'tree-branch-node-open', 'mr6', 'svg-size'].join(' ')}
                    data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                </svg> : null}
                <Checkbox defaultChecked={item.checked} onChange={this.changeState} item={item}/>
                <span className={['ml2', `ml${item.key}`, 'pl4 pr4 ', 'bor-t-opacity', 'bor-b-opacity',
                    item.upLine ? 'border-top' : '', item.belowLine ? 'border-bottom' : '', item.onOver ? 'on-over' : ''].join(' ')}
                style={{ display: 'inline-block', height: '24px', lineHeight: '24px', 'borderRadius': '2px' }}
                onMouseDown={(e) => this.mouseDownEvent(e)}
                onMouseUp={() => { document.onmousemove = null }}
                draggable={true}
                onDrag={(e) => this.dragTarget(e, item)}
                onDragOver={(e) => this.onDragOverTarget(e, item)}
                onDragLeave={(e) => this.onDragLeaveTarget(e, item)}
                onDrop={(e) => this.dropTarget(e, item)}>{item.title}</span>
            </div> : null
        })
    }

    changeState = (e, monomer) => {
        const checked = e.target.checked
        const { newData } = this.state
        newData.some((item, index) => {
            if (item.key === monomer.key) {
                const newItem = cloneDeep(item)
                newItem.checked = checked
                // newItem.state = checked ? 'all' : 'none'
                newData.splice(index, 1, newItem)
                this.setState({
                    newData: newData
                }, () => {
                    this.handleCheckedState(monomer, checked)
                })
                return true
            }
        })
    }

    handleCheckedState = (monomer, checked) => {
        // 判断同级选择状态
        const { newData } = this.state
        const brotherNode = []
        newData.map((item, index) => {
            if (item.parent === monomer.parent) {
                brotherNode.push(item.checked)
            }
        })
        new Promise((resolve, reject) => {
            this.handleCheckedStateChildren(monomer, checked)
            resolve()
        }).then(() => {
            this.handleCheckedStateParents(brotherNode, monomer)
        })
    }

    getCheckedState = (brotherNode) => {
        let len = brotherNode.length
        let num = 0
        brotherNode.some((item, index) => {
            isBoolean(item) && item && num++
            num = item === 'semi' ? num + 0.5 : num
        })
        if (num === 0) return false
        if (num !== 0 && num < len) return 'semi'
        if (num === len) return true
    }

    handleCheckedStateParents = (brotherNode, monomer) => {
        // 同级选择状态
        const { newData } = this.state
        const checkedState = this.getCheckedState(brotherNode)
        const parent = monomer.parent
        const newDataDeep = cloneDeep(newData)
        let newItem
        // 判断父级选择状态

        const index = newDataDeep.findIndex(item => item.key === parent)
        console.log(checkedState, parent, index, '::::::::::::::::::')
        if (index >= 0) {
            newDataDeep[index].checked = checkedState
            newItem = newDataDeep[index]
        }

        // index >= 0 && {

        // }
        // newDataDeep.some((item, index) => {
        //     if (item.key === parent) {
        //         item.checked = checkedState
        //         newItem = item
        //         newDataDeep.splice(index, 1, item)
        //         return true
        //     }
        // })
        this.setState({
            newData: newDataDeep
        }, () => {
            if (parent === 'root') return
            // 获取父级同级Node monomer
            const { newData } = this.state
            const brotherNode = []
            newData.map((item, index) => {
                if (item.parent === newItem.parent) {
                    brotherNode.push(item.checked)
                }
            })
            this.handleCheckedStateParents(brotherNode, newItem)
        })
    }

    handleCheckedStateChildren = (monomer, checked) => {
        const { newData } = this.state
        const that = this
        if (monomer.children.length) {
            const newDataDeep = cloneDeep(newData)
            monomer.children.forEach((item, index) => {
                for (let i = 0; i < newDataDeep.length; i++) {
                    const targetItem = newDataDeep[i]
                    if (targetItem.key === item) {
                        targetItem.checked = checked
                        // targetItem.state = checked ? 'all' : 'none'
                        break
                    }
                }
            })
            this.setState({
                newData: newDataDeep
            }, () => {
                monomer.children.forEach((item, index) => {
                    for (let i = 0; i < newDataDeep.length; i++) {
                        const targetItem = newDataDeep[i]
                        if (targetItem.key === item && targetItem.children.length) {
                            that.handleCheckedStateChildren(targetItem, checked)
                            break
                        }
                    }
                })
            })
        }
    }

    render() {
        const { newData } = this.state
        return (
            <div>
                {/* 每个节点 -- start */}
                {this.renderLayout(newData)}
                {/* 每个节点 -- end */}
            </div>
        );
    }
}
