import React from 'react';
import url from 'url';

class RouterProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

            id: ''
        }
    }

    componentDidMount() {
        const query = url.parse(this.props.location.search,true).query;
        this.setState({
            id : query.id
        })
    }

    render(){
        return (
            <div>
                <h4>我是RouterProduct---</h4>
                id:{this.state.id}
            </div>
        )
    }
}

export default RouterProduct;