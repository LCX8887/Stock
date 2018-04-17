import React from 'react';

class StockNewsRowContent extends React.Component{
    render(){        
        return(
            <div>
           <p>{this.props.newItem.summary}</p>
           <p>{this.props.newItem.source}</p>
           </div>
        );
    }
    
}

export default StockNewsRowContent;