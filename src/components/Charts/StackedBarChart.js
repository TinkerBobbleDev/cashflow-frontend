import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    plugins: {
        title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels = ['January', 'February', 'March'];
const nos1 = [1250, 500, 200 ]
const nos2 = [87, 300, 1000 ]
const nos3 = [383, 373, 388 ]

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: nos1,
            backgroundColor: 'rgb(255, 99, 132)',
            // [12, 48, 78, ]
            // month-wise spending for each category
        },
        {
            label: 'Dataset 2',
            data: nos2,
            backgroundColor: 'rgb(75, 192, 192)',
        },
        {
            label: 'Dataset 3',
            data: nos3,
            backgroundColor: 'rgb(53, 162, 235)',
        },
        {
            label: 'Dataset 4',
            data: [],
            backgroundColor: 'rgb(53, 162, 235)',
        },

        /*

        colors = []
        *   categories.map((category) => {
                label: category.name,
                data: catdata.map((index)=> arr[index])
                const col = Math.floor(Math.random()*16777215).toString(16);
                const col = "#" + col
                colors.push(col)
        })  
         */
    ],
};


const StackedBarChart = () => {
    return <Bar options={options} data={data} />;

};

export default StackedBarChart;