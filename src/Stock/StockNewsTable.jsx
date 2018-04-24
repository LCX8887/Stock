import React from 'react';
import StockNewsRow from './StockNewsRow';


class StockNewsTable extends React.Component{

    render() {
      const news = this.props.news;
        return (
          <div>
            {news.map((newItem,index) => 
              <StockNewsRow newItem={newItem} key={index} index={index}/>
            )}
          </div>
        );
    }
     
}
StockNewsTable.defaultProps = {
  news: []
}
export default StockNewsTable;