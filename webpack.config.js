module.exports = {
    entry: './demo/src/main.js',
    output: {
        path: './',
        filename: 'demo/js/bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module:{
        loaders: [
            {
                loader: "babel",

                exclude: /node_modules/,

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                    presets: ['es2015', 'react'],
                }
            },
        ]
    }
}