import React from 'react';
import CloseButton from './CloseButton';
import StockNewsTable from './StockNewsTable';



class StockNews extends React.Component{      
  constructor(props){
    super(props);
    this.state = {
      hidden:false,
      buttonContent:"close",
      currentComponent:"NEWS"
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
      const news = this.props.news;
      const hidden = this.state.hidden;
      const buttonContent = this.state.buttonContent;
      const currentComponent = this.state.currentComponent;
     if(hidden){
       return (
        <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>
       );
     }else{
       return (
         <div>
          <CloseButton handleHidden = {this.handleHidden} buttonContent = {buttonContent} currentComponent = {currentComponent}/>
          <StockNewsTable news= {news}/>
        </div>
       );
     }
       
        }
     
}
export default StockNews;