// import Chart, { createBackgroundGradient } from 'react-chartjs-2';
// import { useState, useEffect, useRef } from 'react';

// const Expensesss = () => {
//     const chartRef = useRef(null);
//     const [chartData, setChartData] = useState({
//         labels: ['Expenses', 'Remaining'],
//         datasets: [
//             {
//                 id: 1,
//                 label: '',
//                 data: [300, 50],
//             },
//         ],
//     });

//     useEffect(() => {
//         const chart = chartRef.current;

//         if (chart) {
//             setChartData({
//                 datasets: [{
//                     backgroundColor: createBackgroundGradient(chart.ctx),
//                     // ...
//                 }]
//             });
//         }
//     }, []);

//     return (
//         <Chart type='doughnut' data={chartData} />
//     );
// }

// export default Expensesss;