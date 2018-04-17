import React from 'react';
import StockRow from './StockRow';

class StockTable extends React.Component{     
    
    render(){
        const stockList = this.props.stockList;       
        const handleSelect = this.props.handleSelect;
        const currentTime = this.props.currentTime;
        var rows= [];
        var tableStyle = {
            borderCollapse: "collapse",
            borderStyle:"solid",
            borderColor:"rgb(226, 226, 226)",
            borderWidth:1,
            width:"100%"
        };
        var theadStyle={
            fontSize:15
        };
        var updateTimeStyle={
            textAlign:"right",
            backgroundColor:"rgb(255, 205, 145)"
        };

        if(stockList){
            stockList.map(function(stock,index) {
                rows.push(<StockRow stock={stock} index={index} key={index} handleSelect={handleSelect} />);
            });
        }

    return(    
        <table style={tableStyle}>
            <thead style={theadStyle}>
                <tr>
                    <th>NO</th>
                    <th>COMPANY NAME</th>
                    <th>SYMBOL</th>
                    <th>SECTOR NAME</th>
                    <th>CHANGE</th>
                    <th>CHANGE PERCENT</th>
                    <th>AVG VOLUME</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            <tr><td colSpan="7" style={updateTimeStyle}>Updated on {currentTime}</td></tr>
            </tbody>
      </table>
    );}
}
export default StockTable;