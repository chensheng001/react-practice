import React from 'react';
import Main from "./Main";
import Info from "./Info";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return (
            <div>
                <div className='userMain'>
                    <div className="left">
                        <br/>
                        <br/>
                        <Link to='/user'>用户中心</Link>
                        <br/>
                        <br/>
                        <Link to='/user/info'>消息通知</Link>
                        <br/>
                        <br/>
                        <Link to={`${this.props.match.url}/info`}>消息通知</Link>
                    </div>
                    <div className="right">
                        <Route exact path='/user' component={Main}/>
                        <Route path='/user/info' component={Info}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;