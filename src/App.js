import React, { Component } from 'react'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Products from './Components/Products'
import Dataone from './Components/Dataone'
import Datatwo from './Components/Datatwo'
import Datathree from './Components/Datathree'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'
import Bootstrap from './Components/Bootstrap'
 class App extends Component {

  state = {
    data:[]
  }

componentDidMount(){
  console.log("hello from componentdidmount");
    axios.get("https://jsonplaceholder.typicode.com/posts").then((resp)=>{
      console.log(resp.data);
      this.setState({
        data:resp.data
      })
    })
}


// componentWillMount(){

//   console.log("component will mount is rendered");
// }



  render() {
    console.log("this is render");
      let response= this.state.data.map((item,i)=>{
        return(
          <div>
            <h1>{item.id}</h1> 
          </div>
        )
      })


    console.log(this.state.data,"hello from render");  
    return (

      <div>
          {/* hello app */}
          {/* {response}  */}

          {/* <Dataone /> */}

          <Router>

                  <Route path="/dataone" component={Dataone}></Route>
                  <Route path="/datatwo" component={Datatwo}></Route>
                  <Route path="/datathree" component={Datathree}></Route>
                  <Route path='/bootstrap'  component={Bootstrap} />
          </Router>

          {/* <Router>
                  <Route path="/nav">
                    <Nav name="Zohaib"
                         name1="Qaiser"
                    />
                  </Route>

                  <Route path="/header">
                    <Header
                      move1="StarWars"
                      movie2="BlackHawkDown"
                    />
                  </Route>

                  <Route path="/Products">
                    <Products
                      male1="Blue Shirt"
                      male2="Green Shirt"
                    />
                  </Route>


          </Router>*/}
          
      </div>
    )
  }
}

export default App

