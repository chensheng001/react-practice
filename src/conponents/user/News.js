import React from 'react';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import Info from "./Info";

class News extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div>新闻中心</div>
        )
    }
}

export default News;