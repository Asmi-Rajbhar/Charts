// Bike over speeding and was driving on the wrong lane, the accident caused when the biker took the turn and it crashed into four wheeler.
const accidents = [
    {
      accidentTitle: "Over Speeding",
      vehicleType: "2 Wheeler",
      noOfCasualities: 1,
      noOfInguries: 2,
      detailCause: "Bike over speeding and was driving on the wrong lane, the accident caused when the biker took the turn and it crashed into four wheeler.",   
      location:"Kurla",
      onRoadProperty: "",
  },
  {
      accidentTitle: "Drunk Driving",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 2,
      noOfInguries: 1,
      detailCause: "Truck driver was drunken driving and jump of the red light then it lead to the crash with four wheeler",   
      location:"Kalyan",
      onRoadProperty: "",
  }
  ,
  {
      accidentTitle: "",
      vehicleType: "4 Wheeler",
      noOfCasualities: 1,
      noOfInguries: 1,
      detailCause: "Accident due to potholes",   
      location:"Kurla",
      onRoadProperty: "Potholes",
  }
  ,
  {
      accidentTitle: "Collision with traffic-barriers",
      vehicleType: "2 Wheeler",
      noOfCasualities: 0,
      noOfInguries: 2,
      detailCause: "Accidents due to on-road property, collision with traffic barriers near the roadway",   
      location:"Thane",
      onRoadProperty: "traffic-barriers",
  },
   {
      accidentTitle: "Accidents due to high speed",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 0,
      noOfInguries: 4,
      detailCause: "A loaded lorry, with eigth members was rushing at a high speed from south to north. Somehow the driver lost the control over the brake. The lorry turned on the wrong side and dashed against the road fencing and smashed it",   
      location:"Mulund",
      onRoadProperty: "",
  }
  ,
  {
      accidentTitle: "Head on Collision",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 2,
      noOfInguries: 2,
      detailCause: "Speeing lorry hit a private car which was coming from the oppsite direction",   
      location:"Chinchpokli",
      onRoadProperty: "",
  }
  ,
  {
      accidentTitle: "",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 7,
      noOfInguries: 15,
      detailCause: "A bus collide with a truck parked mistakenly on the side of the road. The speeding bus was trying to overtake another bus from the wrong side and owing to poor visibility the driver failed to see the park truck",   
      location:"Dadar",
      onRoadProperty: "",
  },
  
  {
      accidentTitle: "Collision with signs",
      vehicleType: "4 Wheeler",
      noOfCasualities: 2,
      noOfInguries: 2,
      detailCause: "Accidents due to on-road property, collision with signs near the roadway",   
      location:"Sion",
      onRoadProperty: "signs",
  },
  
   {
      accidentTitle: "Speeding Truck",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 0,
      noOfInguries: 1,
      detailCause: "A scooter was hit by a speeding truck",   
      location:"Dadar",
      onRoadProperty:"",
  },
  {
      accidentTitle: "Collision with poles",
      vehicleType: "4 Wheeler",
      noOfCasualities: 2,
      noOfInguries: 2,
      detailCause: "",   
      location:"Thane",
      onRoadProperty: "Poles",
  },
   {
      accidentTitle: "High Speed",
      vehicleType: "4 plus Wheeler",
      noOfCasualities: 0,
      noOfInguries: 1,
      detailCause: "A scooter was hit by a speeding truck",   
      location:"Kurla",
      onRoadProperty:"",
  }
  ,
   {
      accidentTitle: "Collision with signs",
      vehicleType: "2 Wheeler",
      noOfCasualities: 2,
      noOfInguries: 2,
      detailCause: "Accidents due to on-road property, collision with signs near the roadway",   
      location:"Thane",
      onRoadProperty: "signs",
  },
  {
      accidentTitle: "Collision with signs",
      vehicleType: "2 Wheeler",
      noOfCasualities: 2,
      noOfInguries: 2,
      detailCause: "Accidents due to on-road property, collision with signs near the roadway",   
      location:"Andheri",
      onRoadProperty: "signs",
  }
  ,
  {
      accidentTitle: "Underage Driving",
      vehicleType: "2 Wheeler",
      noOfCasualities: 0,
      noOfInguries: 1,
      detailCause: "Accidents caused due to driver does not have a driving license",   
      location:"Sion",
      onRoadProperty: "signs",
  }
  ];
  //location hashmap 
  let obj = {};
  
  accidents.map((acc)=>{
      console.log(acc.location);
      if(obj[acc.location] === undefined){
          obj[acc.location] = 1;
      }else{
          obj[acc.location]++;
      }
  
  });
  
  export default accidents;