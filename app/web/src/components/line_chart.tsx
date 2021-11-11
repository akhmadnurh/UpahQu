import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Line
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
              borderColor : '#312E81',
              backgroundColor: '#312E81',
              pointBackgroundColor:'#ffffff',
              fill:true,
              tension:0.2
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart