// import React, {useEffect, useRef, useState} from 'react';
// // import {Bar} from 'react-chartjs-2';
// import {ChartData, ChartOptions} from 'chart.js';

// const options: ChartOptions = {
//     indexAxis: 'y',
//     scales: {
//         x: {
//             grid: {
//                 display: false
//             },
//         },
//         y: {
//             beginAtZero: true,
//             grid: {
//                 display: false
//             },
//             ticks: {
//                 display: false
//             }
//         }
//     },
//     elements: {
//         bar: {
//             borderWidth: 2,
//         },
//     },
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//         legend: {
//             display: false,
//             position: 'right',
//         },
//         zoom: {
//             zoom: {
//                 wheel: {
//                     enabled: true,
//                 },
//                 pinch: {
//                     enabled: true
//                 },
//                 mode: 'xy',
//             },
//             pan:{
//                 enabled:true,
//                 mode:'x'
//             },
//         }
//     }
// };

// const labels = ['Timeline'];

// function ProgressBar({ fragmentsObj }) {
//     const ref = useRef()

//     const [fragments, setFragments] = useState([])

//     const data: ChartData = {
//         labels,
//         datasets: [
//             {
//                 data: [500],
//                 borderColor: 'red',
//                 backgroundColor: 'red',
//             }
//         ],
//     };

//     useEffect(() => {
//         // const id = setInterval(() => {
//         //     setFragments(prev => {
//         //         return [...prev, prev.length]
//         //     })
//         // }, 1000)
//         //
//         // return () => {
//         //     clearInterval(id)
//         // }
//     }, [])

//     useEffect(() => {
//         if (Object.values(fragmentsObj).length === 0) return;
//         const arr = Object.values(fragmentsObj)
//         console.log(arr[0].start)
//         setFragments(arr.map(frag => frag.start))
//     }, [fragmentsObj])

//     return (
//         <div
//             style={{
//                 height: '500px',
//                 width: '100%'
//             }}
//         >
//             <Bar
//                 options={options}
//                 data={data}
//             />
//         </div>
//     );
// }

// export default ProgressBar;
