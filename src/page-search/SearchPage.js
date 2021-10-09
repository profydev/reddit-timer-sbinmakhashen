import React, { useContext } from 'react';
import SubForm from './SubForm';
import Heatmap from './Heatmap';
import PostsTable from '../components/DataTable/PostsTable';
import SubContext from '../Context/SubContext';

function SearchPage() {
  const { isClicked, isLoading, arrOfPosts } = useContext(SubContext);
  return (
    <div id="search-page">
      <SubForm />
      <Heatmap />
      {isClicked && !isLoading && arrOfPosts.length !== 0 && <PostsTable />}
      <div style={{ marginTop: '8rem' }}>
        {arrOfPosts.length === 0 && (
          <p className="danger">There are no posts in this particular hour</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
