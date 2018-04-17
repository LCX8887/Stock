import React from 'react';

class StockNewsRowTitle extends React.Component{
    render(){ 
        var p1Style={
            display:"inline-block",
            fontSize:12,
            margin:10,
            width:"5%"
        };
        var p2Style={
            display:"inline-block",
            fontSize:12,
            margin:10,
            width:"70%"
        };
        var p3Style={
            display:"inline-block",
            fontSize:12,
            margin:10,
            width:"15%"
        };
        var divStyle={
            width:"100%"
        };
        const datetime = this.props.newItem.datetime.slice(0,10);
        
        return(           
            <div style={divStyle} onClick={this.props.handleSelect}>
                <p style={p1Style}>{this.props.index}</p>
                <p style={p2Style}>{this.props.newItem.headline}</p>
                <p style={p3Style}>{datetime}</p>
             </div>
            
        );
    }
    
}

export default StockNewsRowTitle;