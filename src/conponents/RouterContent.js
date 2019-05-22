import React from 'react';

class RouterContent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
    }

    render(){
        return (
            <div>
                <h4>我是RouterContent---</h4>
            </div>
        )
    }
}

export default RouterContent;