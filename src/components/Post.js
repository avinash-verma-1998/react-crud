import React from "react";
const Post = ({ title, body }) => {
  return (
    <div className="card post-card">
      <header className="card-header">
        <p className="card-header-title">{title}</p>
      </header>
      <div className="card-content">
        <div className="content">{body}</div>
      </div>
    </div>
  );
};
export default Post;
