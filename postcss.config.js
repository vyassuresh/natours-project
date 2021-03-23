module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-assets')({
            loadPaths: ['assets/images/'],
            basePath: 'app'
        })
    ]
}