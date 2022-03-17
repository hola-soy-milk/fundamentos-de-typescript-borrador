import React from 'react';

function PostList(props) {

  let rows = props.posts.map((post, index) => {
    return <div className="card" key={index}>
      <p className="small">{ post.sender.name } <span className="muted">@{post.sender.handle}</span></p>
      <p className="">{ post.body }</p>
      <p className="small right">{new Date(post.timestamp).toLocaleString('en-GB')}</p>
    </div>;
  });

  return <div id="post-list">{rows}</div>;
}

export default PostList;
