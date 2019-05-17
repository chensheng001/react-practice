import React from 'react';
import storage from '../model/storage';

class Todolist02 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'hahaha',
                    checked: true
                },
                {
                    title: 'heiheihei',
                    checked: false
                }
            ]
        }
    }

    addData= (e)=> {
        if (e.keyCode === 13) {
            const tempList = this.state.list;
            tempList.push(
                {
                    title: this.refs.title.value,
                    checked: false
                }
            );
            this.refs.title.value = '';
            this.setState({
                list: tempList
            })

            storage.set('todolist', this.state.list);
        }
    }

    deleteData = (key) => {
        const tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list: tempList
        })

        storage.set('todolist', this.state.list);
    }

    handleCheckbox = (key) => {
        let tempList = this.state.list;
        tempList[key].checked = !tempList[key].checked;
        this.setState({
            list: tempList
        })

        storage.set('todolist', this.state.list);
    }

    componentDidMount() {
        if (storage.get('todolist')) {
            this.setState({
                list: storage.get('todolist')
            })
        }
    }

    render() {
        return (
            <div>
                <h2>todolist</h2>

                <p>
                    <input ref="title" type="text" onKeyUp={this.addData}/>
                </p>

                <h3>代办事项</h3>
                <ul>
                    {this.state.list.map((value,key) => {
                        if (!value.checked) {
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleCheckbox.bind(this, key)}/>
                                    {value.title}
                                    <button onClick={this.deleteData.bind(this,key)}>delete -</button>
                                </li>
                            )
                        }
                    })}
                </ul>

                <h3>已办事项</h3>
                <ul>

                    {this.state.list.map((value,key) => {
                        if (value.checked) {
                            return (
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.handleCheckbox.bind(this, key)}/>
                                    {value.title}
                                    <button onClick={this.deleteData.bind(this,key)}>delete -</button>
                                </li>
                            )
                        }
                    })}
                </ul>

            </div>
        )
    }
}

export default Todolist02;
