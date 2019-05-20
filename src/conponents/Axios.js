import React, {Component} from 'react';
import axios from 'axios';

class Axios extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getData= () => {
        axios.get('/data.json').then(res => {
            this.setState({
               list: res.data.inventories
            });
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <h2>测试Axios</h2>
                <hr/>
                <button onClick={this.getData}>点击使用axios发送请求</button>

                <ul>
                    {
                        this.state.list.map((value,key) => {
                            return <li key={key}>{value.name}: {value.number}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Axios;