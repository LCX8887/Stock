import React from 'react';
import StockNewsRowTitle from './StockNewsRowTitle';
import StockNewsRowContent from './StockNewsRowContent';

class StockNewsRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          contentHidden:true
        };
        this.handleSelect = this.handleSelect.bind(this);
      }    
      handleSelect = (
        (e) => {this.setState({contentHidden:!this.state.contentHidden})}
    
    );
    render(){
        const contentHidden = this.state.contentHidden;
        const newItem = this.props.newItem;
        const index = this.props.index+1;
        if(contentHidden){
            return(                
                <StockNewsRowTitle newItem = {newItem} index = {index} handleSelect = {this.handleSelect}/>                
            );
        }else{
            return(
                <div>                
                <StockNewsRowTitle newItem = {newItem}  index = {index} handleSelect = {this.handleSelect}/>
                <StockNewsRowContent newItem = {newItem}/>                
                </div>
            );
        }    
        
    }
    
}

export default StockNewsRow;