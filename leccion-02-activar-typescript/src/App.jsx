/* 👇 Componente: Funcionalidad principal para nuestra app.
 * Establece el estado de nuestras posts con un post predeterminado.
 *
 * ❗️ Hay que renombrar este archivo
 * 
 */

import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([]);

  async function submitPost(post) {
    setPosts([...posts, post]);
  }

  useEffect(() => {
    setPosts([{
      sender: {
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date,
    }]);
  }, []);

  return (
    <div className="App">
      <h1>Palabras Amables</h1>
      <main>
        <PostList posts={posts}/>
        <PostForm submitPost={submitPost}/>
      </main>
    </div>
  );
}

export default App;
