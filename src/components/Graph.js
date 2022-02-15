import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Graph(props) {
    const {fullData} = props;
    let labels = []
    let prices = []
    
    fullData.forEach(el => {
      const a = new Date(el.curr);
      const b = a.toLocaleString("en-US", {timeZone:"Asia/Kolkata"});
      labels.push(b);
      prices.push(el.val);
    });

    const options = {
      responsive:true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Bitcoin Price Chart',
        },
      },
    };
    
    const data = {
      labels:labels.slice(-50),
      datasets: [
        {
          label: 'Bitcoin Price',
          data: prices.slice(-50),
          borderColor: 'rgba(96, 215, 140, 1)',
          backgroundColor: 'rgba(96, 215, 140, 0.5)',
        },
      ],
    };


  return (
    <div className='w-4/5 sm:w-4/6 md:w-1/2'>
      <Line 
      style = {{minHeight:"400px", minWidth:"300px"}}
      options={options} 
      data={data} />
    </div>
  )
}

export default Graph