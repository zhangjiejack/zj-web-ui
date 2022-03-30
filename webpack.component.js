const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require('glob')
const list = {}
// 文件格式
// {
//   card: './components/lib/card/index.js',
//   demo: './components/lib/demo/index.js'
// }
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  console.log('files', files)
  for (let file of files) {
    const component = file.split(/[/.]/)[2]
    list[component] = `./${file}`
  }
  console.log('list', list)
}
makeList('components/lib', list)
module.exports = {
  entry: list,
  mode: 'development',
  output: {
    filename: '[name].umd.js', // card.umd.js
    path: path.resolve(__dirname, 'dist/js'),
    library: 'mui',
    libraryTarget: 'umd'
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      }
    ]
  }
}