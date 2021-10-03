import React, { useContext } from 'react';
import SubContext from '../Context/SubContext';
import LoadingSpinner from './loadingSpinner';
import HeatmapHeader from '../components/Heatmap/HeatmapHeader';

const Heatmap = () => {
  const { isLoading, posts, errorStatus } = useContext(SubContext);
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
      <HeatmapHeader />
    </div>
  );
};

export default Heatmap;
