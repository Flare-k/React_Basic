import React from 'react';
import PropTypes from 'prop-types';

export default class ContactCreate extends React.Component {
    // name, phone을 input으로 넣어야하기 때문에 state 생성
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);   // 버튼 뿐만아니라 엔터를 눌러도 저장되도록..
    }   // state를 초기화해준다. 

    handleChange(e) {
        let nextState = {}; // 빈 객체를 만들어준다. 이렇게 하면 여러개의 input 값을 받을 수 있다.
        nextState[e.target.name] = e.target.value;  //  input태그의 name (name과 phone)
        this.setState(nextState);
    }

    handleClick() {
        const contact = {
            name: this.state.name,
            phone: this.state.phone
        }

        this.props.onCreate(contact);   // Contact.js에 있는 메소드를 props로 불러옴
        // 다시 input 초기화
        this.setState({
            name: '',
            phone: ''
        });
    }

    handleKeyPress(e) {
        if (e.charcode === 13) {    // 13 = enter
            this.handleClick(); 
        }
    }

    render() {
        return(
            <div>
                <h2>Contact Create</h2>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="phone" 
                        value={this.state.phone}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                    />
                </p>
                <button onClick={this.handleClick}>Create</button>
            </div>
        );
    }
}

ContactCreate.propTypes = {
    onCreate: PropTypes.func
};

ContactCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined') }
};