import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubContext from './SubContext';

const SubContextProvider = ({ children }) => {
  const [subreddit, setSubReddit] = useState('javascript');

  useEffect(() => {
    // update the input value and url when the Header 'search' link is clicked
    document.querySelector('.search-link').addEventListener('click', () => {
      setSubReddit('javascript');
    });
  }, [subreddit]);
  const value = {
    subreddit,
    setSubReddit,
  };
  return (
    <>
      <SubContext.Provider value={value}>{children}</SubContext.Provider>
    </>
  );
};

SubContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default SubContextProvider;
