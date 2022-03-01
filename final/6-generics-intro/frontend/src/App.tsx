import React, {useState, useEffect} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Post from './models/Post';
import { getRequest, postRequest } from './utils/api';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    setPosts(await getRequest<Post>("posts"));
  }

  async function submitPost(post: Post) {
    await postRequest<Post>(post, "posts");
    fetchPosts();
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    setPosts([{
      id: 1,
      sender: {
        id: 1,
        name: "Ramón",
        handle: "hola_soy_milk",
      },
      body: "Eres genial!",
      timestamp: new Date(),
    }]);
  }, []);

  return (
    <div className="App">
      <h1>Palabras Amables</h1>
      <main>
        <PostList posts={posts}/>
        <PostForm newPostId={posts.length + 1} submitPost={submitPost}/>
      </main>
    </div>
  );
}

export default App;
