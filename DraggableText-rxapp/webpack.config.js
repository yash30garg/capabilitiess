var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry: './learn.js',
    output: {
        filename: "./dist/bundle.js"
    }
}

module: {
rules:
[
    {
        test:/\.css$/,
        use:
        [
            'style-loader',
            'css-loader'
        ]
    }
]

}


plugins:[     new HtmlWebpackPlugin(),

       //minification plugin
    new webpack.optimize.UglifyJsPlugin({
        //..
    })
]







