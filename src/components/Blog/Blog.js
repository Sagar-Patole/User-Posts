import React from 'react';
import './Blog.css';

const Blog = props => {
  return (
    <article className="Blog" onClick={props.clicked}>
      <h4 className="Title">{props.title}</h4>
      <div className="Body">{props.body}</div>
      <div className="Author">{props.author}</div>
    </article>
  );
};

export default Blog;
