import React from 'react';
import myChart from 'chart.js';

class Chart extends React.Component {
    
    componentDidMount() {
        var ctx = document.getElementById("myChart");
        console.log(this.props.chart);
        this.test = new myChart(ctx, this.props.chart);
        console.log('mounted');
    }
    componentWillUnmount() {
        console.log('unmounted');
    }

    componentWillUpdate(){
        this.test.data.labels = this.props.chart.data.labels;
        this.test.data.datasets = this.props.chart.data.datasets;
        this.test.update();
        console.log('updating');
    }
  render() {
    return (
        <div>
        </div>
        );
  }
}
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}
export default Chart;