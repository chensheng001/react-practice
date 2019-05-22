import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Home from "./Home";
import Todolist from "./Todolist";
import  '../assets/css/index.css'
import News from "./News";
import RouterList from "./RouterList";
import RouterContent from "./RouterContent";
import RouterProduct from "./RouterProduct";

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
                        <Link to="/News">News</Link>
                        <Link to="/RouterList">RouterList</Link>
                    </div>
                    <hr/>
                    <div className="view">
                        <Route exact path='/' component={Home} />
                        <Route path='/Todolist' component={Todolist} />
                        <Route path='/News' component={News} />
                        <Route path='/RouterList' component={RouterList} />
                        <Route path='/RouterContent/:id' component={RouterContent} />
                        <Route path='/RouterProduct' component={RouterProduct} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default MyRouter;