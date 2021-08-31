import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    state= { counters: [
        {id: 0, count:0},
        {id: 1, count:0},
        {id: 2, count:0},
        
    ]
    }

   
    renderCounter=(counterId)=>{
        const counters= this.state.counters.map(c=>c);
        counters.forEach(c=> c.id==counterId? c.count++ : c.count)
         this.setState({counters})
        
        
        // this.setState({counters : counters})
    }
    formatCounter=(counterId)=>{
     const counters= this.state.counters.filter(c=> c.id==counterId);
     return counters[0].count 
    }
     
       
    

    
    resetCounter=(counterId)=>{
        console.log('resetCounter is working')
        let counters=this.state.counters.map(c=>c);
        counters.forEach(c=> c.id==counterId? c.count=0 : c.count)
        this.setState({counters})
    }
   
    render() {  
                return ( <div>
{this.state.counters.map(counter=><Counter 
counter={counter}
onRender={this.renderCounter}
onFormat={this.formatCounter}
onReset={this.resetCounter}
onDelete={this.deleteCounter}
/>)}
        </div> );
    }
    deleteCounter=(counterId)=>{
        console.log('deleteCounter is working', counterId)
        // const counters=this.state.counters.filter(c=>c.id !=counterId);
        // this.setState({counters})
        const counters=this.state.counters.map(c=>c);
        counters.forEach(c=> c.id==counterId? counters.splice(counterId,1) : counters) 
        this.setState({counters})
        
    }

}
 
export default Counters;

