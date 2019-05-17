import React from 'react';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '这是个Header title',
            msg: '这是个Header msg'
        }
    }

    getNewsData = ()=> {
        alert(this.props.news.state.msg)
    }

    getHeader = () => {
        alert('这是个header里的函数')
    }

    getParentWithParams = () => {
        this.props.news.getParentMethodWithParams('这是子组件的参数params');
    }

    render() {
        return (
            <div>
                <p>这是一个Header组件</p>
                <div>通过父组件获取到的msg：<strong>{this.props.msg}</strong></div>
                <p>
                    <button onClick={this.props.getParentMethod}>调用父组件的方法</button>
                </p>
                <p>
                    <button onClick={this.getParentWithParams}>调用父组件的方法并传参数</button>
                </p>
                <p>
                    <button onClick={this.getNewsData}>获取父组件的this指向的msg</button>
                </p>

            </div>
        )
    }
}

export default Header;