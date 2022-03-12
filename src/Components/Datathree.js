import React from 'react'
import axios from 'axios'


class Datathree extends React.Component{

    state={

        data:[]
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then((resp)=>{

            this.setState({
                data:resp.data
            })
        })
    }

    render(){
            console.log(this.state.data , "todo Data")
            let response = this.state.data.map((item, i)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
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

export default Datathree




