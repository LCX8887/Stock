import React from 'react';
import CloseButton from './CloseButton';
import StockDetailsTable from './StockDetailsTable';

class StockDetails extends React.Component{      
  constructor(props){
    super(props);
    this.state = {
      hidden:false,
      buttonContent:"close",
      headColumeArr:["companyName","calculationPrice","change","changePercent"],
      columeArr:[{"LAST":"close"},{"CHANGE":"change"},{"%CHANGE":"changePercent"},
                  {"VOLUME":"avgTotalVolume"},{"AVG TOTAL VOLUME":"avgTotalVolume"},
                  {"OPEN":"open"},{"HIGH":"high"},{"LOW":"low"},{"CLOSE":"close"},
                  {"DELAYED PRICE":"delayedPrice"},{"PREVIOUSE CLOSE":"previousClose"},{"52WKHI":"week52High"},
                  {"52WKLO":"week52Low"},{"YTDCHANGE":"ytdChange"},{"EXCHANGE":"primaryExchange"},{"SECTOR":"sector"}],
      numbersOfColume:4
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
    const details = this.props.details;
    const headColumeArr = this.state.headColumeArr;
    const columeArr = this.state.columeArr;
    const numbersOfColume = this.state.numbersOfColume;
    const hidden = this.state.hidden;
    const buttonContent = this.state.buttonContent;
    const currentComponent = "QUOTE";
    if(hidden){
      return (
        <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>
      );
     }else{
       return (
         <div>
        <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>
        <StockDetailsTable details= {details} headColumeArr={headColumeArr} columeArr={columeArr} numbersOfColume={numbersOfColume}/>
        </div>
       );
     }
       
  }
     
}
export default StockDetails;