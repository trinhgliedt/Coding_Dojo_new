import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import axios from 'axios';
import {Map} from './components/maps';
import SearchBox from "./components/SearchBox";


function App({ mapProps }) {
  const [AQIStations, setAQIStations] = useState([]);

  useEffect(() => {
    axios.get("https://api.waqi.info/map/bounds/?token=d2583b4394214a830ffdade2d10b103620d66ee7&latlng=24.846565,-65.960261,48.987427,-124.732715")
    .then(response => {
      // console.log(response.data.data);
      setAQIStations(response.data.data);
    })
    .catch((error) => console.log(error));
  }, [])
  console.log("AQIStations:",AQIStations);

  const addMarkers = links => map => {
    links.forEach((link, index) => {
      if (link.station.name.slice(link.station.name.length-6) !== "Mexico" && link.station.name.slice(link.station.name.length-6) !== "Canada"&& link.station.name.slice(link.station.name.length-8) !== "Saguenay") {
        var position = new window.google.maps.LatLng(link.lat, link.lon);
        const marker = new window.google.maps.Marker({
          map,
          position: position,
          // label: "test label",
          title: link.station.name,
          id: index + 1
        });
        const infowindow = new window.google.maps.InfoWindow({
          content: link.station.name
        });
        marker.addListener(`click`, () => {
          infowindow.open(map, marker);
        });
        
      }
    });
  };

  mapProps = {
    options: { center: {lat:37.550201, lng:-121.980827}, zoom: 10 },
    onMount: addMarkers(AQIStations)
  };

  //NOT WORKING PROPERLY
  const markerClickHandler = (id, marker) => {
    alert("clicked");
    window.google.maps.event.trigger(id, "click");
  };

  return (
    <div className='App'>
      {/* <LocationSearchInput setLoc={longLat => setCenteredPos(longLat)}/> */}
      <Map {...mapProps}/>
      {/* {AQIStations.map((marker, i) => {
          
          return (
            <li
              // ON CLICK TO TRIGGER MARKER
              onClick={() => markerClickHandler(i)}
              style={{
                margin: "1vmin",
                borderBottom: "1px solid gray",
                cursor: "pointer"
              }}
              key={marker.id}
            >
              {marker.name}
            </li> */}
          {/* );
        })} */}
    </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// import React, { useState, useEffect } from 'react';
// import GMap from './components/maps';
//     import axios from 'axios';


// // API key of the google map
// const GOOGLE_MAP_API_KEY = '<YOUR_GOOGLE_MAP_API_KEY>';

// // load google map script
// const loadGoogleMapScript = (callback) => {
//   if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
//     callback();
//   } else {
//     const googleMapScript = document.createElement("script");
//     googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}`;
//     window.document.body.appendChild(googleMapScript);
//     googleMapScript.addEventListener("load", callback);
//   }
// }

// const App = () => {
//   const [loadMap, setLoadMap] = useState(false);
//   const [markerList, setMarkerList] = useState();


//   useEffect(() => {
//     axios.get("https://api.waqi.info/map/bounds/?token=d2583b4394214a830ffdade2d10b103620d66ee7&latlng=24.846565,-65.960261,48.987427,-124.732715")
//             .then(response => {
//               console.log(response.data.data);
//               setMarkerList(response.data.data);
//             })
//             .catch((error) => console.log(error));

//     loadGoogleMapScript(() => {
//       setLoadMap(true)
//     });
//   }, []);

//   return (
//     <div className="App">
//       {!loadMap ? <div>Loading...</div> : <GMap markerList={markerList}/>}
//       <br/><br/>
//     </div>
//   );
// }

// export default App;