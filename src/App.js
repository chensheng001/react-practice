import React from 'react';
import logo from './assets/imgs/logo.svg';
import Home from "./conponents/Home";
import Event from "./conponents/Event";
import Todolist from "./conponents/Todolist";
import Todolist02 from "./conponents/Todolist02";
import News from "./conponents/News";
import Axios from "./conponents/Axios";
import FetchJsonp from "./conponents/FetchJsonp";
import Lifecycle from "./conponents/Lifecycle";
import MyRouter from "./conponents/MyRouter";
import MHome from "./conponents/nobodyMeal/Home"
import ProductDetail from "./conponents/nobodyMeal/ProductDetail";
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Login from "./conponents/nobodyMeal/Login";
// import './assets/css/App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            title: '这是父组件的title'
        }
    }

    setShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    updateTitle = () => {
        this.setState({
            title: '这是改变后的父组件title'
        })
    }

    render() {
        return (
            /*
            * <div className="App">
                <button onClick={this.setShow}>{this.state.isShow ? '销毁子组件' : '加载子组件'}</button>
                <br/>
                <br/>
                <button onClick={this.updateTitle}>改变父组件的title</button>
                <hr/>
                {this.state.isShow ? <Lifecycle app={this}/> : ''}
            </div>
            * */
            <Router>
                <div>

                    <Route exact path='/' component={MHome} />
                    <Route path='/login' component={Login} />
                    <Route path='/detail/:id' component={ProductDetail} />
                </div>

            </Router>
        )
    }
}

export default App;
