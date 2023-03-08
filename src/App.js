/* eslint-disable react-hooks/exhaustive-deps */

import { useState , useEffect} from "react";
export default function App() {
const [location, setLocation] = useState({});
useEffect(() => {

navigator.geolocation.watchPosition(handlePositionReceived);

}, []);
function handlePositionReceived({ coords }) {
  setLocation({
    latitude: coords.latitude,
    longitude: coords.longitude,
  })
  
}
  return (
    <> 
      <h1>Latitude:{location.latitude} </h1>
   <h1>Longitude: {location.longitude} </h1>
    
    </>
  );
}


