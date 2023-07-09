import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPostDetailsRequest } from "../redux/features/Posts/actions";
import { PostType } from "../redux/features/Posts/types";
import { rootReducer } from "../redux/store";

interface PostsState {
  posts: PostType[];
  error: string; // Specify the type of error if applicable
  isLoading: boolean;
  post: PostType;
}

const PostDetails = () => {
  const params = useParams();
  const postId: number = parseInt(params.postId!);
  const dispatch = useDispatch();

  const { post } = useSelector(
    (state: ReturnType<typeof rootReducer>) => state.posts as PostsState
  );

  useEffect(() => {
    dispatch(fetchPostDetailsRequest(postId));
  }, [postId]);

  return (
    <Box my={3}>
      <Box py={2}>
        <img
          src={post?.image}
          height="400"
          width="100%"
          loading="lazy"
          alt={post?.title}
        />
      </Box>
      <Typography
        sx={{ textTransform: "uppercase", fontWeight: "bold", color: "gray" }}
        variant="body2"
      >
        {post?.category}
      </Typography>
      <Typography color="primary" py={1} variant="h4">
        {post?.title}
      </Typography>

      <Box py={1} sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="Remy Sharp"
          src="/assets/avatar.png"
          sx={{ width: 40, height: 40, marginRight: ".5rem" }}
        />{" "}
        <Typography variant="body1">{post?.author}</Typography>
        <Typography sx={{ marginLeft: "auto" }} variant="body1">
          {post?.date}
        </Typography>
      </Box>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste earum ipsa
        quam accusamus nobis accusantium repellat neque tenetur ipsum vel
        voluptatem aut numquam saepe consectetur aliquam, id, recusandae sint!
        Quae nam, rem nulla repudiandae quasi pariatur? Nisi enim explicabo sint
        laborum eius cum, architecto, dolorem pariatur in dolor molestiae quasi
        doloribus. Perspiciatis officia quasi aspernatur tempore dolorum.
        Impedit quidem possimus voluptatum voluptas ipsum reiciendis. Pariatur
        animi, nostrum, saepe deserunt voluptatem voluptatum quam tempora
        mollitia esse qui id voluptas possimus vitae quod voluptatibus officia
        quaerat consequatur.
        <br />
        <br /> Ratione aspernatur voluptatum nihil laudantium quas veniam
        numquam rem, tempore alias eveniet recusandae libero dolores iure minus
        eos accusantium tempora autem praesentium quos molestias esse nulla
        pariatur minima exercitationem. Adipisci molestiae nostrum quam dolores
        voluptates eaque excepturi, hic distinctio numquam perspiciatis ea
        doloribus. Debitis ipsum soluta ullam delectus, sit eligendi maxime
        asperiores quod eum tempore rem. Quam, vitae. Quas modi sunt molestiae
        fugiat, temporibus eveniet neque quasi esse itaque perspiciatis magnam
        aliquam libero facere distinctio quia dolores earum expedita recusandae
        pariatur nam totam quidem, nemo ipsam! Totam vel excepturi atque odio?
        Dolorum, explicabo. Ducimus esse expedita quidem soluta velit ipsum
        reiciendis incidunt alias non obcaecati suscipit placeat rem voluptates,
        tempora natus iure cupiditate, ad similique!
      </p>
    </Box>
  );
};

export default PostDetails;
