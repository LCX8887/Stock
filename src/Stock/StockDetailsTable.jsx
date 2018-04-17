import React from 'react';


class StockDetailsTable extends React.Component{      

    render() {
      var p1Style = {
        margin:5
      };
      var p2Style = {
        display:"inline-block",
        fontSize:30,
        margin: "20px 20px"
      };
      var p3Style = {
        display:"inline-block",
        fontSize: 17,
        margin: 5
      };
      var thStyle = {
        fontSize:3,
        fontWeight:500,
        color:"#b9b1b1"
      };
      var tdStyle = {
        textAlign: "center",
        fontSize:14
      };
      var tableStyle = {
        borderCollapse:"collapse",
        width:"100%"
      };
      var trStyle = {
        borderStyle:"solid",
        borderWidth:0.5,
        borderColor:"#eae1e1"
      };
      var details = {
        "companyName": "-",
        "calculationPrice": "-",
        "change": "-",
        "changePercent": "-",
        "close": "-",
        "avgTotalVolume":"-",
        "open": "-",
        "high": "-",
        "low": "-",
        "close": "-",
        "delayedPrice": "-",
        "previousClose": "-",
        "week52High": "-",
        "week52Low": "-",
        "ytdChange": "-",
        "primaryExchange": "-",
        "sector": "-"
      }; 
      if (this.props.selectedItem != null){
        details = this.props.selectedItem;
        var changePercent = "("+Math.floor(details.changePercent*1000)/1000+"%)";
        
        
      }   
        return (
          <div>
          <div>
            <p style={p1Style}>{details.companyName}</p>
            <p style={p2Style}>{details.close}</p>
            <p style={p3Style}>{details.change}</p>
            <p style={p3Style}>{changePercent}</p>
          </div>
          <table style={tableStyle}>
            <tbody>
            <tr style={trStyle}>
              <th style={thStyle}>LAST</th>
              <th style={thStyle}>CHANGE</th>
              <th style={thStyle}>%CHANGE</th>
              <th style={thStyle}>VOLUME</th>
            </tr>
            <tr style={trStyle}>
              <td style={tdStyle}>{details.close}</td>
              <td style={tdStyle}>{details.change}</td>
              <td style={tdStyle}>{changePercent}</td>
              <td style={tdStyle}>{details.avgTotalVolume}</td>
            </tr>
            <tr style={trStyle}>
              <th style={thStyle}>AVG TOTAL VOLUME</th>
              <th style={thStyle}>OPEN</th>
              <th style={thStyle}>HIGH</th>
              <th style={thStyle}>LOW</th>
            </tr>
            <tr style={trStyle}>
              <td style={tdStyle}>{details.avgTotalVolume}</td>
              <td style={tdStyle}>{details.open}</td>
              <td style={tdStyle}>{details.high}</td>
              <td style={tdStyle}>{details.low}</td>
            </tr>
            <tr style={trStyle}>
              <th style={thStyle}>CLOSE</th>
              <th style={thStyle}>DELAYED PRICE</th>
              <th style={thStyle}>PREVIOUS CLOSE</th>
              <th style={thStyle}>52WKHI</th>
            </tr>
            <tr style={trStyle}>
              <td style={tdStyle}>{details.close}</td>
              <td style={tdStyle}>{details.delayedPrice}</td>
              <td style={tdStyle}>{details.previousClose}</td>
              <td style={tdStyle}>{details.week52High}</td>
            </tr>
            <tr style={trStyle}>
              <th style={thStyle}>52WKLO</th>
              <th style={thStyle}>YTDCHANGE</th>
              <th style={thStyle}>EXCHANGE</th>
              <th style={thStyle}>SECTOR</th>
            </tr>
            <tr style={trStyle}>
              <td style={tdStyle}>{details.week52Low}</td>
              <td style={tdStyle}>{details.ytdChange}</td>
              <td style={tdStyle}>{details.primaryExchange}</td>
              <td style={tdStyle}>{details.sector}</td>
            </tr>
           </tbody>
          </table>
          </div>
        );}
     
}
export default StockDetailsTable;