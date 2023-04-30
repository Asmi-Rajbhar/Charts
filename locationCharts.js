import { Dropdown } from 'rsuite';
import React,{PureComponent} from "react";
import accidents from "./dataforChart/data";
import {PieChart,Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LocationCharts = ()=>{
console.log("locstion");

// location hashmap 
   let obj = {};
  
   accidents.map((acc)=>{
      
      if(obj[acc.location] === undefined){
        obj[acc.location] = 1;
      }else{
        obj[acc.location]++;
      }
   
   });

  const locdata = [];
    for(const key in obj){
    locdata.push({ name : [key],
    value:obj[key]
  });
};

    return(
      <div className="App">
        
        <BarChart
          width={800}
          height={300}
          data={locdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barSize={20}
         >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis/>
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
  </div> 
    )
 } ;
 export default LocationCharts;