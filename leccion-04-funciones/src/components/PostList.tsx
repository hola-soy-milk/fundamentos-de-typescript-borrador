import React from 'react';
import Post from '../types/Post';
import {formatPostTimestamp} from '../utils/formatters'

function PostList({ posts }) {

  let rows = posts.map((post, index) => {
    return <div className="card" key={index}>
      <p className="small">{ post.name } <span className="muted">@{post.handle}</span></p>
      <p className="">{ post.body }</p>
      <p className="small right">{formatPostTimestamp(post)}</p>
    </div>;
  });

  return <div id="post-list">{rows}</div>;
}

export default PostList;
