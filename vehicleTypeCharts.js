import React,{PureComponent} from "react";
import accidents from "./dataforChart/data";
import {PieChart,Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const VehicleTypeCharts = ()=>{
    console.log("type");
    
    let vehicleMap = {};

    accidents.map((acc)=>{
      if(vehicleMap[acc.vehicleType] === undefined){
        vehicleMap[acc.vehicleType] = 100;
      }else{
        vehicleMap[acc.vehicleType]+=100;
      }
    
    });
    
    
    const vehicleData = [];
      for(const key in vehicleMap){
          vehicleData.push({ name : [key],
        value:vehicleMap[key]
      });
    };

    return(
        <div>
          <BarChart
            width={400}
            height={300}
            data={vehicleData}
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
   export default VehicleTypeCharts;