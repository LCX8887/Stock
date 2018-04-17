import React from 'react';




class CloseButton extends React.Component{      
    render() {
      var barStyle = {
        backgroundColor:"rgb(240, 190, 130)"
      };
      var buttonStyle = {
        backgroundColor:"white"
      };
      var nameStyle = {
        display:"inline-block",
        marginLeft: 20,
        fontSize: 12
      };      
       return (
        <div style={barStyle}>
          <button style={buttonStyle} onClick={this.props.handleHidden}>{this.props.buttonContent}</button>
          <p style={nameStyle}>{this.props.currentComponent}</p>
        </div>
       );
     }
     
}
export default CloseButton;