import React from 'react'
import axios from 'axios'


class Datatwo extends React.Component{

    state={

        zohaib:[]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((resp)=>{
                    console.log(resp.data)
                    this.setState({
                    zohaib: resp.data
                })
        })
    }

    componentWillMount(){

        console.log("component will mount is rendered");
    }


    render(){

        console.log(this.state.data);
        let response= this.state.zohaib.map((item, i)=>{
                   return(
                       <div>
                           <h1>{item.name}</h1>
                           <h1>{item.email}</h1>
                       </div>
                   )

        })


        return(
            <div>
                {response}
            </div>
        )
    }
}

export default Datatwo