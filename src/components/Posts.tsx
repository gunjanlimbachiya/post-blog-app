import { Route, Routes } from "react-router-dom";
import WithAuth from "./hoc/WithAuth";
import PostDetails from "./PostDetails";
import PostsList from "./PostsList";

const Posts = () => {
  return (
    <>
      <Routes>
        <Route index element={<PostsList />}></Route>
        <Route path=":postId" element={<PostDetails />} />
      </Routes>
    </>
  );
};

const ProtectedPosts = WithAuth(Posts);

export default ProtectedPosts;
