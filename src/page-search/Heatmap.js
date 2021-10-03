import React, { useContext } from 'react';
import SubContext from '../Context/SubContext';
import LoadingSpinner from './loadingSpinner';

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

  return <>{posts.length}</>;
};

export default Heatmap;
