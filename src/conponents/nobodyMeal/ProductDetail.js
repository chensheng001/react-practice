import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ProductDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            detail: []
        }
    }

    getDetail(id) {
        const apiUrl = '/meal-detail-data.json';
        axios.get(apiUrl).then((res) => {
            this.setState({
                detail: res.data.result[0]
            })
        }).catch((error) => {
            console.log(error);
        })
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.getDetail(id);
    }

    render(){
        return (
            <div className='detail'>
                <div className="back">
                    <Link to='/'>返回</Link>
                </div>

                <div className="p_content">
                    <div className="p_info">
                        {this.state.detail.img_url ? <img src={require(`../../assets/imgs/${this.state.detail.img_url}`)} /> : ''}
                        <h2>{this.state.detail.title}</h2>
                        <p className="price">{this.state.detail.price}/份</p>
                    </div>
                    <div className="p_detial">
                        <h3>
                            <div dangerouslySetInnerHTML={{__html: this.state.detail.content}} />
                        </h3>
                        <div className="p_content">
                            <p>
                                韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排
                            </p>

                            <br/>
                            <p>
                                韩国辣酱海鲜炒面,青椒炒牛肉,芦笋腰果炒虾仁,『家常料理』简单又好吃的辣炒起司年糕鸡排
                            </p>
                        </div>
                    </div>
                </div>


                <footer className="pfooter">

                    <div className="cart">
                        <strong>数量:</strong>
                        <div className="cart_num">
                            <div className="input_left">-</div>
                            <div className="input_center">
                                <input type="text" readOnly="readonly" value="1" name="num" id="num"/>
                            </div>
                            <div className="input_right">+</div>
                        </div>

                    </div>

                    <button className="addcart">加入购物车</button>
                </footer>
            </div>
        )
    }
}

export default ProductDetail;