import axios from "axios";
import Post from "../types/Post";

export async function getPosts() {
  const res = await axios.get("http://localhost:6060/posts");
  if (res.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
export async function postPost(post: Post) {
  await axios.post("http://localhost:6060/posts", post);
}
