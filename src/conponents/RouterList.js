import React from 'react';
import {Link} from 'react-router-dom';
class RouterList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            list: [
                {id: '1001',title: 'list----001'},
                {id: '1002',title: 'list----002'},
                {id: '1003',title: 'list----003'},
            ]
        }
    }

    render(){
        return (
            <div>
                <h3>我是routerList页面--动态路由</h3>

                <ul>
                    {
                        this.state.list.map((value,key) => {
                            return (
                                <li key={key}>
                                    <Link to={`/RouterContent/${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

                <hr/>
                <ul>
                    {
                        this.state.list.map((value,key) => {
                            return (
                                <li key={key}>
                                    <Link to={`/RouterProduct?id=${value.id}`}>{value.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default RouterList;