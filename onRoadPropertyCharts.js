import React,{PureComponent} from "react";
import accidents from "./dataforChart/data";
import {PieChart,Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const OnRoad = ()=>{
console.log("road");

let onRoadMap = {};

accidents.map((acc)=>{
  
    if(onRoadMap[acc.onRoadProperty] === undefined){
        onRoadMap[acc.onRoadProperty] = 100;
    }else{
        onRoadMap[acc.onRoadProperty]+=100;
    }

});

const roadProperty = [];
  for(const key in onRoadMap){
    roadProperty.push({ name : [key],
    value:onRoadMap[key]
  });
};

    return(
      <div>
        {/* <BarChart
          width={700}
          height={300}
          data={roadProperty}
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
        </BarChart> */}

        <PieChart width={400} height={400}>
      <Pie
        data={roadProperty}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
    </PieChart> 
  </div> 
    )
 } ;
 export default OnRoad;