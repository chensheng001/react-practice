import React from 'react';

class Todolist02 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    addData= ()=> {
        const tempList = this.state.list;
        tempList.push(this.refs.title.value);
        this.refs.title.value = '';
        this.setState({
            list: tempList
        })
    }

    deleteData = (key) => {
        const tempList = this.state.list;
        tempList.splice(key,1);
        this.setState({
            list: tempList
        })
    }

    render() {
        return (
            <div>
                <h2>title</h2>

                <p>
                    <input ref="title" type="text"/><button onClick={this.addData}>add+</button>
                </p>

                <ul>
                    {this.state.list.map((value,key) => {
                        return <li key={key}>{value}<button onClick={this.deleteData.bind(this.key)}>delete -</button></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Todolist02;
