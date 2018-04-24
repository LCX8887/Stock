import React from 'react';
import Chart from './Chart';
import CloseButton from './CloseButton';


class StockRecentTrend extends React.Component{      
  constructor(props){
    super(props);
    this.state = {
      hidden:false,
      buttonContent:"close",
      currentComponent:"RECENT STOCK TREND"
    };
    this.handleHidden = this.handleHidden.bind(this);
  }

  handleHidden = 
    (e) => {
      this.setState({hidden:!this.state.hidden});
      if(this.state.buttonContent == "close"){
        this.setState({buttonContent:"open"});
      }else{
        this.setState({buttonContent:"close"});
      }    
    }

    render() {
      const hidden = this.state.hidden;
      const buttonContent = this.state.buttonContent;
      const chartData = this.props.chartData;
      const currentComponent = this.state.currentComponent;      
      const dataArray = chartData.map(function(item){
        return item.volume;
      });
      const labelsArray = chartData.map(function(item){
        return item.date;
      })
      const chart = {
        type: 'line',
        data: {
          labels: labelsArray,
          datasets: [{
                label: '# of Volume',
                backgroundColor: 'rgb(239, 189, 206)',
                borderColor: 'rgb(243, 137, 173)',
                data: dataArray
            }]}
        
      };
      if(hidden){
        return (
          <div>
          <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>         
         </div>
        );
      }else{
        return (
          <div>
            <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>
            <canvas id="myChart" width="400" height="400"></canvas>
            <Chart chart={chart}/>
          </div>
        );
      }
    }
}

export default StockRecentTrend;