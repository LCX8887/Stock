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
        const index = this.props.index;
        const headline = this.props.newItem.headline;
        const handleSelect = this.props.handleSelect;

    
        
        return(           
            <div style={divStyle} onClick={handleSelect}>
                <p style={p1Style}>{index}</p>
                <p style={p2Style}>{headline}</p>
                <p style={p3Style}>{datetime}</p>
             </div>
            
        );
    }
    
}

export default StockNewsRowTitle;