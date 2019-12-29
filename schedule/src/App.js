import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/database';
import { useObject, useObjectVal } from 'react-firebase-hooks/database';
import { createDisplayableSchedule } from './helpers';

const firebaseConfig = {
  apiKey: "AIzaSyBWBOepH5ohUyZmRtsDzGjg0KoroNpzC74",
  authDomain: "guiding-guides.firebaseapp.com",
  databaseURL: "https://guiding-guides.firebaseio.com",
  projectId: "guiding-guides",
  storageBucket: "guiding-guides.appspot.com",
  messagingSenderId: "524116407147",
  appId: "1:524116407147:web:d46fc63fef5096ae7c122e",
  measurementId: "G-ZYLW71RVE0"
};
firebase.initializeApp(firebaseConfig);

const Title = styled.h1`
  font-size: 32px;
  margin: 15px;
`;

const Container = styled.div`
  padding: 15px;
`;

const Slot = styled.div`
  width: 100%;
  background-color: ${props => props.grey ? '#eeeeee' : 'white'};
  padding: 15px;
`;

const SlotTitle = styled.h2`
  font-size: 22px;
  margin: 0;
`;

const SlotTime = styled.div`
  color: green;
`;

function App() {
  const stops = useObjectVal(firebase.database().ref('stops'))[0];
  const [value, loading, error] = useObject(firebase.database().ref('schedule'));

  return (
    <div>
      <Title>Your schedule:</Title>
      {displaySchedule(loading, error, value, stops)}
    </div>
  );
}

function displaySchedule(loading, error, value, stops) {
  if (loading) return <Container>Loading ...</Container>;
  if (error) return <Container>Error</Container>;
  if (value) {
    const displayableSchedule = createDisplayableSchedule(value.val(), stops);
    return (
      <div>
        {
          displayableSchedule.map((slot, i) => {
            if (slot.name && slot.startTime && slot.endTime) {
              return (
                <Slot grey={i % 2 === 0}>
                  <SlotTitle>{slot.name}</SlotTitle>
                  <SlotTime>{slot.startTime} - {slot.endTime}</SlotTime>
                </Slot>
              );
            }
            return;
          })
        }
      </div>
    );
  }
}

export default App;
