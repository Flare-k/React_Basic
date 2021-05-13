class Codelab extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Codelab.propTypes = {
  name:PropTypes.string,
  number:PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name : 'Unknown',
  number : 0
};

class App extends React.Component {
  render() {
      return (
          <Codelab name={this.props.name} number={this.props.number}>{this.props.children}</Codelab>
      );
  }
}

ReactDOM.render(<App number={5}>i'm your child</App>,document.getElementById('root'));
