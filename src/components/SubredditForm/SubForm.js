import React, { useContext } from 'react';
import SubContext from '../../Context/SubContext';

const SubForm = () => {
  const { subreddit, setSubreddit } = useContext(SubContext);
  return (
    <form id="form">
      <div className="form-header">
        <h1 className="title">Find the best time for a subreddit</h1>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="subtitle" htmlFor="sub-input">
          r /
        </label>
        <input
          type="text"
          value={subreddit}
          onChange={(event) => setSubreddit(event.target.value)}
          id="sub-input"
        />
        <button type="submit" className="btn form-btn">
          SEARCH
        </button>
      </div>
    </form>
  );
};
export default SubForm;
