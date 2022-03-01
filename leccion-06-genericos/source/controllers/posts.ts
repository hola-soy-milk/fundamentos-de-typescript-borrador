/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";

interface Sender {
  name: string;
  handle: string;
}

interface Post {
  sender: Sender;
  body: string;
  timestamp: number;
}

let postsCollection: [Post] = [
  {
    sender: {
      name: "Ramón",
      handle: "hola_soy_milk",
    },
    body: "¡Estas aprendiendo super bien!",
    timestamp: new Date().getTime(),
  },
];

// getting all posts
const getPosts = (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  let posts: [Post] = postsCollection;
  return res.status(200).json(posts);
};

// adding a post
const addPost = async (req: Request, res: Response, next: NextFunction) => {
  // get the data from req.body
  let name: string = req.body.sender.name;
  let handle: string = req.body.sender.handle;
  let body: string = req.body.body;
  let timestamp: number = req.body.timestamp;
  let newPost: Post = {
    sender: {
      name: name,
      handle: handle,
    },
    body: body,
    timestamp: timestamp,
  };
  postsCollection.push(newPost);
  // return response
  return res.status(200).json({
    message: "Thanks for posting",
  });
};

export default { getPosts, addPost };
