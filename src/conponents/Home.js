import React, {Component} from 'react';
import '../assets/css/index.css'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'haha',
            age: 24,
            userInfo: {
                userName: 'sss',
                number: 1001
            },
            list1:[1,2,3,4]
        };
        this.run2 = this.run2.bind(this);
    }

    run1(){
        console.log(this.state.userInfo)
    }

    run2() {
        console.log(this.state.userInfo)
    }

    run3 = ()=> {
        console.log(this.state.userInfo)
    }

    changeName = () => {
        this.setState({
            name: this.state.name === 'haha' ? 'hehe' : 'haha'
        });
    }

    changeAge = (age) => {
        this.setState({
            age: age
        });
    }

    render() {
        var list_result = this.state.list1.map(function (value,key) {
            return <li key={key}>{value}</li>
        });
        return (
            <div>
                <h2>这是个子组件！</h2>
                <p className='red'>姓名: {this.state.name}</p>
                <p style={{'color': 'green'}}>年龄: {this.state.age}</p>
                <p><img style={{'width': '100px'}} src={require('../assets/imgs/logo.svg')} alt=""/></p>
                <hr/>
                遍历数组
                <ul>
                    {
                        this.state.list1.map((value,key) => {
                            return <li key={key}>{value}</li>
                        })
                    }
                </ul>
                <ul>
                    {list_result}
                </ul>

                <hr/>
                <button onClick={this.run1.bind(this)}>click1</button>
                <button onClick={this.run2}>click2</button>
                <button onClick={this.run3}>click3</button>
                <p>
                    <button onClick={this.changeName}>改变state的name</button>
                </p>
                <p>
                    <button onClick={this.changeAge.bind(this, 15)}>click方法传参数</button>
                </p>
            </div>
        )
    }
}

export default Home;