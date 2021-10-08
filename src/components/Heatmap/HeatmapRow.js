import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SubContext from '../../Context/SubContext';

function HeatmapRow({ day, postsPerHour }) {
  const [activeClass, setActiveClass] = useState(true);
  // const [arrOfPosts, setArrOfPosts] = useState(null);
  const { setIsClicked, setArrOfPosts } = useContext(SubContext);

  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  function handleClick(e, posts) {
    setIsClicked(true);
    setArrOfPosts(posts);
    if (activeClass) {
      e.target.classList.add('active');
      setActiveClass(false);
    }

    console.log(posts);
  }
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
    <>
      <div className="heatmap-row">
        <div className="daysOfWeek-container">
          <p className="day">{daysOfTheWeek[day]}</p>
        </div>
        <div className="heatmap-elements">
          {postsPerHour.map((numposts, hr) => (
            // {setArrOfPosts(numposts)}
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={hr}
              numposts={numposts.length}
              onClick={(e) => handleClick(e, numposts)}
              type="button"
              className="heatmap-btn"
              style={{
                background: colorsOfNumPosts(numposts.length),
              }}
              value={numposts.length}
            >
              {numposts.length}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

HeatmapRow.propTypes = {
  day: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  postsPerHour: PropTypes.array.isRequired,
};

export default HeatmapRow;
