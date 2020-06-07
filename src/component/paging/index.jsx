import React, { Component } from 'react';

export default class Paging extends Component {
    constructor(props) {
        super(props);
        this.start = 1;
        this.maxWidth = 5;
        this.minWidth = '';
        this.end = '';
        // 分页对象

        this.state = {
            pageInfo: {
                total: this.props.pageInfo.total || 0,
                maxToShow: this.props.pageInfo.maxToShow || 0,
                currentPage: this.props.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        };
    }

    componentDidMount() {
        this.init();
    }

    componentWillReceiveProps(nextProps) {
        // 在重新render之前更新state不会重新触发生命周期
        // console.log('componentWillReceiveProps', nextProps, this.props);
        this.setState({
            pageInfo: {
                total: nextProps.pageInfo.total || 0,
                maxToShow: nextProps.pageInfo.maxToShow || 0,
                currentPage: nextProps.pageInfo.currentPage || 1
            },
            viewBox: {
                width: '', // 可视容器的宽度
                list: [], // 可视容器列表
                before: false, // 前后省略号
                after: false,
                currentPage: '' // 当前页
            }
        }, () => {
            if (nextProps.pageInfo.currentPage && this.state.viewBox) {
                this.init(() => this.handleResizeViewBox(nextProps.pageInfo.currentPage));
            } else {
                this.init();
            }
        });
    }

    init(cb) {
        const { pageInfo } = this.state;
        this.end = Math.ceil(pageInfo.total / pageInfo.maxToShow);
        this.end = this.end > 0 ? this.end : 1
        console.log(this.end, 'this.end');
        this.minWidth = this.end - 2;
        let currentWidth = this.maxWidth > this.minWidth
            ? this.minWidth
            : this.maxWidth;

        this.setState({
            viewBox: {
                width: currentWidth,
                list: ((width) => {
                    let list = [];
                    for (let i = 1; i <= width; i++) {
                        let k = i;
                        list.push(++k);
                    }
                    console.log(list);
                    return list;
                })(currentWidth),
                before: false,
                after: this.maxWidth < this.minWidth,
                currentPage: pageInfo.currentPage || 1
            }
        }, () => {
            // console.log('init', this.state.viewBox);
            cb && cb();
        });
    }
    handleChangePage(currentPage, isOnAction = true) {
        // 保证临界条件
        let currentPageSelf = parseInt(currentPage);
        if (currentPageSelf < this.start) { 
            currentPageSelf = this.start
        }
        if (currentPageSelf > this.end) { currentPageSelf = this.end; }

        this.setState({
            viewBox: Object.assign({}, this.state.viewBox, {
                currentPage: currentPageSelf
            })
        }, () => {
            this.handleResizeViewBox(currentPageSelf);
        })
        // this.props.onAction && this.props.onAction(currentPageSelf);
    }

    handleResizeViewBox(currentPage) {
        // 保证临界条件
        let currentPageSelf = parseInt(currentPage);
        if (currentPageSelf < this.start) { currentPageSelf = this.start; }
        if (currentPageSelf > this.end) { currentPageSelf = this.end; }
        this.handleViewBox(currentPageSelf);
    }

    handleChangePageLeft() {
        this.handleChangePage(--this.state.viewBox.currentPage);
    }

    handleChangePageRight() {
        this.handleChangePage(++this.state.viewBox.currentPage);
    }

    // 维护viewBox
    handleViewBox(currentPage) {
        let width = this.state.viewBox.width
        let list = this.state.viewBox.list
        let len = list.length
        let after = true
        let before = true
        // console.log('handleViewBox', this.state, list);

        // 多条件判断
        if (this.end - 2 >= this.maxWidth) {
            if (list.includes(currentPage)) {
                const positionIndex = list.indexOf(currentPage)
                // 判断右侧
                if (positionIndex > Math.floor(len / 2)) {
                    let lastNum = list[len - 1]
                    const indexRuler = positionIndex - Math.floor(len / 2)
               
                    // console.log(firstNum, this.end - 1)
                    // 边界判断
                    if(lastNum === this.end - 1) {
                        after = false
                    } else {
                        list.splice(0,indexRuler)
                        for (let i=0;i<indexRuler;i++) {
                            
                            const newLastNum = ++lastNum
                            if (newLastNum === this.end) {
                                break;
                            }
                            if (newLastNum === this.end - 1) {
                                after = false
                            }
                            list.push(newLastNum)
                        }
                    }
                    let firstNum = list[0]

                    before = this.start + 1 < firstNum ? true : false
                    console.log(list, 'r')
                    const newList = [...list]
                    this.setState({
                        viewBox: Object.assign({}, this.state.viewBox, {
                            list: newList,
                            before: before ? true : false,
                            after: after ? true : false
                        })
                    })
                }
                // 判断左侧
                if (positionIndex < Math.floor(len / 2)) {
                    let firstNum = list[0] // 第一个字符
                    const indexRuler = Math.floor(len / 2) - positionIndex
                    // 边界判断
                    if(firstNum === this.start + 1) {
                        before = false
                    } else {
                        if (len === this.maxWidth) {
                            list.splice(len - indexRuler,indexRuler)
                            for (let i=0;i<indexRuler;i++) {
                                const newLastNum = --firstNum
                                if (newLastNum === this.start) {
                                    break;
                                }
                                if (newLastNum === this.start + 1) {
                                    before = false
                                }
                                list.unshift(newLastNum)
                            }
                        } else if (len === this.maxWidth - 1) {
                            list.splice(len - 1,indexRuler - 1)
                            for (let i=0;i<indexRuler;i++) {
                                const newLastNum = --firstNum
                                if (newLastNum === this.start) {
                                    break;
                                }
                                if (newLastNum === this.start + 1) {
                                    before = false
                                }
                                list.unshift(newLastNum)
                            }
                        }  
                    }
                    let lastNum = list[list.length - 1]
                    after = this.end - 1 > lastNum ? true : false

                    console.log(list, 'l')
                    const newList = [...list]
                    this.setState({
                        viewBox: Object.assign({}, this.state.viewBox, {
                            list: newList,
                            before: before ? true : false,
                            after: after ? true : false
                        })
                    })
                }
            }
        } else {
            this.setState({
                viewBox: Object.assign(this.state.viewBox, {
                    currentPage,
                    before: false,
                    after: false
                })
            }, () => {
                // console.log('handleViewBox', this.state.viewBox)
            });
        }
    }
    render() {
        // console.log(this.start, this.end, this.state.viewBox.currentPage, this.state.viewBox.list);
        const { pageInfo } = this.state;
        return (
            <div>
                <div className={['d-f ac jc-b', this.props.style || 'paging-normal'].join(' ')}>
                    <div className="fs12">共<strong className="plr4">{pageInfo.total}</strong>条，每页<strong className="plr4">{pageInfo.maxToShow}</strong>条</div>
                    <div className="paging-viewbox">
                        <span className="btn-paging arrow-left" onClick={() => this.handleChangePageLeft()}></span>
                        <span onClick={() => this.handleChangePage(this.start)} 
                            className={['btn-paging', this.start === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')}>{this.start}</span>
                        {
                            this.state.viewBox.before ? <span className="mr8">...</span> : null
                        }
                        {
                            this.state.viewBox.list.map((item, i) => {
                                return (
                                    <span key={i} onClick={() => this.handleChangePage(item)} 
                                        className={['btn-paging', item === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{item}</span>
                                );
                            })
                        }
                        {
                            this.state.viewBox.after ? <span className="mr8">...</span> : null
                        }
                        {
                            this.state.viewBox.width >= 0 ? <span onClick={() => this.handleChangePage(this.end)} 
                                className={['btn-paging', this.end === this.state.viewBox.currentPage ? 'btn-active' : ''].join(' ')} >{this.end}</span> : null
                        }
                        <span className="btn-paging arrow-right" onClick={() => this.handleChangePageRight()}></span>
                    </div>
                </div>
            </div>
        );
    }
}
