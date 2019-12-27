import React from 'react';
import cx from 'classnames';
import './MarkerInput.css';

const stops = [ 0, 1, 2, 3, 4, 5, 6 ];

function MarkerInput ({
  markerNumber,
  selectedStop,
  onMarkerSet,
}) {
  return (
    <div className="markerInput">
      <h2>Marker <strong>{ markerNumber }</strong></h2>
      <div>
        {
          stops.map(stop => (
            <button
              className={cx({ markerInputButton: true, checked: selectedStop === stop })}
              key={stop}
              onClick={() => onMarkerSet(markerNumber, stop)}
              style={{ width: `${100 / stops.length}%` }}
            >
              { stop !== 0 ? `Stop ${stop}` : 'Not placed' }
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default MarkerInput;