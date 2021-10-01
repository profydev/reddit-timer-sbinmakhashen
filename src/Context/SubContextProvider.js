import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubContext from './SubContext';

const SubContextProvider = ({ children }) => {
  const [subreddit, setSubReddit] = useState('javascript');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // update the input value and url when the Header 'search' link is clicked
    document.querySelector('.search-link').addEventListener('click', () => {
      setSubReddit('javascript');
    });
  }, [subreddit]);

  function fetchRedditPosts() {
    const url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=500`;
    fetch(url)
      .then((res) => res.json())
      .then((redditData) => {
        setIsLoading(false);
        // eslint-disable-next-line no-unused-vars
        const { data } = redditData;
        console.log(data.children);
      })
      .catch((err) => console.log(err));
  }

  const value = {
    subreddit,
    setSubReddit,
    isLoading,
    setIsLoading,
    fetchRedditPosts,
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
