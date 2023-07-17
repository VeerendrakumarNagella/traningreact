import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Learn from "../navigation-pages/Learn";
// import Blog from "../navigation-pages/Blog";
// import Reference from "../navigation-pages/Reference";
// import Community from "../navigation-pages/Community";
import PageNotFound from "./PageNotFound";

const MainContent = lazy(() => import("../main-content/MainContent"));
const Learn = lazy(() => import("../navigation-pages/Learn"));
const Blog = lazy(() => import("../navigation-pages/Blog"));
const Reference = lazy(() => import("../navigation-pages/Reference"));
const Community = lazy(() => import("../navigation-pages/Community"));

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
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
