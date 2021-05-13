var webpack = require('webpack')

// 이 객체를 module로 내보낸다.
/* 
  webpack을 실행할 때, 이 모듈을 불러와서 설정으로 사용한다.
  webpack의 핵심적인 기능은 require의 기능을 클라이언트 사이드에서도 사용하고
  코드를 한 파일로 합치는 것이다.
*/
module.exports = {
    entry: './src/index.js',

    // 합친 파일들을 /public/bundle.js에 저장한다.
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    // 개발 서버 설정
    devServer: {
        hot: true,  // 컴포넌트가 수정될 때마다 리로딩
        inline: true,   // hot-reloading에서 필요한 webpack-dev-server의 클라이언트를 bundle에 같이 넣어준다.
        host: '0.0.0.0',    
        port: 4000, // 개발 서버의 port
        contentBase: __dirname + '/public/'
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
        // 자동으로 리로딩하는 기능도 플러그인을 통해서 하게 된다.
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};