import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    console.log("Going back to home page");
    navigate("/");
  };

  return (
    <section className="error-page">
      <h2>Page Not found 404</h2>
      <br />
      {/* <Link to="/">Back to Home</Link> */}
      <button onClick={handleGoBack}>Back to Home</button>
    </section>
  );
};

export default PageNotFound;
