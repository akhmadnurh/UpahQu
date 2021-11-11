import React from 'react'
import { Bar, defaults } from 'react-chartjs-2'

const BarChart = () => {
  return (
    <div>
      <Bar
        options={{
          responsive: true,
          maintainAspectRatio: true,
        }}
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor:'#312E81',
              borderRadius:5
            },
          ],
        }}
      />
    </div>
  )
}

export default BarChart