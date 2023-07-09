import { Box, ButtonGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import { PostType } from "../redux/features/Posts/types";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disLikeThePost, likeThePost } from "../redux/features/Posts/actions";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";

type PostItemTypes = {
  post: PostType;
};

const PostItem = ({ post }: PostItemTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  const handleReadMore = (id: number) => {
    navigate(`/posts/${id}`);
  };

  const handleLike = (postId: number) => {
    if (!like) {
      setLike(true);
      dispatch(likeThePost({ postId: postId, flag: like }));
    } else {
      setLike(false);
      dispatch(likeThePost({ postId: postId, flag: like }));
    }
  };
  const handleDisLike = (postId: number) => {
    if (!dislike) {
      setDisLike(true);
      dispatch(disLikeThePost({ postId: postId, flag: dislike }));
    } else {
      setDisLike(false);
      dispatch(disLikeThePost({ postId: postId, flag: dislike }));
    }
  };

  return (
    <Box
      mb={4}
      pb={1}
      sx={{ boxShadow: "rgba(33, 35, 38, 0.) 0px 10px 10px -10px" }}
    >
      {/* <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            backgroundColor: "primary",
            padding: ".25rem",
            color: "white",
          }}
        >
          {post.category}
        </Box>
        <Box>{post.date}</Box>
      </Box> */}
      <Box
        mb={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.dark",
            padding: ".25rem",
            color: "white",
            borderRadius: ".5rem",
            fontSize: ".75rem",
            paddingX: ".5rem",
            paddingY: ".25rem",
            fontWeight: "600",
          }}
        >
          {post.category}
        </Box>
        <Box sx={{ fontSize: ".75rem", fontWeight: 600 }} ml={2}>
          {post.date}
        </Box>
      </Box>
      <Box py={1}>
        <img src={post.image} height="200" loading="lazy" alt={post.title} />
      </Box>
      <Typography
        variant="h6"
        sx={{ color: "#333333", fontSize: "1rem", fontWeight: 600 }}
      >
        {post.title}
      </Typography>
      <Typography
        mb={1}
        color="primary"
        sx={{ fontSize: ".75rem", fontWeight: 600 }}
      >
        {post.author}
      </Typography>
      <Typography variant="body1">{post.description}</Typography>
      <Box my={1} sx={{ textAlign: "left" }}>
        <ButtonGroup
          size="small"
          variant="outlined"
          aria-label="outlined button group"
        >
          <Button
            onClick={() => handleLike(post.id)}
            startIcon={like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
          >
            {post.likes}
          </Button>

          <Button
            onClick={() => handleDisLike(post.id)}
            startIcon={dislike ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
          >
            {post.dislikes}
          </Button>

          <Button startIcon={<ModeCommentIcon />}>12</Button>

          <Button
            onClick={() => handleReadMore(post.id)}
            startIcon={<ReadMoreIcon />}
          >
            Read more
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default PostItem;
