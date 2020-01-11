import React from 'react';
import cx from 'classnames';
import './HotspotInput.css';

export default function HotspotInput({
  objectKey,
  name,
  selectedColor,
  onHotspotSet,
}) {
  return (
    <div className="hotspotInputContainer">
      {name}
      <button
        onClick={() => onHotspotSet(objectKey, 'red')}
        className={cx({ hotspotInputButton: true, checked: selectedColor === 'red' })}
      >Red</button>
      <button
        onClick={() => onHotspotSet(objectKey, 'orange')}
        className={cx({ hotspotInputButton: true, checked: selectedColor === 'orange' })}
      >Orange</button>
      <button
        onClick={() => onHotspotSet(objectKey, 'green')}
        className={cx({ hotspotInputButton: true, checked: selectedColor === 'green' })}
      >Green</button>
    </div>
  )
}
