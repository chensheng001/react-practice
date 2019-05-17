import React from 'react';
import Header from "./Header";

class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '这是个news title',
            msg: '这是个news msg'
        }
    }

    getParentMethod = () => {
        alert('这是父组件的方法！')
    }

    getHeaderMsg = () => {
        alert(this.refs.header.state.msg)
    }

    getHeaderMethod = () => {
        this.refs.header.getHeader()
    }

    getParentMethodWithParams = (params) => {
        alert(params)
    }


    render() {
        return (
            <div>
                <h2>这是一个news组件</h2>
                <button onClick={this.getHeaderMsg}>获取子组件msg</button>
                <br/><br/>
                <button onClick={this.getHeaderMethod}>调用子组件方法</button>

                <hr/>
                <Header ref='header' news={this} getParentMethod={this.getParentMethod} msg={this.state.msg}/>
            </div>
        )
    }
}

export default News;