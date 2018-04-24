import React from 'react';

class StockNewsRowContent extends React.Component{
    render(){
        const summary = this.props.newItem.summary;
        const source = this.props.newItem.source;        
        return(
            <div>
           <p>{summary}</p>
           <p>{source}</p>
           </div>
        );
    }
    
}

export default StockNewsRowContent;