import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "pages/home";
import PostsListPage from "pages/Posts";
import PostDetail from "pages/Posts/detail";
import PostNew from "pages/Posts/new";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import NotificationsPage from "pages/notifications";
import LoginPage from "pages/users/login";
import SignupPage from "pages/users/signup";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/posts"} element={<PostsListPage />} />
      <Route path={"/posts/:id"} element={<PostDetail />} />
      <Route path={"/posts/new"} element={<PostNew />} />
      <Route path={"/posts/edit/:id"} element={<ProfileEdit />} />
      <Route path={"/profile"} element={<ProfilePage />} />
      <Route path={"/profile/edit"} element={<ProfileEdit />} />
      <Route path={"/notifications"} element={<NotificationsPage />} />
      <Route path={"/search"} element={<SearchPage />} />
      <Route path={"/users/login"} element={<LoginPage />} />
      <Route path={"/users/Signup"} element={<SignupPage />} />
      <Route path={"*"} element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
