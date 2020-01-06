import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase/app';
import 'firebase/database';
import { useObject, useObjectVal } from 'react-firebase-hooks/database';
import Schedule from './components/Schedule';

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

const TitleContainer = styled.div`
  background-color: #454F63;
  margin: 10px;
  padding: 45px 15px 15px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
`;

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  margin: 0;
`;

const AppointmentNumber = styled.span`
  color: #CDD9F0;
`;

function App() {
  const stops = useObjectVal(firebase.database().ref('stops'))[0];
  const [value, loading, error] = useObject(firebase.database().ref('schedule'));
  let numberOfAppointments = null;

  if (value) {
    const markerPositions = value.val();
    numberOfAppointments = Object.keys(markerPositions).reduce((acc, curr) => markerPositions[curr].selectedStop !== 0 ? acc + 1 : acc, 0);
  }

  return (
    <div>
      <TitleContainer>
        <Title>Beijing Travel Group</Title>
        {
          numberOfAppointments &&
          <AppointmentNumber>{numberOfAppointments} appointments - 15 participants</AppointmentNumber>
        }
      </TitleContainer>
      <Schedule
        loading={loading}
        error={error}
        value={value}
        stops={stops}
      />
    </div>
  );
}

export default App;
