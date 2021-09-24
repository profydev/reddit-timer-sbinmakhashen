import React from 'react';

const Info = () => (
  <div className="info">
    <article id="how-it-works">
      <h1 className="title title-section">How it works</h1>
      <div className="subtitle">
        <ul>
          <li>We find the 500 top posts from the past year for a subreddit.</li>
          <li>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </li>
          <li>See immediately when to submit your reddit post.</li>
        </ul>
      </div>
    </article>
    <article id="about">
      <h1 className="title title-section">About</h1>
      <div className="subtitle">
        <p>
          This app was created during a course on
          <a href="https://profy.dev" target="_blank" rel="noreferrer">
            <span> profy.dev </span>
          </a>
          with the goal to implement a pixel-perfect real-world application with
          professional workflows and tools like Kanban, Asana, Zeplin, GitHub,
          pull requests and code reviews.
          <a
            href="https://profy.dev/employers"
            target="_blank"
            rel="noreferrer"
          >
            <span> Click here for more information.</span>
          </a>
        </p>
      </div>
    </article>
  </div>
);

export default Info;
