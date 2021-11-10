import React from 'react'
import { Line, defaults } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of votes',
              data: [12, 19, 3, 5, 2, 3],
            },
          ],
        }}
      />
    </div>
  )
}

export default LineChart