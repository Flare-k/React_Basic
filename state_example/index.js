class Counter extends React.Component {
  constructor(props) { {/*constructor method의 parameter는 props이다. 클래스가 만들어질 때 전달받는다*/}
    super(props); {/*상속받은 클래스인 React.Component의 constructor method를 먼저 실행한다. super(props)를 먼저 실행 해줘야 this.state라든지 props 등에 접근할 수 있게 된다.*/}
    this.state = {
      value : 0
    };
    this.handleClick = this.handleClick.bind(this) // js component는 this가 무엇인지 모르므로 this를 바인딩해준다.
  }
  
  handleClick() {
    this.setState({
      value:this.state.value + 1
    });
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleClick.bind(this)}>Press Me</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Counter/>
    );
  }
};

ReactDOM.render(
  <App></App>,
  document.getElementById("root")
);