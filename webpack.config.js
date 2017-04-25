const path = require('path')

module.exports = {
    entry: {
        main: './src/js/main',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        historyApiFallback: {
            index: 'index.html',
        },
        port: 9000,
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'stage-2'],
                },
            },
        ],
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            options: {
                presets: ['es2015'],
            },
        },
        ],
    },
}
