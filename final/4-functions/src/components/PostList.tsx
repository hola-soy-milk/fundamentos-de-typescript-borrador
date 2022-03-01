import React from 'react';
import Post from '../models/Post';
import {formatPostTimestamp} from '../utils/formatters'

interface Props {
  posts: Post[]
}

function PostList(props: Props) {
  let {posts} = props;

  let rows = posts.map((post: Post, index: number) => {
    return <div className="card" key={index}>
      <p className="small">{ post.name } <span className="muted">@{post.handle}</span></p>
      <p className="">{ post.body }</p>
      <p className="small right">{formatPostTimestamp(post)}</p>
    </div>;
  });

  return <div id="post-list">{rows}</div>;
}

export default PostList;
