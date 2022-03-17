import Post from "../types/Post";

export function formatPostTimestamp(post: Post): string {
  return new Date(post.timestamp).toLocaleString("es");
}
