/* 👇 Componente lista de Posts en nuestra app de palabras amables.
 *    Tiene como props el arreglo de posts desde `App.js`.
 */

import React from 'react';
import Post from '../types/Post';
import {formatPostTimestamp} from '../utils/formatters'

interface Props {
  posts: Post[]
}

function PostList(props: Props) {
  let {posts} = props;

  let rows = posts.map((post, index) => {
    return <div className="card" key={index}>
      <p className="small">{ post.sender.name } <span className="muted">@{post.sender.handle}</span></p>
      <p className="">{ post.body }</p>
      <p className="small right">{formatPostTimestamp(post)}</p>
    </div>;
  });

  return <div id="post-list">{rows}</div>;
}

export default PostList;
