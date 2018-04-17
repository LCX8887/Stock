import React from 'react';

class StockRow extends React.Component{
    render(){
        const index = this.props.index+1;
        const changePercent = Math.floor(this.props.stock.changePercent*100)/100;
        var trStyle = {
            borderWidth: 0.5,
            borderStyle: "solid",
            borderColor: "rgb(226, 226, 226)",
            textAlign: "center"
        };
        return(
            <tr style={trStyle} id={this.props.stock.symbol} onClick={this.props.handleSelect}>
                <td>{index}</td>
                <td>{this.props.stock.companyName}</td>
                <td>{this.props.stock.symbol}</td>
                <td>{this.props.stock.sector}</td>
                <td>{this.props.stock.change}</td>
                <td>{changePercent}</td>
                <td>{this.props.stock.avgTotalVolume}</td>
             </tr>
        );
    }
    
}

export default StockRow;