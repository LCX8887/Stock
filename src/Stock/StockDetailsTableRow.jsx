import React from 'react';


class StockDetailsTableRow extends React.Component{
    render(){
        const tableDetails = this.props.tableDetails;
        const tableDetailsThs = selectTh(tableDetails);
        const tableDetailsTds = selectTd(tableDetails);
       
        return(
           <table className="stockDetailsTableBody">
               <thead>
                    <tr>
                        {tableDetailsThs.map((tableDetailsTh,index) => 
                            <th key={index}>{tableDetailsTh}</th>
                        )}
                    </tr>
               </thead>
               <tbody>
                    <tr>
                        {tableDetailsTds.map((tableDetailsTd,index) => 
                            <td key={index}>{tableDetailsTd}</td>
                        )}
                    </tr>
               </tbody>
           </table>
        );
    }
    
}
function selectTh(obj){
    var result = [];
    var objLen = obj?obj.length:0;
    for(var i=0;i<objLen;i++){
        result.push(Object.keys(obj[i])[0]);
    }
    return result;
}
function selectTd(obj){
    var result = [];
    var objLen = obj?obj.length:0;
    for(var i=0;i<objLen;i++){
        result.push(Object.values(obj[i])[0]);
    }
    return result;
}
export default StockDetailsTableRow;