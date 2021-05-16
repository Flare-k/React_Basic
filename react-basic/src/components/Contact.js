import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            keyword: '',
            contactData : [
            {name : "Kang", phone:"010-0001-0001"},
            {name : "Yeon", phone:"010-0020-0002"},
            {name : "Wook", phone:"010-0300-0003"},
            {name : "Choi", phone:"010-4000-0004"}]
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
        this.handleCreate = this.handleCreate.bind(this);   //  데이터 추가
        this.handleRemove = this.handleRemove.bind(this);   //  데이터 삭제
        this.handleEdit = this.handleEdit.bind(this);   //  데이터 수정
    }
  
    // input에 입력이 가능하기 위해서는 target이 변하는걸 감지해야 한다.
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectedKey: key
        });

        console.log(key, " is selected");
    }

    handleCreate(contact) {
        this.setState({
            contactData: update(this.state.contactData, { $push: [contact] })
        });
    }

    handleRemove() {
        this.setState({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),  //  selectedKey부터 1개 삭제
            selectedKey: -1
        });
    }

    handleEdit() {
        this.setState({
            contactData: update(this.state.contactData, 
                {
                    [this.state.selectedKey] : {    //  selectedKey번째 요소를 수정한다

                    }
                }    
            )
        })
    }

    render() {
    
        const mapToComponent = (data) => {
            data.sort();
            data = data.filter((contact) => {
                return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;   // name에 search에 입력된 내용이 포함되어 있다면 true
            })

            //  contact는 data parameter를 모두 할당하는 변수. 그리고 그 데이터의 각 인덱스를 i로 받아들인다.
            //  key를 사용하는 이유? 각 데이터의 identity를 주기 위해서이다. 
            return data.map((contact, i) => {
                return (<ContactInfo 
                            contact={contact} 
                            key={i}
                            onClick={() => this.handleClick(i)}
                            />);
                            //  기본 DOM에선 (div, input, button 등..) onClick이 적용된다.
                            //  하지만 Component에선 onClick이 props로 전달되기 때문에 ContactInfo.js의 div에서 설정해줘야한다.
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
                <ContactDetails 
                        isSelected={this.state.selectedKey != -1}
                        contact={this.state.contactData[this.state.selectedKey]}/>
            </div>
        );
    }
};