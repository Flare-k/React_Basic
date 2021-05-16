import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            contactData : [
            {name : "Kang", phone:"010-0001-0001"},
            {name : "Yeon", phone:"010-0020-0002"},
            {name : "Wook", phone:"010-0300-0003"},
            {name : "Choi", phone:"010-4000-0004"}]
        };
        
        this.handleChange = this.handleChange.bind(this);
    }
  
    // input에 입력이 가능하기 위해서는 target이 변하는걸 감지해야 한다.
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    render() {
    
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;   // name에 search에 입력된 내용이 포함되어 있다면 true
            })

            return data.map((contact, i) => {
                return (<ContactInfo contact={contact} key={i}/>);
            });
        };
    
        return (
            <div>
                <h1>Contacts</h1>
                <input 
                    name="keyword"
                    placeholder='Search'
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponent(this.state.contactData)}</div>
            </div>
        );
    }
};