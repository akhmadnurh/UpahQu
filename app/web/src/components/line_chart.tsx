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
              // backgroundColor: '#312e8115',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },{
              label: '# of votes',
              data: [11, 18, 2, 4, 8, 3],
              borderColor : '#ff6600',
              // backgroundColor: '#ff660015',
              pointBackgroundColor:'#ffffff',
              pointRadius:5,
              pointHoverRadius:7,
              borderWidth:2,
              // tension:0.2
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart