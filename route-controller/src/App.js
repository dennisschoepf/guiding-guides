import React from 'react';
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

const markers = [ 1, 2, 3, 4, 5, 6 ];

function App() {
  const writeSchedule = () => firebase.database().ref('schedule').set(true);

  return (
    <div className="container">
      { markers.map((marker, index) => (
        <div className="element">
          <MarkerInput index={index + 1} />
        </div>
      )) }
    </div>
  );
}

export default App;
