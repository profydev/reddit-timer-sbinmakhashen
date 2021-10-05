import React, { useContext } from 'react';
import SubContext from '../Context/SubContext';
import LoadingSpinner from './loadingSpinner';
import HeatmapHeader from '../components/Heatmap/HeatmapHeader';
import HeatmapRow from '../components/Heatmap/HeatmapRow';

const Heatmap = () => {
  const { isLoading, errorStatus, postsPerDay } = useContext(SubContext);

  if (errorStatus === 'errorFound') {
    return (
      <p className="danger">
        Somthing went wrong. Please check the subreddit you entered and try
        again
      </p>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="heatmap">
      <div className="heatmap-header-container">
        <HeatmapHeader />
      </div>
      <div className="heatmap-rows">
        {postsPerDay.map((postsPerHour, day) => (
          // eslint-disable-next-line react/no-array-index-key
          <HeatmapRow key={day} day={day} postsPerHour={postsPerHour} />
        ))}
      </div>
      <p className="time">
        All times are shown in your timezone:
        <span className="time-zone">
          {' '}
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </span>
      </p>
    </div>
  );
};

export default Heatmap;
