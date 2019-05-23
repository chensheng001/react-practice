import React from 'react';
import '../../assets/css/meal.css';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            list: [],
            domain : 'http://a.itying.com'
        }
    }

    getAllList = () => {
        const apiUrl = '/meal-data.json';
        axios.get(apiUrl).then((res) => {
            this.setState({
                list: res.data.result
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        this.getAllList();
    }

    render(){
        return (
            <div className='main'>
                <h2>无人点餐系统</h2>
                <button>
                    <Link to='/login'>登录</Link>
                </button>

                {
                    this.state.list.map((value,key) => {
                        return (
                            <div className="item" key={key}>
                                <h3 className="item_cate">{value.title}</h3>
                                <ul className="item_list">
                                    {
                                        value.list.map((v,k) => {
                                            return (
                                                <li key={k}>
                                                    <Link to={`/detail/${v._id}`}>
                                                        <div className="inner">
                                                            <img src={require(`../../assets/imgs/${v.img_url}`)} />
                                                            <p className="title">{v.title}</p>
                                                            <p className="price">¥{v.price}</p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Home;