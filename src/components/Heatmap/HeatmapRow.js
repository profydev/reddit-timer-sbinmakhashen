import React from 'react';
import PropTypes, { number } from 'prop-types';

function HeatmapRow({ day, postsPerHour }) {
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function handleClick(e) {
    if (e) {
      e.classList.add('active');
      if (!e) {
        e.style.display = 'none';
      }
    }
  }
  // postsPerHour.map((d) => console.log())

  function colorsOfNumPosts(numposts) {
    switch (numposts) {
      case 0:
        return '#e0e592';

      case 1:
        return ' #aed396';
      case 2:
        return ' #a9d194';
      case 3:
        return ' #a0ce93';
      case 4:
        return ' #99cd94';
      case 5:
        return ' #8cc894';
      case 6:
        return ' #5eb391';
      case 7:
        return ' #5db492';
      case 8:
        return ' #5cb391';
      case 9:
        return ' #5aad8c';
      default:
        return '#3984a3';
    }
  }

  return (
    <div className="heatmap-row">
      <div className="daysOfWeek-container">
        <p className="day">{daysOfTheWeek[day]}</p>
      </div>
      <div className="heatmap-elements">
        {postsPerHour.map((numposts, hr) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={hr}
            numposts={numposts}
            onClick={(e) => handleClick(e.target)}
            type="button"
            className="heatmap-btn"
            style={{ background: colorsOfNumPosts(numposts) }}
          >
            {numposts}
          </button>
        ))}
      </div>
    </div>
  );
}

HeatmapRow.propTypes = {
  day: PropTypes.number.isRequired,
  postsPerHour: PropTypes.arrayOf(number).isRequired,
};

export default HeatmapRow;
