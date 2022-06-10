/* 👇 Componente lista de Posts en nuestra app de palabras amables.
 *    Tiene como props el arreglo de posts desde `App.js`.
 */

import React from 'react';
import Post from '../types/Post';

// ❗️ Nuestra tarea viene aquí: implementar `formatPostTimestamp`
import {formatPostTimestamp} from '../utils/formatters'

/* ❗️ Extraigamos un interfaz local para los `Props` que tengan como propediad un arreglo de `Post`s. */
function PostList({ posts }) {

  // ❗️ Agreguemos tipos para `post` e `index`
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
