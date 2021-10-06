/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SubContext from './SubContext';

const SubContextProvider = ({ children }) => {
  const [subreddit, setSubReddit] = useState('javascript');
  const [isLoading, setIsLoading] = useState(false);
  const [postsPerDay, setPostsPerDay] = useState([]);
  const [errorStatus, setErrorStatus] = useState(null);

  const NumPostsToFetch = 500;
  const MaxNumOfPostsPerPage = 100;
  const controller = new AbortController();

  // recursive solution to get 500 posts when by default posts limit is 100 posts
  async function fetchSubredditPosts(prevPosts = [], after = null) {
    let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=${MaxNumOfPostsPerPage}`;
    if (after) {
      url += `&after=${after}`;
    }
    const res = await fetch(url, { signal: controller.signal });
    const { data } = await res.json();
    // add posts to the prevPosts array after every 100 posts
    const allPosts = prevPosts.concat(data.children);

    // when reached 500 posts stop and return those posts
    const noMorePosts = data && data.dist < MaxNumOfPostsPerPage;
    const limitReachedPosts = allPosts.length >= NumPostsToFetch;
    if (noMorePosts || limitReachedPosts) {
      return allPosts;
    }

    return fetchSubredditPosts(allPosts, data.after);
  }

  function PostsPerDayAndHour(Posts) {
    const PostsPerDay = Array(7)
      .fill()
      .map(() =>
        Array(24)
          .fill()
          .map(() => 0),
      );

    Posts.forEach((post) => {
      const createdAt = new Date(post.data.created_utc * 1000);
      const dayOfTheWeek = createdAt.getDay();
      const hour = createdAt.getHours();

      PostsPerDay[dayOfTheWeek][hour] += 1;
    });
    return PostsPerDay;
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
      .then((posts) => PostsPerDayAndHour(posts))
      .then((newPostsPerDay) => {
        setPostsPerDay(newPostsPerDay);
        // stop loading spinner
        setIsLoading(false);
        setErrorStatus(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Request aborted!!');
        } else {
          setErrorStatus('errorFound');
        }
      });
    // abort when component unmounts
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subreddit]);

  const value = {
    subreddit,
    setSubReddit,
    isLoading,
    setIsLoading,
    fetchSubredditPosts,
    postsPerDay,
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
