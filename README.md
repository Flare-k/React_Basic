# React Basic

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


ReactJS 개인공부 내용 정리  

## Configuration

1. Frontend: React.js
2. Backend : Node.js
3. Database: mongoDB


## Set
Node.js version 확인
```sh
$ node -v
```

### Prerequisite

- node v12.x
- npm 6.x

## Global Dependency 설치
```sh
$ npm install -g webpack webpack-dev-server  

(Linux라면 sudo 권한필요)
```
```
1. webpack
브라우저 위에서 import(require)를 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐줍니다. 
일종의 Build Tool로써 ES6 문법 변환, 코드 압축/최적화, Scss/Less -> CSS 변환 등의 역할을 해줍니다.

2. webpack-dev-server
별도의 서버를 구축하지 않고도 static 파일을 다루는 웹 서버를 열 수 있으며 hot-loader를 통하여 코드가 수정될 때마다 자동으로 바뀐 파일만 리로드 되게 할 수 있습니다.
```

## 프로젝트 생성
```
$ mkdir react-basic
$ cd react-basic
$ npm init
```
```
$ mkdir 원하는 폴더명
$ cd 방금 만든 폴더 경로
$ npm init  // node 프로젝트를 시작하는 명령어 (디폴트로 설정한다는 가정)
.. package.json 파일이 생성될 것입니다.
```
> NodeJS는 JS 런타임으로써 JS를 브라우저에서만 사용하는 것이 아니라 서버 사이드에서도 사용할 수 있도록 도와줍니다.


## Dependency 및 Plugin 설치
> React 설치
```
$ npm install --save react react-dom   

'--save' 옵션을 통해 package.json 파일 dependency에 추가됩니다.
```
> 개발 의존 모듈 설치   
```
$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
$ npm install --save-dev react-hot-loader webpack webpack-dev-server

개발 과정에서 필요한 패키지일 경우 '--save-dev'로 관리해준다.
react-hot-loader를 설치해줌으로써 특정 컴포넌트만 load 되도록 합니다.
```

## webpack 설정하기
```
/react-basic 경로에 webpack.config.js 파일을 생성해줍니다.

{
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.0",
    "webpack-dev-server": "^3.11.0"
}
의 버전으로 설정하면 npm run dev-server시 에러없이 동작할 것입니다..!
```

## Reference
[Velopert](https://www.youtube.com/channel/UCmMgRlN-3GKQ_CH7cOtLdvg)

## License

[MIT License](http://khuhub.khu.ac.kr/2017110267/myYoutube/blob/master/LICENSE)

## Contact

이용하시다가 궁금한 점이 있으시면 이쪽으로 연락 부탁드립니다.  
강연욱 - rokkyw@naver.com
