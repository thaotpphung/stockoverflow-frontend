import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ['jan', 'fen', 'thid'],
      datasets: [
        {
          label: "Stock Price of ",
          data: [222,444,222],
          borderColor: "#FF0000",
          borderWidth: 2,
          backgroundColor: "rgb(255, 0, 0, 0.3)",
          lineTension: 0,
          pointRadius: 0.5,
        }
      ],

    };
  }
  render() {
    return (
      <div className="LineChart">
        <div class="body-container col-11 col-md-10 col-lg-9 col-centered">
          <div class="table-container margin-top-2rem">
            <h1 class="header-black">GRAPHS</h1>
            <Line
            data={this.state}
            options={{
              scales: {
                xAxes: [{
                  ticks: {
                    autoSkip: true,
                    // maxTicksLimit: 50
                  }
                }],
                yAxes: [
                  {
                    ticks: {
                      callback: function (value, index, values) {
                        return value + "$";
                      },
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Openning Price ($)",
                    },
                  },
                ],
              },
            }}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;