import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: ["OH", "OK", "dsd", "OK", "dsd"],
      datasets: [
        {
          label: "Financial Modeling Prep Ratings",
          data: [1, 2, 4, 2, 5],
          fill: false,
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgb(201, 203, 207, 0.2)",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div className="OHLCChart">
        <div class="body-container col-11 col-md-10 col-lg-9 col-centered">
          <div class="table-container margin-top-2rem">
            <h1 class="header-black">GRAPHS</h1>
            <Bar
              data={this.state}
              options={{
                responsive: true,
                // maintainAspectRatio: false,
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        beginAtZero: true,
                      },
                      scaleLabel: {
                        display: true,
                        labelString: "Rating Score",
                      },
                    },
                  ],
                },
                tooltips: {
                  callbacks: {},
                },
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;