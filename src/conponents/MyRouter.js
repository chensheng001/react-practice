import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from "./Home";
import Todolist from "./Todolist";
import  '../assets/css/index.css'

class MyRouter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h2>----------路由----------</h2>

                <Router>
                    <div className='Nav'>
                        <Link to="/">首页</Link>
                        <Link to="/Todolist">Todolist</Link>

                        <hr/>
                        <Route exact path='/' component={Home} />
                        <Route path='/Todolist' component={Todolist} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default MyRouter;