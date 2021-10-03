import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import SubContext from '../Context/SubContext';

const SubForm = () => {
  const { subreddit, setSubReddit, setIsLoading, setErrorStatus } =
    useContext(SubContext);
  const history = useHistory();
  const { sub: initSubreddit } = useParams();

  function handleSubmit(event) {
    setIsLoading(true);
    setErrorStatus(null);
    event.preventDefault();
    history.push(`/search/${subreddit}`);
  }

  useEffect(() => {
    setSubReddit(initSubreddit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initSubreddit]);

  return (
    <>
      <form id="form" onSubmit={handleSubmit} onLoad={handleSubmit}>
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
    </>
  );
};
export default SubForm;
