import React from 'react';

class StockTableFoot extends React.Component{
    render(){
        const currentTime = this.props.currentTime;        
        return(
            <tfoot>            
                <tr>
                    <td>{currentTime}</td>
                </tr> 
            </tfoot>           
        );
    }
    
}

export default StockTableFoot;