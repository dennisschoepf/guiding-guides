import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/database';

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

function App() {
  const writeSchedule = () => firebase.database().ref('schedule').set(true);

  return (
    <div>
      Test
      <button onClick={writeSchedule}>Click</button>
    </div>
  );
}

export default App;
