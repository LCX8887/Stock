import React from 'react';

class SortBar extends React.Component{
    render(){
        var sortBarStyle={
            backgroundColor:"rgb(240, 190, 130)",
            height:30,
            textAlign: "right"
        }; 
        var buttonStyle={
            backgroundColor: "white",            
            borderWidth: 0.5,
            borderStyle:"solid",
            borderColor: "#e2e2e2",
            padding: 3
        };   
        return(
            <div style={sortBarStyle}>
                <button style={buttonStyle} name="mostactive" onClick = {this.props.handleSort}>MOST ACTIVE</button>
                <button style={buttonStyle} name="gainers" onClick = {this.props.handleSort}>TOP GAINERS</button>
                <button style={buttonStyle} name="losers" onClick = {this.props.handleSort}>TOP LOSERS</button>
             </div>
        );
    }    
} 

export default SortBar;