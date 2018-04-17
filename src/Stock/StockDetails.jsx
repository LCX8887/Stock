import React from 'react';
import CloseButton from './CloseButton';
import StockDetailsTable from './StockDetailsTable';

class StockDetails extends React.Component{      
  constructor(props){
    super(props);
    this.state = {
      hidden:false,
      buttonContent:"close"
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
    const selectedItem = this.props.selectedItem;
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
        <StockDetailsTable selectedItem= {selectedItem}/>
        </div>
       );
     }
       
        }
     
}
export default StockDetails;