
## 简介 i-mayfly Description

> i-mayfly component base on react

## 安装 Install

```
npm i -S i-mayfly
```

## 怎么使用？ How to use i-mayfly

### 引入样式 import style
```
// index.jsx 
import "i-mayfly/lib/sass/normal.scss";
```
```
// webpack.config.js
{
    test: /\.scss$/,
    use: ['css-loader', "postcss-loader", 'sass-loader']
}
```

### 配置按需加载 Configure load on demand 

```
// .babelrc
"plugins": [
    [
        "import",
        {
            "libraryName": "i-mayfly",
            "libraryDirectory": "lib/component",
            "style": "css" // 按需加载css文件
        }
    ],
    // ...
]
```

## 怎么改变主题？ How to change theme？

```
// ./main.scss

$title_b:#fafafa; //标题栏背景色
$side_b:#f4f4f4; //描边 & 模块分割底色
$side_strong:#cacaca; //按钮描边

$divider_b: #E5E5E5; //divider分割线
$hint_b: #888888; //hint & disable
$icon_b: #666666; //icon & secondary
$text_b: #222222; //text
$divider_w: rgba(white, .12); //divider
$hint_w: rgba(white, .3); //hint disable
$icon_w: rgba(white, .7); //icon secondary
$text_w: rgb(255, 255, 255); //text
//color-ji
// $title_b:#f7f7f7;
//mei
// $mei_red:#e74c75;
//status
$success_green:#03b266;
$fail_red:#ff4444;
$warn_yellow:#fc7e36;
$common_blue: #318FE2;
$disable:#898183;

$disable_bg: #F7F8F9;
$disable_c:#B3B9C1;
$readOnly_c:#787E85;
$readOnly_bg:#F7F8F9;
//shadow
$shadow_color: 0 2px 2px 0 rgba(0, 0, 0, 0.05),
0 1px 4px 0 rgba(0, 0, 0, 0.08),
0 3px 1px -2px rgba(0, 0, 0, 0.2);
//paper
$paper_color: #fff;

// Gobal
$w_space: -5px;
$theme_color:#26a597;

// input
$input_border_color: $divider_b;
$input_outline_color: $theme_color;
$input_radius: 0px;
$input_fs: 14px;
$placeholder_b: #cccccc; //input 级别的提示
$placeholder_fs: 14px;
$checkbo_bg:#F6F8F9;
$checkbo_c: inherit;
$checkbox_focus_bg: $theme_color;
$checkbox_focus_c: inherit;
$select_hover_color:$text_b;

// btn
$hoverWaveColor: $theme_color;
$btn_radius: 3px;
$btn_action_radius: 50px;
$btn_fs: 12px;

// table
$table_odd_bg: #F6F8F9;
$table_header_bg: #fff;
$table_header_c: #787E85;
$table_header_fs: 14px;
$table_hover: #E8EBED;

// steps
$steps_bar_bg:$table_odd_bg;

// tab
$tab_top_color:$side_b;
$tab_active_color:$theme_color;

```

## How to use i-mayfly for React

```
// ex: 
// a table and paging demo
import { Dialog, Toast, Table, Paging } from 'i-mayfly';

...
const dataconf = [{
    title: 'ID',
    name: 'id',
    width: '25%'
}, {
    title: '姓名',
    name: 'name',
    width: '25%'
}, {
    title: '身高',
    name: 'height',
    width: '25%'
}, {
    title: '',
    width: '25%',
    name: 'action2',
    type: 'action',
    handles: [
        {
            name: '配置',
            btnType: 'text',
            handle: (data) => {
                alert('配置')
                console.log(data);
            }
        }, {
            name: '备注',
            btnType: 'text',
            handle: (data) => {
                alert('备注')
                console.log(data);
            }
        }]
}]

const dataset = [{
    id: 1,
    name: 'Apple',
    height: 178
}, {
    id: 2,
    name: 'Boy',
    height: 177
}, {
    id: 3,
    name: 'Cat',
    height: 176
}]

const pageInfo = {
    total: 119,
    maxToShow: 20
}

handleChangePage = (currentPage) => {
    console.log(currentPage);
}

<Table dataconf={dataconf} dataset={dataset} />
<Paging pageInfo={pageInfo} onAction={this.handleChangePage} />

```

