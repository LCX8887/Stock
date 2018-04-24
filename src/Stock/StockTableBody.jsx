import React from 'react';
import StockTableRow from './StockTableRow';

class StockTableBody extends React.Component{
    render(){
       const stockList = this.props.stockList;
       const handleSelect = this.props.handleSelect;       
       
        return(
            <tbody>
                {stockList.map((stock,index) => 
                    <StockTableRow stock={stock} key={index} index={index} handleSelect={handleSelect}/>
                )}
            </tbody>
        );
    }
}
StockTableBody.defaultProps = {
    stockList: []
}
export default StockTableBody;