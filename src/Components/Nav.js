import React, { Component } from 'react'

 class Nav extends Component {

    
    render() {
        console.log(this.props.name);
        return (
            <div>
                Nav
                <h1>{this.props.name}</h1>
                <h1>{this.props.name1}</h1>
                <p>{this.props.name2}</p>            
            </div>
        )
    }
}

export default Nav
