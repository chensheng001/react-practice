import React from 'react';

class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: 'hahaha',
            sex: "man",
            city: 'shanghai',
            citys: ['shanghai','beijing'],
            selectAll: false,
            hobby: [
                {title: '篮球',checked: true},
                {title: '足球',checked: false},
            ],
            info: '...'
        }
    }

    changeUserName = (e) => {
        this.setState({
            userName: this.refs.userName.value
        })
    }

    changeSex = (e) => {
        this.setState({
            sex: e.target.value
        })
    }

    changeCity = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    changeHobby = (key) => {
        var hobby = this.state.hobby;
        hobby[key].checked = ! hobby[key].checked;
        this.setState({
            hobby: hobby
        })
    }

    selectAll = () => {
        var hobby = this.state.hobby;
        hobby.map((value) => {
           value.checked = !this.state.selectAll
        });
        this.setState({
            selectAll: !this.state.selectAll,
            hobby: hobby
        })
    }

    resetName = (value) => {
        this.setState({
            userName: value
        })
    }

    changeInfo = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    getData = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>双向数据绑定</h2>

                <input ref="userName" value={this.state.userName} type="text" onChange={this.changeUserName}/>

                <p>{this.state.userName}</p>

                <button onClick={this.resetName.bind(this, 'hehe')}>change userName</button>

                <hr/>
                <input type="radio" value="man" checked={this.state.sex === "man"} onChange={this.changeSex} />男
                <input type="radio" value="woman" checked={this.state.sex === "woman"} onChange={this.changeSex}/>女

                <p>
                    居住城市:
                    <select value={this.state.city} onChange={this.changeCity}>
                        {this.state.citys.map((value,key) => {
                            return <option key={key}>{value}</option>
                        })}
                    </select>
                </p>

                <p>
                    爱好:
                    {
                        this.state.hobby.map((value, key) => {
                            return (
                                <span key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.changeHobby.bind(this,key)}/>{value.title}
                                </span>
                            )
                        })
                    }
                    <input type="checkbox" checked={this.state.selectAll} onChange={this.selectAll} />全选
                </p>

                <p>
                    <textarea value={this.state.info} onChange={this.changeInfo} cols="30" rows="10" />
                </p>

                <p>
                    <button onClick={this.getData}>submit</button>
                </p>
            </div>
        )
    }
}

export default  Todolist;