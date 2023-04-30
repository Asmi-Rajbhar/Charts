import React,{PureComponent} from "react";
import Causes from "./dataforChart/aiData";
import {PieChart,Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CauseChart = ()=>{
console.log("cause");
//causes map

let accidentCause = {};

Causes.map((c)=>{
    if(c[c.output] === undefined){
      accidentCause[c.output] = 100;
    }else{
      accidentCause[c.output]+=100;
    }

});
   
const causeData = [];
    for(const key in accidentCause){
      causeData.push({ name : [key],
    value:accidentCause[key]
  });
};
    return(
      <div>
        <BarChart
          width={500}
          height={300}
          data={causeData}
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
 export default CauseChart;