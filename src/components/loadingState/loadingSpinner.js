import React, { useContext } from 'react';
import SubContext from '../../Context/SubContext';
import loadingSpin from '../../img/loading_spinner.png';

const LoadingSpinner = () => {
  const { isLoading } = useContext(SubContext);
  console.log(isLoading);
  return (
    <div className="loading">
      <img src={loadingSpin} className="spinner" alt="Loading..." />
    </div>
  );
};

export default LoadingSpinner;
