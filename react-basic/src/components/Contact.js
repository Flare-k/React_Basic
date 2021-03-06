import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetails from './ContactDetails';
import ContactCreate from './ContactCreate';
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

    componentWillMount() {
        // contactData 값이 localStorage 안에 존재한다면 setState를 통하여 저장된 값을 불러오자
        const contactData = localStorage.contactData;

        if (contactData) {
            this.setState({
                contactData: JSON.parse(contactData)
            })
        }
    }

    // component의 state가 업데이트될 때마다 실행되는 API
    componentDidUpdate(preProps, preState) {
        // 이전 값과 지금 값 비교
        if (JSON.stringify(preState.contactData) != JSON.stringify(this.state.contactData)) {
            localStorage.contactData = JSON.stringify(this.state.contactData);
            
        }
    }
  
    // input에 입력이 가능하기 위해서는 target이 변하는걸 감지해야 한다.
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        });
        // Search를 위한 handleChange
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
        if (this.state.selectedKey < 0) {
            return;
        }   // 어떠한 것도 선택되지 않으면 아무 행동도 하지 않는다.

        this.setState({
            contactData: update(this.state.contactData,
                { $splice: [[this.state.selectedKey, 1]] }
            ),  //  selectedKey부터 1개 삭제
            selectedKey: -1  // selectedKey를 -1로 다시 초기화
        });
    }

    handleEdit(name, phone) {
        this.setState({
            contactData: update(this.state.contactData, 
                {
                    [this.state.selectedKey] : {    //  selectedKey번째 요소를 수정한다
                        name: { $set: name },
                        phone: { $set: phone }  // 파라미터로 받은 name, phone으로 수정
                    }
                }    
            )
        });
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
                {/* Search */}
                <input 
                    name="keyword"
                    placeholder='Search'
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                {/* Contact List */}
                <div>{mapToComponent(this.state.contactData)}</div>
                {/* Contact Details */}
                <ContactDetails 
                    isSelected={this.state.selectedKey != -1}
                    contact={this.state.contactData[this.state.selectedKey]}
                    onRemove={this.handleRemove}
                    onEdit={this.handleEdit}
                />
                {/* Create */}
                <ContactCreate
                    onCreate={this.handleCreate}    // props 전달
                />
            </div>
        );
    }
};