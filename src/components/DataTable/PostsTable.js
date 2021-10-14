/* eslint-disable indent */
import React, { useContext } from 'react';
import SubContext from '../../Context/SubContext';

// eslint-disable-next-line react/prop-types
const PostsTable = () => {
  const { arrOfPosts } = useContext(SubContext);

  function sortPosts(posts) {
    return [...posts].sort(
      (a, b) => a.createdAt.getMinutes() - b.createdAt.getMinutes(),
    );
  }

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
          {sortPosts(arrOfPosts).map((post, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <tr key={i}>
              <td>
                <a
                  href={post.postLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="posts-link"
                >
                  {post.title}
                </a>
              </td>
              <td>
                {post.createdAt.toLocaleTimeString([], { timeStyle: 'short' })}
              </td>
              <td>{post.score}</td>
              <td>{post.commentsNum}</td>
              <td>
                <a
                  href={
                    post.author !== '[deleted]'
                      ? `https://reddit.com/u/${post.author}`
                      : null
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="posts-link"
                  style={
                    post.author === '[deleted]'
                      ? {
                          color: '#000',
                          cursor: 'not-allowed',
                          textDecoration: 'none',
                        }
                      : null
                  }
                >
                  {post.author === '[deleted]' ? '[deleted]' : post.author}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PostsTable;
