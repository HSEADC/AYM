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

createPage('./src/articles/act1_1.html', './articles/act1_1.html'),
createPage('./src/articles/act1_2.html', './articles/act1_2.html'),
createPage('./src/articles/act1_3.html', './articles/act1_3.html'),
createPage('./src/articles/act1_4.html', './articles/act1_4.html'),
createPage('./src/articles/act1_5.html', './articles/act1_5.html'),
createPage('./src/articles/act1_6.html', './articles/act1_6.html'),
createPage('./src/articles/act1_7.html', './articles/act1_7.html'),
createPage('./src/articles/act1_8.html', './articles/act1_8.html'),
createPage('./src/articles/act1_9.html', './articles/act1_9.html'),

createPage('./src/articles2/act2_1.html', './articles/act2_1.html'),
createPage('./src/articles2/act2_2.html', './articles/act2_2.html'),
createPage('./src/articles2/act2_3.html', './articles/act2_3.html'),
createPage('./src/articles2/act2_4.html', './articles/act2_4.html'),
createPage('./src/articles2/act2_5.html', './articles/act2_5.html'),
createPage('./src/articles2/act2_6.html', './articles/act2_6.html'),
createPage('./src/articles2/act2_7.html', './articles/act2_7.html'),
createPage('./src/articles2/act2_8.html', './articles/act2_8.html'),
createPage('./src/articles2/act2_9.html', './articles/act2_9.html'),

createPage('./src/articles3/act3_1.html', './articles3/act3_1.html'),
createPage('./src/articles3/act3_2.html', './articles3/act3_2.html'),
createPage('./src/articles3/act3_3.html', './articles3/act3_3.html'),
createPage('./src/articles3/act3_4.html', './articles3/act3_4.html'),
createPage('./src/articles3/act3_5.html', './articles3/act3_5.html'),
createPage('./src/articles3/act3_6.html', './articles3/act3_6.html'),
createPage('./src/articles3/act3_7.html', './articles3/act3_7.html'),
createPage('./src/articles3/act3_8.html', './articles3/act3_8.html'),
createPage('./src/articles3/act3_9.html', './articles3/act3_9.html'),
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