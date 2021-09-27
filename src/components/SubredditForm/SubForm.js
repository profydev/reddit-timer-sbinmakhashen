import React, { useContext } from 'react';
import SubContext from '../../Context/SubContext';

const SubForm = () => {
  const { subreddit, setSubreddit } = useContext(SubContext);
  return (
    <form id="form">
      <div className="form-header">
        <h1 className="title">Find the best time for a subreddit</h1>
        <label htmlFor="sub-reddit">
          r/
        </label>
        <input type="text" value={subreddit} onChange={(event) => setSubreddit(event.target.value)} id="sub-reddit" />
      </div>
    </form>
  );
};
export default SubForm;
