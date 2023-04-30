import { Dropdown } from 'rsuite';
import React, { PureComponent, useState } from 'react';
import {PieChart,Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import { useNavigate } from 'react-router-dom';
const Charts = () => {
  const nav = useNavigate();


   //location hashmap 
//    let obj = {};
  
//    accidents.map((acc)=>{
      
//       if(obj[acc.location] === undefined){
//         obj[acc.location] = 1;
//       }else{
//         obj[acc.location]++;
//       }
   
//    });

//   const locdata = [];
//     for(const key in obj){
//     locdata.push({ name : [key],
//     value:obj[key]
//   });
// };


// console.log(causeData);
// // Vehicle Type Map

// let vehicleMap = {};

// accidents.map((acc)=>{
//   if(vehicleMap[acc.vehicleType] === undefined){
//     vehicleMap[acc.vehicleType] = 100;
//   }else{
//     vehicleMap[acc.vehicleType]+=100;
//   }

// });


// const vehicleData = [];
//   for(const key in vehicleMap){
//       vehicleData.push({ name : [key],
//     value:vehicleMap[key]
//   });
// };


//On-road Property

// let onRoadMap = {};

// accidents.map((acc)=>{
    
//     if(onRoadMap[acc.onRoadProperty] === undefined){
//         onRoadMap[acc.onRoadProperty] = 100;
//     }else{
//         onRoadMap[acc.onRoadProperty]+=100;
//     }

// });

// const onRoadProperty = [];
//   for(const key in onRoadProperty){
//     onRoadProperty.push({ name : [key],
//     value:onRoadProperty[key]
//   });
// };

const [loc, setLoc] = useState(false)
const [vtype, setVtype] = useState(false)
const [road, setRoad] = useState(false)
const [cause, setCause] = useState(false)



// change event
// const handleChange = (event)=>{
//   console.log(event);
//   // setChart(event.target.value);
//   var x = document.getElementById("x-axis").value;
//   console.log(x)
// };


//click event 
const handleClick=(event)=>{
  console.log(event);
  // setDisplay(true);
  console.log(vtype)
  console.log(loc)
  console.log(road)

};

// const ty = () => {
// console.log("type");
// }
// const loc1 = () => {
// console.log("location");
// }
// const rdprop = () => {
// console.log("property")
// }

  return (
    <div className="App">
    <h1>Charts</h1>
    <label for="x-axis">X axis</label>


  <select id="x-axis"  name="xAxis">
    {/* <option onClick={() => {setVtype(true), setLoc(false), setRoad(false)}} value="vehicleType">Vehicle Type</option>
    <option onClick={() => {setLoc(true), setVtype(false), setRoad(false)}} value="location">Location</option>
    <option onClick={() => {setRoad(true), setLoc(false), setVtype(false)}} value="onRoadPropery">onRoadProperty</option> */}
  </select>
  {/* <button onClick={handleClick}>Make the Chart</button> */}
    
{/* {display?<bChart data={locdata}/>:<bChart/>}


  

  <PieChart width={400} height={400}>
      <Pie
        data={onRoadProperty}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
    </PieChart> */}

    <button onClick={() => nav('/vtype')}>vehicle</button>
    <button onClick={() => nav('/location')}>location</button>
    <button onClick={() => nav('/road')}>onroad</button>


  </div>
    );
  }
export default Charts