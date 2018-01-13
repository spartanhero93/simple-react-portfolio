import React, { Component } from 'react';
import Screen from './screen';
import Button from './button';

class Calculator extends Component {
    constructor(){
        super();
        this.state = {
            problem: "",
            answer: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return (
            <div className='calculator-frame'>
              <div className='calculator-name'>
                Texas Instruments
              </div>
                <Screen problem={this.state.problem} answer={this.state.answer}/>
                <div className='button-row'>
                    <Button label={'7'} handleClick={this.handleClick} type='input' />
                    <Button label={'8'} handleClick={this.handleClick} type='input' />
                    <Button label={'9'} handleClick={this.handleClick} type='input' />
                    <Button label={'/'} handleClick={this.handleClick} type='input' />
                </div>
                <div className="button-row">
                    <Button label={'4'} handleClick={this.handleClick} type='input' />
                    <Button label={'5'} handleClick={this.handleClick} type='input' />
                    <Button label={'6'} handleClick={this.handleClick} type='input' />
                    <Button label={'*'} handleClick={this.handleClick} type='input' />
                </div>
                <div className="button-row">
                    <Button label={'1'} handleClick={this.handleClick} type='input' />
                    <Button label={'2'} handleClick={this.handleClick} type='input' />
                    <Button label={'3'} handleClick={this.handleClick} type='input' />
                    <Button label={'-'} handleClick={this.handleClick} type='input' />
                </div>
                <div className="button-row">
                    <Button label={'0'} handleClick={this.handleClick} type='input' />
                    <Button label={'.'} handleClick={this.handleClick} type='input' />
                    <Button label={'+'} handleClick={this.handleClick} type='input' />
                    <Button label={'='} handleClick={this.handleClick} type='action' />
                    <Button label={'C'} handleClick={this.handleClick} type='action' />
                </div>
            </div>
        )
    }
    handleClick(event){
        const value = event.target.value;
        switch (value) {
            case '=': {
                const answer = eval(this.state.problem).toString();
                this.setState({answer});
                break
            }
            case 'C': {
                this.setState({problem: '', answer: ''});
                break
            }
            default : {
                this.setState({problem: this.state.problem += value});
                break
            }
        }
    }
}

export default Calculator;