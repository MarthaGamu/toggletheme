import React, { Component } from 'react';
import {Themecontext} from './App';

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:props.initialCount
        }
    }
    changeCount(amount){
        this.setState(prevState=>{
            return{count:prevState.count + amount}
        })
    }
    render() {
        return (
            <Themecontext.Consumer>
                {style =>(

<div>
<button style={style} onClick={()=>this.changeCount(1)}>increment</button>
<span>{this.state.count}</span>
<button  style={style} onClick={()=>this.changeCount(-1)}>decrement</button>

</div>
                )
                  

                }
            
            </Themecontext.Consumer>
        )
    }
}
