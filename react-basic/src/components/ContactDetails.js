import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component {
    // Edit을 눌렀을때 input으로 toggle할 수 있는 기능을 만들어야 한다.
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle() {
        if (!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        }
        else {
            this.handleEdit();
        }

        this.setState({
            isEdit: !this.state.isEdit // 누를때마다 true, false 토글된다.
        })
    }

    handleChange(e) {
        let nextState = {}; // 빈 객체를 만들어준다. 이렇게 하면 여러개의 input 값을 받을 수 있다.
        nextState[e.target.name] = e.target.value;  //  input태그의 name (name과 phone)
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    render() {

        const details = (<div>
                            <p>{this.props.contact.name}</p>
                            <p>{this.props.contact.phone}</p>
                        </div>);
        const blanks = (<div>Not Selected</div>);

        const edit = (
            <div>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                </p>
                <p>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="phone" 
                        value={this.state.phone}
                        onChange={this.handleChange}
                        />
                </p>
            </div>
        )
        
        const views = this.state.isEdit ? edit : details;
        
        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? views : blanks}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit ? 'OK' : 'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        )
    }
}

/*
선택이 안 된 경우엔 undefined이기 때문에 console에 오류를 출력할 것이다.
이를 위해 defaultProps를 설정해준다.
*/
ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => { console.error('onRemove not defined') },
    onEdit: () => { console.error('onEdit not defined') },
}

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}