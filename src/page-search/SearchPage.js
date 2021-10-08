import React, { useContext } from 'react';
import SubForm from './SubForm';
import Heatmap from './Heatmap';
import PostsTable from '../components/DataTable/PostsTable';
import SubContext from '../Context/SubContext';

function SearchPage() {
  const { isClicked } = useContext(SubContext);

  return (
    <div id="search-page">
      <SubForm />
      <Heatmap />
      {isClicked && <PostsTable />}
    </div>
  );
}

export default SearchPage;
