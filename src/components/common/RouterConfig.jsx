import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Learn from "../navigation-pages/Learn";
// import Blog from "../navigation-pages/Blog";
// import Reference from "../navigation-pages/Reference";
// import Community from "../navigation-pages/Community";
import PageNotFound from "./PageNotFound";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

const MainContent = lazy(() => import("../main-content/MainContent"));
const Learn = lazy(() => import("../navigation-pages/Learn"));
const Blog = lazy(() => import("../navigation-pages/Blog"));
const Reference = lazy(() => import("../navigation-pages/Reference"));
const Community = lazy(() => import("../navigation-pages/Community"));
const Profile = lazy(() => import("../common/user-info/Profile"));
const Dashboard = lazy(() => import("../common/user-info/Dashboard"));
const Account = lazy(() => import("../common/user-info/Account"));
const Logout = lazy(() => import("../common/user-info/Logout"));

const RouterConfig = ({ userData, searchText }) => {
  return (
    <Suspense fallback={<h2>Page is loading...</h2>}>
      <Routes>
        <Route
          path="/"
          element={<MainContent userData={userData} searchText={searchText} />}
        />
        <Route path="/learn" element={<Learn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reference" element={<Reference />} />
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/account" element={<Account />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
