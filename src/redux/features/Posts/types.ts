export type PostType = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  userId: number;
  category: string;
  image: "string";
  likes: number;
  dislikes: number;
};

export type PostsType = PostType[];

export type PostDetailsActionType = {
  type: "string";
  payload: number;
};
