import React, { useEffect, useState } from "react";
import {GetAlleventdata} from "../../api/api"
import EventCard from "../../components/EventCard";   

function AllEvent() {
  const [events, setEvents] = useState();
  const token=window.localStorage.getItem("token")

  useEffect(() => {
    // Make an API request to fetch the events and update the stat
    fetchData();
  }, []);


  const fetchData =async()=>{
       const x= await GetAlleventdata({token,stage:"Pending"});
       console.log(x.data.data);
       setEvents(x.data.data)
      
    }

  return (
    <div className="flex flex-wrap gap-4">
      {events.map((event) => (
      
        <EventCard
        loction={}
        date timerr
        

        description = {event.description}
         title = {event.eventName} />
      ))}
    </div>
  );
}

export default AllEvent