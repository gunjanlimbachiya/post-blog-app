import { Box, Button, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest } from "../redux/features/Posts/actions";
import PostItem from "./PostItem";
import { PostType } from "../redux/features/Posts/types";
import { rootReducer } from "../redux/store";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PostsFilter from "./PostsFilter";

interface PostsState {
  posts: PostType[];
  error: string; // Specify the type of error if applicable
  isLoading: boolean;
  post: PostType;
}

export type FilterType = {
  search: string;
  category: string;
  author: string;
};

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(
    (state: ReturnType<typeof rootReducer>) => state.posts as PostsState
  );

  const [show, setShow] = useState<boolean>(false);
  const [filter, setFilter] = useState<FilterType>({
    search: "",
    category: "",
    author: "",
  });

  const [filteredData, setFilteredData] = useState<PostType[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(posts);
  const noOfRecordsPerPage = 5;
  const noOfPages = filteredData
    ? filteredData?.length / noOfRecordsPerPage
    : posts?.length / noOfRecordsPerPage;

  const endPage = currentPage * noOfRecordsPerPage;

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  const handleFilter = () => {
    const filteredData = posts?.filter((post) => {
      const { search, category, author } = filter;
      return (
        (!search || post.title.toLowerCase().includes(search.toLowerCase())) &&
        (!category || post.category.toLowerCase() === category.toLowerCase()) &&
        (!author || post.author.toLowerCase() === author.toLowerCase())
      );
    });
    setFilteredData(filteredData);
  };

  const clearFilter = () => {
    setFilter({ search: "", category: "", author: "" });
    setFilteredData(null);
    // setShow(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  const postsData = filteredData
    ? filteredData?.slice(endPage - noOfRecordsPerPage, endPage)
    : posts?.slice(endPage - noOfRecordsPerPage, endPage);

  return (
    <>
      <Box my={3} sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography color="primary" variant="h5">
          Posts
        </Typography>
        <Button
          onClick={() => setShow(!show)}
          size="small"
          sx={{ padding: ".5rem", height: "40px", lineHeight: "1.25rem" }}
          variant={show ? "contained" : "outlined"}
          endIcon={<FilterAltIcon />}
        >
          Filter
        </Button>
      </Box>
      <PostsFilter
        show={show}
        setFilter={setFilter}
        filter={filter}
        handleFilter={handleFilter}
        clearFilter={clearFilter}
      />
      <Box>
        {postsData?.length > 0 ? (
          postsData.map((post: PostType) => {
            return <PostItem key={post.id} post={post} />;
          })
        ) : (
          <Box sx={{ textAlign: "center", marginTop: "1rem" }}>
            No posts found matching your search criteria
          </Box>
        )}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}
      >
        {noOfPages > 1 && (
          <Pagination
            count={noOfPages}
            onChange={handlePageChange}
            color="primary"
          />
        )}
      </Box>
    </>
  );
};

export default PostsList;
