import React, { useState, useEffect } from 'react';
import './App.css';
import { useObject } from 'react-firebase-hooks/database';
import firebase from 'firebase/app';
import 'firebase/database';
import MarkerInput from './components/MarkerInput/MarkerInput';
import HotspotInput from './components/HotspotInput/HotspotInput';

const firebaseConfig = {
  apiKey: "AIzaSyBWBOepH5ohUyZmRtsDzGjg0KoroNpzC74",
  authDomain: "guiding-guides.firebaseapp.com",
  databaseURL: "https://guiding-guides.firebaseio.com",
  projectId: "guiding-guides",
  storageBucket: "guiding-guides.appspot.com",
  messagingSenderId: "524116407147",
  appId: "1:524116407147:web:f03d7adb926174d37c122e",
  measurementId: "G-720YRQJW6J"
};

firebase.initializeApp(firebaseConfig);

const initialMarkerState = {
  'marker-1': {
    markerNumber: 1,
    selectedStop: 0,
  },
  'marker-2': {
    markerNumber: 2,
    selectedStop: 0
  },
  'marker-3': {
    markerNumber: 3,
    selectedStop: 0
  },
  'marker-4': {
    markerNumber: 4,
    selectedStop: 0
  },
};

const initialHotspotState = {
  'stop-1': {
    name: 'Schloss Mirabell',
    hotspotColor: '',
  },
  'stop-2': {
    name: 'Kapuzinerkloster',
    hotspotColor: '',
  },
  'stop-3': {
    name: 'Schloss Arenberg',
    hotspotColor: '',
  },
  'stop-4': {
    name: "Mozart's Geburthaus",
    hotspotColor: '',
  },
  'stop-5': {
    name: 'Stift St. Peter',
    hotspotColor: '',
  },
  'stop-6': {
    name: 'Stift Nonnberg',
    hotspotColor: '',
  },
};

function App() {
  const [markerState, setMarkerState] = useState(initialMarkerState);
  const [hotspotState, setHotspotState] = useState(initialHotspotState);
  const [value, loading, error] = useObject(firebase.database().ref('stops'));

  useEffect(() => {
    firebase.database().ref('schedule').set(markerState);
    return () => {};
  }, [markerState]);

  useEffect(() => {
    firebase.database().ref('stops').set(hotspotState);
    return () => {};
  }, [hotspotState]);

  const handleMarkerSet = (newMarkerNumber, stop) => {
    setMarkerState({
      ...markerState,
      [`marker-${newMarkerNumber}`]: {
        ...markerState[`marker-${newMarkerNumber}`],
        selectedStop: stop
      }
    });
  };

  const handleHotspotSet = (stopKey, newColor) => {
    setHotspotState({
      ...hotspotState,
      [stopKey]: {
        ...hotspotState[stopKey],
        hotspotColor: newColor
      }
    });
  };

  const resetSchedule = () => {
    setMarkerState(initialMarkerState);
  };

  const resetStops = () => {
    setHotspotState(initialHotspotState);
  };

  return (
    <div className="container">
      <button className="reset" onClick={resetSchedule}>Reset Route</button>
      { Object.keys(markerState).map((markerKey, i) => (
        <div className="element" key={i}>
          <MarkerInput
            markerNumber={markerState[markerKey].markerNumber}
            selectedStop={markerState[markerKey].selectedStop}
            onMarkerSet={handleMarkerSet}
          />
        </div>
      )) }
      <button className="reset" onClick={resetStops}>Reset Hotspots</button>
      { !loading && !error &&
        Object.keys(hotspotState).map((spotKey, i) => (
          <React.Fragment key={i}>
            <HotspotInput
              objectKey={spotKey}
              name={hotspotState[spotKey].name}
              selectedColor={hotspotState[spotKey].hotspotColor}
              onHotspotSet={handleHotspotSet}
            />
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default App;
