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

  // recursive solution to get 500 posts when by default posts limit is 100 posts
  async function fetchSubredditPosts(prevPosts = [], after = null) {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;
    if (after) {
      url += `&after=${after}`;
    }
    const res = await fetch(url);
    const { data } = await res.json();
    // add posts to the prevPosts array after every 100 posts
    const allPosts = prevPosts.concat(data.children);

    // when reached 500 posts stop and return those posts
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

    // start with a loading spinner
    setIsLoading(true);
    // fetch api posts and trigger the function everytime subreddit state variable changes
    fetchSubredditPosts()
      .then((newPosts) => {
        setPosts(newPosts);
        // stop loading spinner
        setIsLoading(false);
        setErrorStatus(null);
        console.log(posts);
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
    setErrorStatus,
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
