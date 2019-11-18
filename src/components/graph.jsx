import React from "react";
import { Line } from "react-chartjs-2"
import "chartjs-plugin-annotation";

class LineGraph extends React.Component {
  render() {
    const { dateData, sysData, diaData, hrData} = this.props;

    let chartData = {
      data: {
        labels: dateData,
        datasets: [
          { label: "Systolic", data: sysData, borderColor: "#ff1744", fill: false},
          { label: "Diastolic", data: diaData, borderColor: "#3d5afe", fill: false},
          { label: "Heart Rate", data: hrData, borderColor: "#00e676", fill: false},
        ]
      },
      options: {
        scales: {
          yAxes: [{
            id: "y-axis-0",
            ticks: {
              min: 0,
              max: 200,
              stepSize: 10
            }
          }]
        },
        maintainAspectRatio: false,
        annotation: {
          drawTime: "beforeDatasetsDraw",
          events: ["click"],
          annotations: [
            {
              drawTime: "beforeDatasetsDraw",
              id: "box1",
              type: "box",
              mode: "horizontal",
              yScaleID: "y-axis-0",
              yMin: 90,
              yMax: 120,
              backgroundColor: "rgba(255, 23, 68, 0.25)",
              borderColor: "rgba(255, 23, 68, 0.25)"
            },
            {
              drawTime: "beforeDatasetsDraw",
              id: "box2",
              type: "box",
              yScaleID: "y-axis-0",
              yMin: 60,
              yMax: 80,
              backgroundColor: "rgba(61, 90, 254, 0.25)",
              borderColor: "rgba(61, 90, 254, 0.25)"
            },
            {
              drawTime: "beforeDatasetsDraw",
              id: "box3",
              type: "box",
              yScaleID: "y-axis-0",
              yMin: 60,
              yMax: 100,
              backgroundColor: "rgba(0, 230, 118, 0.25)",
              borderColor: "rgba(0, 230, 118, 0.25)",
            }
          ]
        }
      },
    }

    return (
      <div className="chart">
        <Line data={chartData.data} height={500} width={1000} options={chartData.options}></Line>
      </div>
    );
  }
}

export default LineGraph