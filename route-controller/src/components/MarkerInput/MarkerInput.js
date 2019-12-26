import React, { useState } from 'react';
import cx from 'classnames';
import './MarkerInput.css';

const options = [ 0, 1, 2, 3, 4, 5, 6 ];

function MarkerInput ({
  index
}) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="markerInput">
      <h2>Marker <strong>{ index }</strong></h2>
      <div>
        {
          options.map(option => (
            <button
              className={cx({ markerInputButton: true, checked: selected === option })}
              key={option}
              onClick={() => setSelected(option)}
              style={{ width: `${100 / options.length}%` }}
            >
              { option !== 0 ? `Stop ${option}` : 'Not placed' }
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default MarkerInput;