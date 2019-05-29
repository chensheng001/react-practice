import React from 'react';

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
                        <Link to={`${this.props.match.url}/info`}>消息通知2</Link>
                    </div>
                    <div className="right">

                        {
                            this.props.routes.map((value,key) => {
                               return value.exact ? <Route key={key} exact path={value.path} component={value.component} /> : <Route key={key} path={value.path} component={value.component} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default User;