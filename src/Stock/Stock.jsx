import React from 'react';
import StockList from "./StockList";
import StockDetails from "./StockDetails"
import StockNews from "./StockNews";
import StockRecentTrend from "./StockRecentTrend";
import jq from 'jquery';


class Stock extends React.Component{      
    constructor(props){
      super(props);
      this.state = {
        selectedSymbol:"",
        selectedItem:null
      };
      this.handleSelect = this.handleSelect.bind(this);
    }    

    handleSelect = 
      (e) => {
        var me = this;
        var url = "https://api.iextrading.com/1.0/stock/"+e.currentTarget.id+"/batch?types=quote,news,chart&range=1m&last=5";
        if(e.currentTarget.id){
          jq.getJSON(url,function(result){  
            me.setState({selectedItem:result});
            me.setState({selectedSymbol:e.currentTarget.id});
          });
        }}

  
    render() {
      const selectedItem = this.state.selectedItem;
     
      if(selectedItem){
        return ( 
        <div>
          <div className="leftBar">
          <StockList handleSelect={this.handleSelect}/>
          </div>
          <div className="rightBar">     
            <StockDetails  selectedItem= {selectedItem.quote} />
            <StockNews  selectedItem= {selectedItem.news} />
            <StockRecentTrend  selectedItem= {selectedItem.chart} />
          </div>
        </div>)
      }else {   
        return (
          <div>
            <StockList handleSelect={this.handleSelect}/>
          </div>
        )}
      }
    }
export default Stock;