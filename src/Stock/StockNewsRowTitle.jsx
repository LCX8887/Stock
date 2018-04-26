import React from 'react';

class StockNewsRowTitle extends React.Component{
    render(){ 
        
        const datetime = this.props.newItem.datetime.slice(0,10);
        const index = this.props.index;
        const headline = this.props.newItem.headline;
        const handleSelect = this.props.handleSelect;

    
        
        return(           
            <div className="stockNewsRowTitle" onClick={handleSelect}>
                <p>{index}</p>
                <p>{headline}</p>
                <p>{datetime}</p>
             </div>
            
        );
    }
    
}

export default StockNewsRowTitle;