const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    // 확장자 생략할 수 있게 extention 를 활용합니다.
    extensions: ['.vue', '.js'],
    // 별칭을 짓습니다. src 부터 절대적인 경로로 찾아갈 수 있습니다. (유지보수 UP)
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  entry: './src/main.js',
  output: {
    // path.resolve 필수적임.
    // filename 생략시 entry 파일과 이름이 같습니다.
    path: path.resolve(__dirname, 'dist'),
    // 도메인 절대경로로 실행 섲렁
    publicPath: '/',
    // dist 값을 정리 후 적용합니다.
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // ?! 부정 값 /(?!axios)/
        exclude: /node_modules/, 
        use: 'babel-loader'
      },
      {
        // [정규표현식].test() <.vue> 일치여부 확인합니다.
        test: /\.vue$/,
        use: 'vue-loader', // .vue 확장자 일 시, vue-loader를 실행합니다.
      },
      {
        // loader 순서가 굉장히 중요합니다. 오른쪽에서 왼쪽으로 해석됩니다. 즉 CSS먼저 해석하고 vue style을 적용합니다.
        test: /\.s?css/,
        use: [
          'vue-style-loader',
          'css-loader', 
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: `
                @use "sass:color";
                @use "sass:list";
                @use "sass:map";
                @use "sass:math";
                @use "sass:meta";
                @use "sass:selector";
                @use "sass:string";
                @import "~/scss/_variables";
                @import "~/scss/_mixins";
              `
            }
          }
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader'
          },
        ],
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      // path.resolve 자체적으로 실행되긴합니다! 어떠한 html 파일을 사용할 건지 지정해줍니다.
      template: './index.html',
    }),
    new CopyPlugin({
      // static 폴더에 있는 데이터를 to로 보냅니다 ( 자동으로 dist )
      patterns: [{ from: 'static' }],
    }),
  ],
  devServer: {
    port: 8079,
    historyApiFallback: true
  }
}
