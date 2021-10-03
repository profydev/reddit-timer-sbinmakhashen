/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubContext from './SubContext';

const SubContextProvider = ({ children }) => {
  const [subreddit, setSubReddit] = useState('javascript');
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [errorStatus, setErrorStatus] = useState(null);

  async function fetchSubredditPosts(prevPosts = [], after = null) {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

    if (after) {
      url += `&after=${after}`;
    }

    const res = await fetch(url);
    const { data } = await res.json();
    const allPosts = prevPosts.concat(data.children);

    const noMorePosts = data && data.dist < 100;
    const limitReachedPosts = allPosts.length >= 500;
    if (noMorePosts || limitReachedPosts) {
      return allPosts;
    }

    return fetchSubredditPosts(allPosts, data.after);
  }

  useEffect(() => {
    // update the input value and url when the Header 'search' link is clicked
    document.querySelector('.search-link').addEventListener('click', () => {
      setSubReddit('javascript');
    });

    setIsLoading(true);

    fetchSubredditPosts()
      .then((newPosts) => {
        setPosts(newPosts);
        setIsLoading(false);
        setErrorStatus(null);
      })
      .catch(() => setErrorStatus('errorFound'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subreddit]);

  const value = {
    subreddit,
    setSubReddit,
    isLoading,
    setIsLoading,
    fetchSubredditPosts,
    posts,
    errorStatus,
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
