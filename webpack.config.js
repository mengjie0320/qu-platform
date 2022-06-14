const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, "/dist"),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        // contentBase: './dist', // 已无效
        /*
         { allowedHosts?, bonjour?, client?, compress?, devMiddleware?, headers?, historyApiFallback?, host?, hot?, http2?, https?, ipc?, liveReload?, magicHtml?, onAfterSetupMiddleware?, onBeforeSetupMiddleware?, onListening?, open?, port?, proxy?, server?, setupExitSignals?, setupMiddlewares?, static?, watchFiles?, 
webSocketServer? }*/
        // overlay: {
        //     warnings: true,
        //     errors: true,
        // },
        open: true,
        historyApiFallback: {
            // browserHistory的时候，刷新会报404. 自动重定向到index.html
            index: './index.html'
        }
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.xml'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, 
            {
                test: /\.xml$/,
                use: ['xml-loader']
                // use: [
                //     {
                //         loader: path.resolve('/src/loader/xml-loader.js')
                //     }
                // ]
            }, {
                test: /\.css?$/,
                use: ['style-loader', 'css-loader'],
            }, 
        ]
    },
    resolveLoader: {
        // 去那些目录下找loader，有先后之分
        modules: [path.join(__dirname, '/src/loader'), "node_modules"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新
    ]
}