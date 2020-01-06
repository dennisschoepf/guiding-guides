import React from 'react';
import styled from 'styled-components';
import { createDisplayableSchedule } from '../helpers';

const Container = styled.div`
  padding: 15px;
`;

const Slot = styled.div`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
`;

const SlotContainer = styled.div`
  margin: 30px 10px;
`;

const SlotTitle = styled.h2`
  font-size: 20px;
  margin: 0;
  color: #454F63;
`;

const SlotLabel = styled.p`
  color: #aaa;
  margin: 0 0 5px 0;
  font-size: 12px;
`;

const SlotTime = styled.div`
  color: #454F63;
  margin: 0 0 5px 10px;
`;

function Schedule({ loading, error, value, stops }) {
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
                <SlotContainer key={slot.name}>
                  <SlotTime>{slot.startTime}:00 - {slot.endTime}:00</SlotTime>
                  <Slot>
                    <SlotLabel>Appointment Nr. {i + 1}</SlotLabel>
                    <SlotTitle>{slot.name}</SlotTitle>
                  </Slot>
                </SlotContainer>
              );
            }
            return;
          })
        }
      </div>
    );
  }
}

export default Schedule;