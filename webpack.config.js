const path = require('path');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: getEntryConfig(),
    output: {
        filename: (chunkData) => {
            let filePath = chunkData.chunk.name;
            const filename = filePath.replace('.jsx', '.js');
            return filename;
        },
        path: __dirname + '/dist/lib',
        libraryTarget: 'umd'
    },
    externals: [
        function(context, request, callback) {
            // 允许编译以下后缀文件
            if (/.jsx|.jpg|.png|.gif|.svg|.jpeg|.js$/g.test(request)) {
                // console.log('filter_Request', request);
                return callback(null, request);
            }
            callback(); 
        }
    ],
    resolve: {
        extensions: ['.js', '.css', '.json', '.jsx']
    },
    module: {
        rules: [{
            test: /.jsx|.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.(jpg|png|gif|svg|jpeg)$/,
            loader: 'url-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            logLevel: 'info'
        }),
        new CleanWebpackPlugin('dist', {
            verbose: false,
            watch: true,
            exclude: ['.git', '.npmignore', 'package.json', 'README.md']
        }),
        new CopyPlugin([{
            from: './sass',
            to: './sass'
        }, {
            from: './src/icons',
            to: './icons'
        }, {
            from: './src',
            to: '../es'
        },
        {
            from: './package.json',
            to: '../package.json'
        },
        {
            from: './README.md',
            to: '../README.md'
        }])
    ]
};

function getFileCollection() {
    // https://www.cnblogs.com/waitforyou/p/7044171.html
    const globPath = './src/component/**/*.*(jsx|js)';
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    // const pathDir = './src(\/|\\\\)(.*?)(\/|\\\\)jsx';
    const files = glob.sync(globPath);
    return files;
}

function getFileCollectionCss() {
    // https://www.cnblogs.com/waitforyou/p/7044171.html
    const globPath = './src/component/**/style/*.*(jsx|js)';
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    // const pathDir = './src(\/|\\\\)(.*?)(\/|\\\\)jsx';
    const files = glob.sync(globPath);
    return files;
}

function getFileCollectionIndex() {
    // https://www.cnblogs.com/waitforyou/p/7044171.html
    const globPath = './src/**/*.*(jsx|js)';
    // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
    // const pathDir = './src(\/|\\\\)(.*?)(\/|\\\\)jsx';
    const files = glob.sync(globPath);
    return files;
}

function getEntryConfig() {
    let entryObj = {};
    let entryArr = [...getFileCollection(), ...getFileCollectionCss(), ...getFileCollectionIndex()]
    entryArr.forEach(item => {
        const filePath = item.replace('./src', '');
        entryObj[filePath] = path.resolve(__dirname, item);
    });
    // console.log(getFileCollectionIndex(), '>>>>>>>>>>');
    return entryObj;
}
