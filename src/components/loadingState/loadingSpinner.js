import React from 'react';
import loadingSpin from '../../img/loading_spinner.png';

const LoadingSpinner = () => (
  <div className="loading">
    <img src={loadingSpin} className="spinner" alt="Loading..." />
  </div>
);

export default LoadingSpinner;
