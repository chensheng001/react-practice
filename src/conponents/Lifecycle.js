import React from 'react';

class Lifecycle extends React.Component{
    constructor(props) {
        super(props);
        console.log('01----执行构造函数')
        this.state = {
            msg: '这是子组件的msg'
        }
    }

    componentWillMount() {
        console.log('02-------组件将要挂载')
    }

    componentDidMount() {
        console.log('04-------组件加载完成')
    }

    shouldComponentUpdate() {
        console.log('是否修改子组件');
        return true;
    }

    componentWillUpdate() {
        console.log('即将修改子组件')
    }

    componentDidUpdate() {
        console.log('子组件修改完成')
    }

    componentWillUnmount() {
        console.log('销毁组件')
    }

    componentWillReceiveProps () {
        console.log('父组件里面改变props传值的时候触发！')
    }

    setMsg = (str) => {
        this.setState({
            msg: str
        })
    }

    render() {
        console.log('03---------执行render')
        return (
            <div>
                <h2>这是子组件----生命周期</h2>


                <p>{this.state.msg}</p>
                <p>{this.props.app.state.title}</p>
                <button onClick={this.setMsg.bind(this,'这是修改后的子组件msg')}>修改子组件信息msg</button>
            </div>
        )
    }
}

export default Lifecycle;