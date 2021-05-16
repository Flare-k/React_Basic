import React from 'react';

export default class ContactDetails extends React.Component {
    render() {

        const details = (<div>
                            <p>{this.props.contact.name}</p>
                            <p>{this.props.contact.phone}</p>
                        </div>);
        const blanks = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? details : blanks}
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
    }
}