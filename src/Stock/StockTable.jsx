import React from 'react';
import StockTableBody from './StockTableBody';
import StockTableHead from './StockTableHead';
import StockTableFoot from './StockTableFoot';


class StockTable extends React.Component{
    render(){
        const stockList = selectColume(this.props.stockList,this.props.columeArr);       
        const handleSelect = this.props.handleSelect;
        const currentTime = this.props.currentTime;
        const tableHead = selectTableHead(this.props.columeArr);
       
    return(    
        <table>
            <StockTableHead tableHead={tableHead}/>   
            <StockTableBody stockList={stockList} handleSelect={handleSelect}/>
            <StockTableFoot currentTime={currentTime} />            
      </table>
    );}
}

function selectColume(originalList,columeArr){
    var result = [];
    var originalListLen = originalList? originalList.length:0;
    var columeName;
    for(var i=0;i<originalListLen;i++){
        result[i] = new Object();
        for(var j=0;j<columeArr.length;j++){
            columeName = Object.values(columeArr[j]);
            Object.defineProperty(result[i], columeName, {
                value: originalList[i][columeName],
                writable: true,
                enumerable: true
            });
        }
    }
    return result;
}
function selectTableHead(columeArr){
    var result = ["NO"];
    var columeTitle;
    for(var i=0;i<columeArr.length;i++){
        columeTitle = Object.keys(columeArr[i]);
        result.push(columeTitle[0]);
    }
    return result;
}
export default StockTable;