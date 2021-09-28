import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import SubContext from '../../Context/SubContext';

const SubForm = () => {
  const { subreddit, setSubReddit } = useContext(SubContext);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${subreddit}`);
  }

  // const headerLink = document.querySelector('.search-link');
  // headerLink
  return (
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
  );
};
export default SubForm;
