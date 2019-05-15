import React from 'react';

class Event extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userinfo: ''
        }
        this.getEvent = this.getEvent.bind(this);
    }

    getEvent = (event) => {
        console.log(event);
        event.target.style.color = 'red';
        console.log(event.target.getAttribute('aid'));
    }

    getInputInfo = () =>{
        alert(this.state.userinfo)
    }

    changeInput = (event) => {
        this.setState({
            userinfo: event.target.value
        })
    }

    changeInput2 = () => {
        this.setState({
            userinfo: this.refs.userName.value
        })
    }

    keyUp = (e)=>{
        if (e.keyCode === 13) {
            alert(e.target.value)
        }
    }

    render() {
        return (
            <div>
                <h2>这是个event demo！</h2>

                <button aid="123" onClick={this.getEvent}>获取event</button>

                <br/>

                <input onChange={this.changeInput} type="text"/><button onClick={this.getInputInfo}>获取input</button>
                <br/>
                <input ref='userName' onChange={this.changeInput2} type="text"/><button onClick={this.getInputInfo}>获取input2</button>

                <hr/>
                <h2>键盘事件</h2>
                <input type="text" onKeyUp={this.keyUp}/>

            </div>
        )
    }
}

export default Event;