/* 👇 Componente: Formulario para crear un Post.
 * Tiene como props la función para crear un Post.
 *
 * ❗️ Hay que renombrar este archivo
 * 
 */

import React from "react";

function PostForm(props) {
  function postPost(e) {
    e.preventDefault();
    let formData = new FormData(document.querySelector("#post-form"));
    let post = {
        sender: {
          name: formData.get("sender"),
          handle: formData.get("handle"),
        },
        body: formData.get("body"),
        timestamp: new Date().getTime()
    };
    props.submitPost(post);
  }

  return (
    <form id="post-form" onSubmit={postPost}>
      <div className="rows">
      <label>
        <span>Nombre</span>
        <input type="text" name="sender" id="sender" />
      </label>
      <label>
        <span>Usuario</span>
        <input type="text" name="handle" id="handle" />
      </label>
      <label>
        <span>Palabras</span>
      <input type="text" name="body" id="body" />
      </label>
      </div>
      <input type="submit" value="Enviar"/>
    </form>
  );
}

export default PostForm;
