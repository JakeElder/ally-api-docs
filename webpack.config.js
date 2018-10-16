const fs = require('fs')
const { HotModuleReplacementPlugin } = require('webpack')
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = (env, { mode }) => {
  const DEV = mode === 'development'

  const config = {
    name: 'default',
    entry: './src/entry.js',
    devtool: DEV ? 'cheap-module-source-map' : false,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'default.js',
      sourceMapFilename: '[file].map'
    },
    devServer: { hot: true },
    module: { rules: [] },
    plugins: [],
  }

  // Loaders
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: JSON.parse(fs.readFileSync('./.babelrc'))
    }]
  })

  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, 'node_modules'),
    use: ['style-loader', 'css-loader']
  })

  config.module.rules.push({
    test: /\.(svg|png)$/,
    include: path.resolve(__dirname, 'src/images'),
    use: 'file-loader'
  })

  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, 'src'),
    use: [{
      loader: 'style-loader',
      options: {
        sourceMap: DEV
      }
    }, {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        localIdentName: '[name]-[local]',
        modules: true,
        sourceMap: DEV,
        // minimize: !DEV
      }
    }]
  })

  // Plugins
  config.plugins.push(
    new HtmlPlugin({
      title: 'Ally API Docs',
      template: './src/index.html'
    })
  )

  config.plugins.push(
    new HotModuleReplacementPlugin()
  )

  return config
}

