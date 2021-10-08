import React, { useContext } from 'react';
import SubContext from '../../Context/SubContext';
// import PropType from 'prop-types';

// eslint-disable-next-line react/prop-types
const PostsTable = () => {
  const { arrOfPosts } = useContext(SubContext);
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <table className="posts-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Time Posted</th>
            <th>Score</th>
            <th>Comments</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {arrOfPosts.map((post, i) => (
            // console.log(post)
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              <td>
                <a
                  href={post.postLink}
                  target="_blank"
                  rel="noreferrer"
                  className="posts-title"
                >
                  {post.title}
                </a>
              </td>
              <td>
                {post.createdAt.toLocaleTimeString([], { timeStyle: 'short' })}
              </td>
              <td>{post.score}</td>
              <td>{post.commentsNum}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// PostsTable.PropType = {
//   // arrPosts: PropType.arrayof,
// };
export default PostsTable;
