import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/database';
import map from './assets/map.svg';

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
  position: relative;
`;

const Element = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Map = styled.img`
  width: 100vw;
  height: 75vw;
`;

function App() {
  return (
    <Container>
      <Element><Map src={map} /></Element>
    </Container>
  );
}

export default App;
