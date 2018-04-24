import React from 'react';


class StockTableRow extends React.Component{
    render(){
        const stockValues = Object.values(this.props.stock);
        const index = this.props.index+1;
        const handleSelect = this.props.handleSelect;
        const id = this.props.stock.symbol;
       
        return(
            <tr id={id} onClick={handleSelect}>
                <td>{index}</td>
                {stockValues.map((stockValue,index) => 
                    <td key={index}>{stockValue}</td>
                )}
             </tr>
        );
    }
    
}

export default StockTableRow;