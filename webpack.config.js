const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js",
    },
    //Loader
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    //Loader
    devServer: {
        static: path.join(__dirname, "dist/"),
        port: 3500,
        compress: true,
        hot: "only"
    },
}