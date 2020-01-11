import React from 'react';
import styled from 'styled-components';

const SVGContainer = styled.svg`
  width: 100vw;
  height: 75vw;
`;

function Hotspots({ hotspots }) {
  return (
    <SVGContainer width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200">
      <rect id="stop1" x="380" y="20" width="140" height="90" transform="rotate(64,400,100)" fill={hotspots[0]} />
      <rect id="stop2" x="1015" y="300" width="140" height="120" transform="rotate(-2,1015,300)" fill={hotspots[1]} />
      <rect id="stop3" x="1385" y="432" width="110" height="115" transform="rotate(25,1385,432)" fill={hotspots[2]} />
      <rect id="stop4" x="270" y="590" width="110" height="110" transform="rotate(45,270,590)" fill={hotspots[3]} />
      <rect id="stop5" x="545" y="963" width="140" height="90" transform="rotate(8,560,980)" fill={hotspots[4]} />
      <rect id="stop6" x="1010" y="960" width="150" height="115" transform="rotate(-33,1010,960)" fill={hotspots[5]} />
    </SVGContainer>
  );
}

export default Hotspots;