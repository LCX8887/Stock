import React from 'react';

class StockTableFoot extends React.Component{
    render(){
        const currentTime = this.props.currentTime;  
        return(
            <tfoot>            
                <tr className="stockTableFoot">
                    <td colSpan={7}>Updating on {currentTime}</td>
                </tr> 
            </tfoot>           
        );
    }
    
}

export default StockTableFoot;