import React, { useRef } from 'react';
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

  const heatmapBtn = useRef();

  function highlightBox() {
    // if (s) {
    //   s.style.background = 'rgba(0,0,0,0.5)';
    // }
    console.log(heatmapBtn.current);
  }

  function colorsOfNumPosts(numPosts) {
    switch (numPosts) {
      case 0:
        return { background: '#e0e592' };
      case 1:
        return { background: ' #aed396' };
      case 2:
        return { background: ' #a9d194' };
      case 3:
        return { background: ' #a0ce93' };
      case 4:
        return { background: ' #99cd94' };
      case 5:
        return { background: ' #8cc894' };
      case 6:
        return { background: ' #5eb391' };
      case 7:
        return { background: ' #5db492' };
      case 8:
        return { background: ' #5cb391' };
      case 9:
        return { background: ' #5aad8c' };
      default:
        return { background: '#3984a3' };
    }
  }

  return (
    <div className="heatmap-row">
      <div className="daysOfWeek-container">
        <p className="day">{daysOfTheWeek[day]}</p>
      </div>
      <div className="heatmap-elements">
        {postsPerHour.map((numPosts, hr) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={hr}
            numPosts={numPosts}
            onClick={highlightBox}
            type="button"
            className="heatmap-btn"
            style={colorsOfNumPosts(numPosts)}
            ref={heatmapBtn}
          >
            {numPosts}
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
