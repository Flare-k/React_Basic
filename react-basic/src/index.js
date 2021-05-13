import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

/*
  webpack이 어떠한 파일을 특정 상황에 갈아끼울 수 있는지 아직 모른다.
  따로 설정해줘야 한다.
if (module.hot) {
    module.hot.accept();
}
*/
    /*
  하지만 이렇게 되면 로컬 state를 유지하지 못한다.
  가령 <h1>Hello {this.state.name} </h1>
  을 설정해주고 Hello의 내용이 수정되면 state.name은 화면에서 없어지게 된다.
  그래서 react-hot-loader가 필요하다.
*/