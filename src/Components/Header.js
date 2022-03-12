import React, { Component } from 'react'
import Products from './Products'

 class Header extends Component {
    render() {
        console.log(this.props, "header");
        return (
            <div>
              header 

              <h1>{this.props.movie1}</h1>
              <h1>{this.props.hero1}</h1>
                <h1>{this.props.movie2}</h1>
                <h1>{this.props.hero2}</h1> 
                <Products male2="Green Shirt"></Products>
            </div>
        )
    }
}

export default Header
