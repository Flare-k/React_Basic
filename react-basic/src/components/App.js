import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
        this.addMore = this.addMore.bind(this);
    }

    addMore() {
        this.setState({
            name : "Kang"
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.addMore}>Click Me</button>
                <h1>Hello!!! {this.state.name}</h1>
            </div>
        );
    }
}

export default App; // module.export = App;
