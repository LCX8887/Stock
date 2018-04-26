import React from 'react';

class SortBar extends React.Component{
    render(){
        return(
            <div className="sortBar">
                <button name="mostactive" onClick = {this.props.handleSort}>MOST ACTIVE</button>
                <button name="gainers" onClick = {this.props.handleSort}>TOP GAINERS</button>
                <button name="losers" onClick = {this.props.handleSort}>TOP LOSERS</button>
             </div>
        );
    }    
} 

export default SortBar;