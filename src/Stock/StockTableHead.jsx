import React from 'react';

class StockTableHead extends React.Component{
    render(){
        const tableHead = this.props.tableHead;       
        return(
            <thead>            
                <tr className="stockTableHead">
                    {tableHead.map(head => <th key={head}>{head}</th>)}
                </tr>
            </thead>            
        );
    }
    
}

export default StockTableHead;