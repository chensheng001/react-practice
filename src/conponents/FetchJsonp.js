import React, {Component} from 'react';
import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    getData= () => {
        fetchJsonp('https://www.runoob.com/try/ajax/jsonp.php')
        .then(function(response) {
            console.log(response)
            return response.json()
         }).then(function(json) {
            console.log('parsed json', json)
            console.log(json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    render() {
        return (
            <div>
                <h2>测试Axios</h2>
                <hr/>
                <button onClick={this.getData}>点击使用fetch-jsonp发送请求</button>

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

export default FetchJsonp;