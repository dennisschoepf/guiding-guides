import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';
import MarkerInput from './components/MarkerInput/MarkerInput';

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
    selectedStop: 0
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

function App() {
  const [markerState, setMarkerState] = useState(initialMarkerState);
  useEffect(() => {
    firebase.database().ref('schedule').set(markerState);
    return () => {};
  }, [markerState])

  const handleMarkerSet = (newMarkerNumber, stop) => {
    setMarkerState({
      ...markerState,
      [`marker-${newMarkerNumber}`]: {
        ...markerState[`marker-${newMarkerNumber}`],
        selectedStop: stop
      }
    });
  };

  return (
    <div className="container">
      { Object.keys(markerState).map((markerKey, i) => (
        <div className="element" key={i}>
          <MarkerInput
            markerNumber={markerState[markerKey].markerNumber}
            selectedStop={markerState[markerKey].selectedStop}
            onMarkerSet={handleMarkerSet}
          />
        </div>
      )) }
    </div>
  );
}

export default App;
