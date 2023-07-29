import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(
          `https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-json/wp/v2/posts?_embed&page=${currentPage}`
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchAllPosts();
  }, [currentPage]);

  const indexOfLastEvent = currentPage * postsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstEvent, indexOfLastEvent);

  // Helper function to handle pagination navigation
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {currentPosts.map((post) => (
            <a
              key={post.id}
              className="col-lg-4 mb-4"
              href={post.link}
              target="_blank"
            >
              <div
                className="card d-flex flex-column"
                style={{
                  width: "20rem",
                  height: "400px",
                  borderRadius: "4px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {post._embedded &&
                post._embedded["wp:featuredmedia"] &&
                post._embedded["wp:featuredmedia"][0] &&
                post._embedded["wp:featuredmedia"][0].source_url ? (
                  <>
                    <img
                      className="card-img-top"
                      style={{ objectFit: "cover", height: "200px" }}
                      src={post._embedded["wp:featuredmedia"][0].source_url}
                      alt={post.title.rendered}
                    />
                  </>
                ) : (
                  <img
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      //   position: "relative",
                    }}
                    src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
                    alt={post.title.rendered}
                  />
                )}
                <div className="card-body">
                  <h3 style={{ fontSize: "18px", paddingRight: "20px" }}>
                    {post.title.rendered.substring(0, 32)}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="container" style={{ marginTop: "45px" }}>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({
                length: Math.ceil(posts.length / postsPerPage),
              }).map((_, index) => (
                <li
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                  key={index + 1}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === Math.ceil(posts.length / postsPerPage)
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
