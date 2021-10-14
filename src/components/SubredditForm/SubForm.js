import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubContext from '../../Context/SubContext';
import LoadingSpinner from '../loadingState/loadingSpinner';

const SubForm = () => {
  const {
    subreddit, setSubReddit, fetchRedditPosts, setIsLoading, isLoading,
  } = useContext(SubContext);

  const history = useHistory();
  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    if (subreddit !== 'javascript') {
      history.push(`/search/${subreddit}`);
    }
    fetchRedditPosts();
  }

  const { sub } = useParams();
  useEffect(() => {
    setSubReddit(sub);
  }, [sub, setSubReddit]);

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <div className="form-header">
          <h1 className="title">Find the best time for a subreddit</h1>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="subtitle" htmlFor="sub-input">
            r /
          </label>
          <input
            type="text"
            value={subreddit}
            onChange={(event) => setSubReddit(event.target.value)}
            id="sub-input"
          />
          <button type="submit" className="btn form-btn">
            SEARCH
          </button>
        </div>
      </form>
      {isLoading && <LoadingSpinner />}
    </>
  );
};
export default SubForm;
