import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData : [
        {name : "Kang", phone:"010-0001-0001"},
        {name : "Yeon", phone:"010-0020-0002"},
        {name : "Wook", phone:"010-0300-0003"},
        {name : "Choi", phone:"010-4000-0004"}
      ]
    };
  };
  
  render() {
    
    const mapToComponent = (data) => {
      return data.map((contact, i) => {
        return (<ContactInfo contact={contact} key={i}/>);
      });
    };
    
    return (
      <div>
        {mapToComponent(this.state.contactData)}
      </div>
    );
  }
};