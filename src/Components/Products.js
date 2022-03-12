import React, {Component} from 'react'

class Products extends Component{
    render(){
        return(
            <div>
                Hello Products
                <h1>{this.props.male1}</h1>
                <h1>{this.props.male2}</h1>
            </div>
        )
    }
}

export default Products