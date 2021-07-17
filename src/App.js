import React, { Component } from 'react';
import './App.css';
import Keypad from './Components/Keypad';
import Result from './Components/Result';


class App extends Component {
    constructor(){
        super();
        this.state={
            result: ""
        }
    }
    render() {
        return (
            <div className="calculator-body">
                <Result result={this.state.result} />
                <Keypad />
            </div>
        );
    }
 
}

export default App;
