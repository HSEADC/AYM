const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPage(template, filename) {
return new HtmlWebpackPlugin({
template: template,
filename: filename
})
}

const htmlPages = [
createPage('./src/index.html', './index.html'),
createPage('./src/pages/articles.html', './pages/articles.html'),
createPage('./src/pages/articles2.html', './pages/articles2.html'),
createPage('./src/pages/articles3.html', './pages/articles3.html'),
createPage('./src/pages/articles4.html', './pages/articles4.html'),
createPage('./src/pages/articles5.html', './pages/articles5.html'),
createPage('./src/pages/vzaim.html', './pages/vzaim.html'),
createPage('./src/pages/vzaim2.html', './pages/vzaim2.html'),
createPage('./src/pages/vzaim3.html', './pages/vzaim3.html'),
createPage('./src/pages/vzaim4.html', './pages/vzaim4.html'),
createPage('./src/pages/vzaim5.html', './pages/vzaim5.html'),
createPage('./src/pages/zvuk.html', './pages/zvuk.html'),
createPage('./src/pages/tests.html', './pages/tests.html'),

createPage('./src/articles/art1_1.html', './articles/art1_1.html'),
createPage('./src/articles/art1_2.html', './articles/art1_2.html'),
createPage('./src/articles/art1_3.html', './articles/art1_3.html'),
createPage('./src/articles/art1_4.html', './articles/art1_4.html'),
createPage('./src/articles/art1_5.html', './articles/art1_5.html'),
createPage('./src/articles/art1_6.html', './articles/art1_6.html'),
createPage('./src/articles/art1_7.html', './articles/art1_7.html'),
createPage('./src/articles/art1_8.html', './articles/art1_8.html'),
createPage('./src/articles/art1_9.html', './articles/art1_9.html'),

createPage('./src/articles2/art2_1.html', './articles/art2_1.html'),
createPage('./src/articles2/art2_2.html', './articles/art2_2.html'),
createPage('./src/articles2/art2_3.html', './articles/art2_3.html'),
createPage('./src/articles2/art2_4.html', './articles/art2_4.html'),
createPage('./src/articles2/art2_5.html', './articles/art2_5.html'),
createPage('./src/articles2/art2_6.html', './articles/art2_6.html'),
createPage('./src/articles2/art2_7.html', './articles/art2_7.html'),
createPage('./src/articles2/art2_8.html', './articles/art2_8.html'),
createPage('./src/articles2/art2_9.html', './articles/art2_9.html'),

createPage('./src/articles3/art3_1.html', './articles3/art3_1.html'),
createPage('./src/articles3/art3_2.html', './articles3/art3_2.html'),
createPage('./src/articles3/art3_3.html', './articles3/art3_3.html'),
createPage('./src/articles3/art3_4.html', './articles3/art3_4.html'),
createPage('./src/articles3/art3_5.html', './articles3/art3_5.html'),
createPage('./src/articles3/art3_6.html', './articles3/art3_6.html'),
createPage('./src/articles3/art3_7.html', './articles3/art3_7.html'),
createPage('./src/articles3/art3_8.html', './articles3/art3_8.html'),
createPage('./src/articles3/art3_9.html', './articles3/art3_9.html'),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
// createPage(),
]

module.exports = htmlPages