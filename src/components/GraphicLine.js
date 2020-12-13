import React from "react";
import { Line } from "react-chartjs-2";

const GraphicLine = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "Ventas",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 30,
              fontColor: "grey",
            },
          },
        }}
      />
    </div>
  );
};

export default GraphicLine;
