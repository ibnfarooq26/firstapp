import React, { Component } from 'react';
import reactDom from 'react-dom';

class Counter extends Component {

styles={
    fontSize: 50

}


    render() {
        

        return (

        <div class='m-5'>
            <span style={this.styles}className="btn btn-secondary m-2">{this.props.onFormat(this.props.counter.id)}</span>
            <button style={this.styles} className="btn btn-primary m-2" onClick={()=>this.props.onRender(this.props.counter.id)}> Increment</button>
            <button  style={this.styles} class="btn btn-warning m-2" onClick={()=>this.props.onReset(this.props.counter.id)}>Reset</button>
            <button  style={this.styles} class="btn btn-dark m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>

        </div>

        );
    }
   



 deleteCounter(){

 }

}
export default Counter;