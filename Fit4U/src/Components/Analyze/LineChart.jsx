import { Line } from "react-chartjs-2";
import React from 'react'
import filters from "../../Hooks/sanitizeData";
import '../../Styles/chart.css'

const LineChart = ({ exercise }) => {

  const data = filters.generateChartData(exercise)

  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{exercise.name}</h2>
      <Line
        data={data}
        options={{
          plugins: {
            title: {
              display: false
            },
            legend: {
              display: false
            },
          }
        }}
      />
  </div>
  )
}

export default LineChart
