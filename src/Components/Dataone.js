import React from 'react'
import axios from 'axios'


class Dataone extends React.Component{
    state = {

        data:[]
    }

    componentDidMount(){
        console.log("Hello from Dataone");
        axios.get("https://jsonplaceholder.typicode.com/comments").then((resp)=>{
                console.log(resp.data);
                this.setState({
                data:resp.data
            })
        })
    }
    
    render(){

        console.log(this.state.data);
        let response = this.state.data.map((item,i)=>{
            return(
                <div>

                    <h1>{item.userId}</h1>
                    <h1>{item.name}</h1>
                    
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

export default Dataone

