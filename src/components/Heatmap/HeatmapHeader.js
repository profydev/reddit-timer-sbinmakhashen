import React from 'react';

const HeatmapHeader = () => {
  const hoursOfPosts = [
    '12:00am',
    '2:00am',
    '4:00am',
    '6:00am',
    '8:00am',
    '10:00am',
    '12:00pm',
    '2:00pm',
    '4:00pm',
    '6:00pm',
    '8:00pm',
    '10:00pm',
  ];

  return (
    <div className="heatmap-header">
      {hoursOfPosts.map((hr, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i}>
          <p className="hr-of-posts">{hr}</p>
        </div>
      ))}
    </div>
  );
};

export default HeatmapHeader;
