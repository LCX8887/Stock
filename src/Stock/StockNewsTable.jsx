import React from 'react';
import StockNewsRow from './StockNewsRow';


class StockNewsTable extends React.Component{

    render() {
      const rows = [];
      var news;
      if (this.props.selectedItem != null){
        news = this.props.selectedItem;       
        news.map(function(newItem,index) {
            rows.push(<StockNewsRow newItem={newItem} key={index} index={index}/>);
        });
      }  
        return (
          <div>
          {rows}
          </div>
        );
    }
     
}
export default StockNewsTable;