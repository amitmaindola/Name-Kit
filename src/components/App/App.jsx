import React from "react";
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import ResultContainer from "../ResultContainer/ResultContainer";
import './app.css'

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component{

    state = {
        headerText: 'This is a cool app!',
        headerCompressed:false,
        suggestedNames: []
    };

    handleInputchange=(inputText)=>{
        this.setState({
            headerCompressed: (inputText.length>0),
            suggestedNames: inputText.length?name(inputText):[]
        })
    }

    render(){
        return (
            <div>
                <Header headerCompressed={this.state.headerCompressed}/>
                <SearchBox onInputChange = {this.handleInputchange}/>
                <ResultContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    }
}

// function App() {
//     return <h1>This is my component</h1>
// }

export default App