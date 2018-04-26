import React from 'react';
import StockDetailsTableRow from './StockDetailsTableRow';


class StockDetailsTable extends React.Component{   
    render() {
      const details = this.props.details;
      const headColumeArr = this.props.headColumeArr;
      const columeArr = this.props.columeArr;
      const numbersOfColume = this.props.numbersOfColume;
      const headValues = selectHeadValues(details,headColumeArr);
      const tableDetailsArr = selectTableDetails(details,columeArr,numbersOfColume);
      details.changePercent = Math.floor(details.changePercent*1000)/1000+"%";

        return (
          <div>
            <div className="stockDetailsTableHead">
              {headValues.map((headValue,index) => 
                <p key={index}>{headValue}</p>
              )}
            </div>
            <div>
              {tableDetailsArr.map((tableDetails,index) => 
                <StockDetailsTableRow key={index} tableDetails={tableDetails}/>
              )}            
            </div>
          </div>
        );
      }
     
}
StockDetailsTable.defaultProps = {
  details: []
}
function selectHeadValues(obj,arr,num){
  var result = [];
  for(var i=0;i<arr.length;i++){
    if(i==arr.length-1){
      result.push("("+obj[arr[i]]+")");
    }else{
      result.push(obj[arr[i]]);
    }
  }
  return result;
}

function selectTableDetails(obj,arr,num){
  var result = [];
  var tempArr = [];
  var tempValue;
  var tempKey;
  for(var i=0;i<arr.length;i++){   
    tempValue = Object.values(arr[i])[0];
    tempKey = Object.keys(arr[i])[0];
    var tempObj = new Object();
    Object.defineProperty(tempObj, tempKey, {
      value: obj[tempValue],
      writable: true,
      enumerable: true
  });
    tempArr.push(tempObj);
    if(i%num === num-1){
      result.push(tempArr);
      tempArr = [];
    }
  }
  return result;
}
export default StockDetailsTable;