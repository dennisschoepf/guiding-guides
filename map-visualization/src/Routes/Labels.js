import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 75vw;
`;

const Element = styled.div`
  position: absolute;
  top: ${props => props.y};
  left: ${props => props.x};
  background-color: white;
  font-size: 10px;
  font-weight: bold;
  padding: 5px;
  border-radius: 5px;
`;

export default function Labels({
  names
}) {
  return (
    <Container>
      <Element x={'10%'} y={'4.5%'}>{names[0]}</Element>
      <Element x={'62%'} y={'36.5%'}>{names[1]}</Element>
      <Element x={'87.5%'} y={'52%'}>{names[2]}</Element>
      <Element x={'15.8%'} y={'59%'}>{names[3]}</Element>
      <Element x={'33%'} y={'91%'}>{names[4]}</Element>
      <Element x={'73%'} y={'83%'}>{names[5]}</Element>
    </Container>
  )
}
