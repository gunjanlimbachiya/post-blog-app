import {
  DISLIKETHEPOST,
  FETCHPOSTDETAILSERROR,
  FETCHPOSTDETAILSSLOADING,
  FETCHPOSTDETAILSSSUCCESS,
  FETCHPOSTSERROR,
  FETCHPOSTSLOADING,
  FETCHPOSTSSUCCESS,
  LIKETHEPOST,
} from "./actions";
import { PostsType, PostType } from "./types";

type InitialStateType = {
  isLoading: boolean;
  posts: PostsType | null;
  error: string;
  post: PostType | null;
};

const initialState: InitialStateType = {
  isLoading: false,
  posts: null,
  error: "",
  post: null,
};

type PostLikeDisLikePayloadType = {
  postId: number;
  flag: boolean;
};

export type ActionType =
  | { type: typeof FETCHPOSTSLOADING }
  | { type: typeof FETCHPOSTSSUCCESS; payload: PostsType }
  | { type: typeof FETCHPOSTSERROR; payload: string }
  | { type: typeof FETCHPOSTDETAILSSLOADING }
  | { type: typeof FETCHPOSTDETAILSSSUCCESS; payload: PostType }
  | { type: typeof FETCHPOSTDETAILSERROR; payload: string }
  | { type: typeof LIKETHEPOST; payload: PostLikeDisLikePayloadType }
  | { type: typeof DISLIKETHEPOST; payload: PostLikeDisLikePayloadType };

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case FETCHPOSTSLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCHPOSTSSUCCESS: {
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    }

    case FETCHPOSTSERROR: {
      return {
        isLoading: false,
        posts: null,
        error: action.payload,
      };
    }

    case FETCHPOSTDETAILSSLOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCHPOSTDETAILSSSUCCESS: {
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    }

    case FETCHPOSTDETAILSERROR: {
      return {
        ...state,
        post: null,
        isLoading: false,
        error: action.payload,
      };
    }

    case LIKETHEPOST: {
      const likedPost = state.posts?.find(
        (post) => post.id === action.payload.postId
      );
      const updatedPost = {
        ...likedPost,
        likes: action.payload.flag
          ? likedPost!.likes - 1
          : likedPost!.likes + 1,
      };
      return {
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === action.payload.postId) {
            return updatedPost;
          } else {
            return post;
          }
        }),
      };
    }
    case DISLIKETHEPOST: {
      const disLikedPost = state.posts?.find(
        (post) => post.id === action.payload.postId
      );
      const updatedPost = {
        ...disLikedPost,
        dislikes: action.payload.flag
          ? disLikedPost!.dislikes - 1
          : disLikedPost!.dislikes + 1,
      };
      return {
        ...state,
        posts: state.posts?.map((post) => {
          if (post.id === action.payload.postId) {
            return updatedPost;
          } else {
            return post;
          }
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
