import React, {Component} from 'react'

class Elementmake extends Component {
    
    render() { 
        return (  
            <div onClick= {this.props.onCreate} className="btn btn-primary m-2">Create ELement</div>
        );
    }
}
 
export default Elementmake;