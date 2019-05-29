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
import Main from "./conponents/user/Main";
import RHome from './conponents/home/Home'
import './assets/css/index.css'
import User from "./conponents/user/User";
import routes from "./conponents/model/routes"
import { Layout, Menu, Icon ,Breadcrumb} from 'antd';
// import './assets/css/App.css';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            title: '这是父组件的title',
            collapsed: false,
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

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        const { Header, Content, Footer, Sider } = Layout;
        const { SubMenu } = Menu;
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
                <div className='app'>
                    <Layout>
                        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                            <div className="logo" />
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span><Link to="/">首页</Link></span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span><Link to="/user">user</Link></span>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1" title={
                                    <span>
                              <Icon type="user" />
                              <span>User</span>
                            </span>
                                }
                                >
                                    <Menu.Item key="3">Tom</Menu.Item>
                                    <Menu.Item key="4">Bill</Menu.Item>
                                    <Menu.Item key="5">Alex</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                  <Icon type="team" />
                                  <span>Team</span>
                                </span>
                                    }
                                >
                                    <Menu.Item key="6">Team 1</Menu.Item>
                                    <Menu.Item key="8">Team 2</Menu.Item>
                                </SubMenu>
                                <Menu.Item key="9">
                                    <Icon type="file" />
                                    <span><Link to="/news">新闻</Link></span>
                                </Menu.Item>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </Header>
                            <Content style={{ margin: '0 16px' }}>
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>User</Breadcrumb.Item>
                                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

                                    <Route exact path='/' component={Home} />
                                    <Route path='/news' component={News} />
                                    <Route path='/user' component={User} />
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                        </Layout>
                    </Layout>
                </div>

        </Router>



        )
    }
}

export default App;
