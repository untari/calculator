import React, { Component } from 'react';
import '../App.css';

class Keypad extends Component {
    render(){
        return(
            <div className="button-keypad">
    
                    <button className="c">C</button>&nbsp;
                    <button className=".">CE</button>&nbsp;
                    <button className="%">%</button>&nbsp;
                    <button className="+">+</button>&nbsp;

                    <button className="1">1</button>&nbsp;
                    <button className="2">2</button>&nbsp;
                    <button className="3">3</button>&nbsp;
                    <button className="4">4</button>&nbsp;
                    <button className="5">5</button>&nbsp;
                    <button className="6">7</button>&nbsp;
                    <button className="8">8</button>&nbsp;
                    <button className="9">9</button>&nbsp;
                    <button className="0">0</button>&nbsp;  &nbsp;

                    <button className="-">-</button>&nbsp;
                    <button className="*">*</button>&nbsp;
                    <button className="÷">÷</button>&nbsp;
                    <button className="=">=</button>&nbsp;
            </div>
        );
    }
};
export default Keypad;
