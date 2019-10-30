import React from 'react';
import './SeasonDisplay.css';
import Clock from './Clock';

const seasonConfig = {
  summer: { text: "Let's hit the beach", iconClassName: 'sun' },
  winter: { text: 'Burr, it is Chilly', iconClassName: 'snowflake' }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ latitude }) => {
  const season = getSeason(latitude, new Date().getMonth());

  const { text, iconClassName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconClassName} icon `}></i>
      <h1>{text}</h1>
      <Clock />
      <i className={`icon-right massive ${iconClassName} icon `}></i>
    </div>
  );
};

export default SeasonDisplay;
