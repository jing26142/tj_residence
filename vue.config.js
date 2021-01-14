module.exports = {
    devServer: {
      proxy: 'http://localhost:8080',
      host : '0.0.0.0',
      port: 8080,
    },
    // publicPath: process.env.NODE_ENV === 'production'
    //   ? '/tj_residence/'
    //   : '/'
  }
