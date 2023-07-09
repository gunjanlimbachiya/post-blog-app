import { PostsType, PostType } from "./types";

export const FETCHPOSTSREQUEST = "FETCHPOSTSREQUEST";
export const FETCHPOSTSLOADING = "FETCHPOSTSLOADING";
export const FETCHPOSTSSUCCESS = "FETCHPOSTSSUCCESS";
export const FETCHPOSTSERROR = "FETCHPOSTSERROR";
export const FETCHPOSTDETAILSSREQUEST = "FETCHPOSTDETAILSSREQUEST";
export const FETCHPOSTDETAILSSLOADING = "FETCHPOSTDETAILSSLOADING";
export const FETCHPOSTDETAILSSSUCCESS = "FETCHPOSTDETAILSSSUCCESS";
export const FETCHPOSTDETAILSERROR = "FETCHPOSTDETAILSSERROR";
export const LIKETHEPOST = "LIKETHEPOST";
export const DISLIKETHEPOST = "DISLIKETHEPOST";

type PostLikeDisLikePayloadType = {
  postId: number;
  flag: boolean;
};

export const fetchPostsRequest = () => {
  return {
    type: FETCHPOSTSREQUEST,
  };
};

export const fetchPostsLoading = () => {
  return {
    type: FETCHPOSTSLOADING,
  };
};

export const fetchPostsSuccess = (posts: PostsType) => {
  return {
    type: FETCHPOSTSSUCCESS,
    payload: posts,
  };
};

export const fetchPostsError = (error: string) => {
  return {
    type: FETCHPOSTSERROR,
    payload: error,
  };
};

export const fetchPostDetailsRequest = (postId: number) => {
  return {
    type: FETCHPOSTDETAILSSREQUEST,
    payload: postId,
  };
};

export const fetchPostDetailsLoading = () => {
  return {
    type: FETCHPOSTDETAILSSLOADING,
  };
};

export const fetchPostDetailsSuccess = (post: PostType) => {
  return {
    type: FETCHPOSTDETAILSSSUCCESS,
    payload: post,
  };
};

export const fetchPostDetailsError = (error: string) => {
  return {
    type: FETCHPOSTDETAILSERROR,
    payload: error,
  };
};

export const likeThePost = (likeObj: PostLikeDisLikePayloadType) => {
  return {
    type: LIKETHEPOST,
    payload: {
      postId: likeObj.postId,
      flag: likeObj.flag,
    },
  };
};

export const disLikeThePost = (dislikeObj: PostLikeDisLikePayloadType) => {
  return {
    type: DISLIKETHEPOST,
    payload: {
      postId: dislikeObj.postId,
      flag: dislikeObj.flag,
    },
  };
};
