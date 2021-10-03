import React from 'react';
import SubForm from './SubredditForm/SubForm';
import Heatmap from './Heatmap';

function SearchPage() {
  return (
    <div id="search-page">
      <SubForm />
      <Heatmap />
    </div>
  );
}

export default SearchPage;
