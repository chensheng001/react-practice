import React from 'react';
import {Redirect} from 'react-router-dom'

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            loginFlag : false
        }
    }

    loginForm = (e) => {
        e.preventDefault();
        const userName = this.refs.userName.value;
        const password = this.refs.password.value;
        if (userName === 'admin' && password === '123') {

            this.setState({
                loginFlag: true
            })
        }else {
            alert('登录失败')
        }
    }

    render(){
        if (this.state.loginFlag) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                <h2 style={{'textAlign':'center'}}>这是登录页</h2>
                <form onSubmit={this.loginForm}>
                    <p><input type="text" ref="userName" placeholder='输入用户名'/></p>
                    <p><input type="password" ref="password" placeholder='输入密码'/></p>
                    <p><input type="submit" value='登录'/></p>
                </form>
            </div>
        )
    }
}

export default Login;