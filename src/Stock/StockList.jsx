import React from 'react';
import StockTable from "./StockTable";
import SortBar from "./SortBar";
import jq from 'jquery';


class StockList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sortItems: void 0,
      sortType:"mostactive",
      currentTime:null,
      columeArr:[{"COMPANY NAME":"companyName"},{"SYMBOL":"symbol"},{"SECTOR":"sector"},
                {"CHANGE":"change"},{"CHANGE PERCENT":"changePercent"},{"AVG VOLUME":"avgTotalVolume"}]      
    };
    this.handleSort = this.handleSort.bind(this);
  } 
  
  handleSort = 
    (e) => {
      var me = this;
      var currentTime = new Date(); 
      currentTime = currentTime.toLocaleString(); 
      var url = "https://api.iextrading.com/1.0/stock/market/list/"+e.currentTarget.name;  
      jq.getJSON(url,function(result){
        me.setState({sortItems:result,
                     sortType:e.currentTarget.name,
                     currentTime:currentTime
                    });
      });
    }

  
  componentDidMount() {
    var me = this;
    var currentTime = new Date().toLocaleString(); 
    var url = "https://api.iextrading.com/1.0/stock/market/list/"+me.state.sortType;
    jq.getJSON(url,function(result){      
      me.setState({
        sortItems:result,
        currentTime:currentTime});
    });
  }
    render() {
      const columeArr = this.state.columeArr;
      const stockList = this.state.sortItems;
      const handleSelect = this.props.handleSelect;
      const handleSort = this.handleSort;
      const currentTime = this.state.currentTime;     
     
        return (
          <div>
            <SortBar handleSort={handleSort}/>
            <StockTable handleSelect={handleSelect} stockList={stockList} currentTime={currentTime} columeArr={columeArr}/>
          </div>
        );}
}
export default StockList;