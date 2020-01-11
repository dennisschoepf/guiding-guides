import React, { useState } from 'react';
import styled from 'styled-components';
import { useObject } from 'react-firebase-hooks/database';
import firebase from 'firebase/app';
import 'firebase/database';
import map from './assets/map.svg';
import trump from './assets/sedonaldrveimage.jpeg'
import sightSlots from './assets/sightSlots.svg';
import Routes from './Routes/Routes';
import Hotspots from './Routes/Hotspots';
import Labels from './Routes/Labels';

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

const Container = styled.div`
  position: relative;x
`;

const Element = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex};
`;

const Layer = styled.img`
  width: 100vw;
  height: 75vw;
`;

function App() {
  const [hotspots, setHotspots] = useState([]);
  const [route, setRoute] = useState([]);
  const [scheduleVal, scheduleLoading, scheduleError] = useObject(firebase.database().ref('schedule'));
  const [hotspotVal, loading, error] = useObject(firebase.database().ref('stops'));

  if (scheduleVal) {
    const schedule = scheduleVal.val();
    const newRoute = Object.values(schedule).map((markerData, i) => {
      if ((i + 1) < Object.values(schedule).length) {
        const start = markerData.selectedStop;
        const end = schedule[`marker-${i+2}`].selectedStop;
        return `${start < end ? start : end}-${end > start ? end : start}`;
      } else { return null; };
    }).filter(el => el !== null);

    if (!newRoute.every((connection, i) => connection === route[i])) {
      setRoute(newRoute);
    }
  }

  if (hotspotVal) {
    const newHotspots = Object.values(hotspotVal.val()).map(stop => stop.hotspotColor);

    if (!newHotspots.every((hotspot, i) => hotspot === hotspots[i])) {
      setHotspots(newHotspots);
    }
  }

  return (
    <Container>
      {
        hotspotVal &&
        <Element zIndex={6}><Labels names={Object.values(hotspotVal.val()).map(stop => stop.name)} /></Element>
      }
      {
        !scheduleLoading && !scheduleError && scheduleVal &&
        <Element zIndex={5}><Routes route={route} /></Element>
      }
      <Element zIndex={4}><Hotspots hotspots={hotspots} /></Element>
      <Element zIndex={3}><Layer src={sightSlots} /></Element>
      <Element zIndex={2}><Layer src={map} /></Element>
    </Container>
  );
}

export default App;
