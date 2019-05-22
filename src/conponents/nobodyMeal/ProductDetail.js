import React from 'react';

class ProductDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.location.search)
    }

    render(){
        return (
            <div>
                <h3>我是商品详情页</h3>
            </div>
        )
    }
}

export default ProductDetail;