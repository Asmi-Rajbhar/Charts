const causes = [
    {
       input: "Accident occured because driver was drunk and lost control over vehicle",
       output: "Drunk Driving"
   },
    {
       input: "Drunk and driving person screwed another non drinker",
       output: "Drunk Driving"
   },
   {
       input: "Accident occured because driver was drunk and lost control over vehicle",
       output: "Drunk Driving"
   },
   {
       input: "Accident occured because driver was drunk and lost control over vehicle",
       output: "Drunk Driving"
   },
   
   {
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },{
       input: "Accident due to high speed of vehicle",
       output: "Over-Speeding"
   },
   
    {
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },{
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },{
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },{
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },{
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },{
       input: "Accidents due to collision with on-road object such as guardrails, traffic barriers, and signs",
       output: "Poor Road Condition"
   },
   
    {
       input: "Accident due to parking of vehicles on wrong side of road",
       output: "Wrong lane parking"
   }
   ,
    {
       input: "Accident due to poor driving, driver is not elibigle for driving license",
       output: "Underage Driving"
   },
   
    {
       input: "Accident occured because driver was unable to see the signal",
       output: "Poor weather condition"
   },
   
    {
       input: "Drvier was using cell phone while driving",
       output: "Cell Phone"
   },
   {
       input: "Drvier was using cell phone while driving",
       output: "Cell Phone"
   },{
       input: "Drvier was using cell phone while driving",
       output: "Cell Phone"
   },{
       input: "Drvier was using cell phone while driving",
       output: "Cell Phone"
   },
   ];
   
   let obj = {};
   
   
   causes.map((cause)=>{
       if(obj[cause.output] === undefined){
           obj[cause.output] = 100;
       }else{
           obj[cause.output]+=100;
       }
   
   });
   
   export default causes;