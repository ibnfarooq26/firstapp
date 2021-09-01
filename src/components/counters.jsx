import React, { Component } from 'react';
import Counter from './counter';
import Elementmake from './elementmake'
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
        const counters=this.state.counters.map(c=>c);
        counters.forEach(c=> c.id==counterId? c.count=0 : c.count)
        this.setState({counters})
    }
    createElement=()=>{
        console.log('create element is working')
        const counters= this.state.counters.map(c=>c);
        console.log(counters)
        const id= counters.length;
        const newElement= {id, count:0};
        console.log(newElement)
        counters.push(newElement);
        this.setState({counters})
    }
   
    render() {  
                return ( <div>
                    <Elementmake onCreate={this.createElement}/>
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


