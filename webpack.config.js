module.exports = {
  entry: './src/filter',

  output: {
    path: './lib',
    filename: 'filter.js',
    library: 'ReactFilter',
    libraryTarget: 'umd'
  },

  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  }
};
