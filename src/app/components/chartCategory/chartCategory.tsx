// import React, { useRef, useEffect } from "react";
// import { Canvas, Chart, Interval, Tooltip, Axis } from "@antv/f2";

// const data = [
//   {
//     year: "1951 年",
//     sales: 38,
//   },
//   {
//     year: "1952 年",
//     sales: 52,
//   },
//   {
//     year: "1956 年",
//     sales: 61,
//   },
//   {
//     year: "1957 年",
//     sales: 145,
//   },
//   {
//     year: "1958 年",
//     sales: 48,
//   },
//   {
//     year: "1959 年",
//     sales: 38,
//   },
//   {
//     year: "1960 年",
//     sales: 38,
//   },
//   {
//     year: "1962 年",
//     sales: 38,
//   },
// ];

// const F2Chart: React.FC = () => {
//   const ref = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     if (ref.current) {
//       const context = ref.current.getContext("2d");

//       const { props } = (
//         <Canvas context={context} pixelRatio={window.devicePixelRatio}>
//           <Chart
//             data={data}
//             scale={{
//               sales: {
//                 tickCount: 5,
//               },
//             }}
//           >
//             <Axis field="year" />
//             <Axis field="sales" />
//             <Interval x="year" y="sales" />
//             <Tooltip />
//           </Chart>
//         </Canvas>
//       );

//       const chart = new Canvas(props);
//       chart.render();
//     }
//   }, []);

//   return <canvas ref={ref} />;
// };

// export default F2Chart;
