// 👇 Funciones de formatear tipos
import Post from "../types/Post";
export let formatPostTimestamp = (post: Post) => {
  return new Date(post.timestamp).toLocaleString("es");
};
