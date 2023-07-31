import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { format } from "date-fns";

const API_URL = `https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-json/wp/v2/posts?_embed&per_page=100`;
const Author_URL = `https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-json/wp/v2/users`;

const fetchAllPosts = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching posts:", error);
    return [];
  }
};

const fetchAllAuthors = async () => {
  try {
    const response = await fetch(Author_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching authors:", error);
    return [];
  }
};

const PaginationButton = ({ label, onClick, disabled }) => (
  <li className={`page-item ${disabled ? "disabled" : ""}`}>
    <button className="page-link" onClick={onClick}>
      {label}
    </button>
  </li>
);

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postAuthors, setPostAuthors] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false); // New state variable
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true); // Set loading state to true before fetching posts
      const data = await fetchAllPosts();
      setPosts(data);
      setTotalPosts(data.length);
      setLoadingPosts(false); // Set loading state to false after posts are fetched
    };
    fetchPosts();

    const fetchAuthors = async () => {
      const authors = await fetchAllAuthors();
      setPostAuthors(authors);
    };
    fetchAuthors();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to get the author username based on the author ID
  const getAuthorUsername = (authorId) => {
    const author = postAuthors.find((author) => author.id === authorId);
    return author ? author.name : "PWWL";
  };

  return (
    <>
      <div
        style={{
          margin: "0 auto",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="row"
          style={{
            margin: "0 auto",

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Only show the loading indicator if the posts are still loading */}
          {loadingPosts ? (
            <div className="col-lg-12 d-flex justify-center">
              <img
                src="https://i.gifer.com/origin/ba/ba4eeed06a8f9efb0d7b5ad26f1f8d45_w200.gif"
                alt=""
                width="400"
              />
            </div>
          ) : // Show the post list if the posts have finished loading
          currentPosts.length > 0 ? (
            currentPosts.map((post) => {
              const formattedDate = format(
                new Date(post.date),
                "MMMM dd, yyyy"
              );
              const hasFeaturedMedia =
                post._embedded &&
                post._embedded["wp:featuredmedia"] &&
                post._embedded["wp:featuredmedia"][0] &&
                post._embedded["wp:featuredmedia"][0].source_url;

              return (
                <div
                  className="card d-flex flex-column"
                  style={{
                    width: "18rem",
                    height: "460px",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "200px",
                    }}
                    src={
                      hasFeaturedMedia
                        ? post._embedded["wp:featuredmedia"][0].source_url
                        : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
                    }
                    alt={post.title.rendered}
                  />
                  <div className="card-body">
                    <p
                      style={{
                        fontSize: "16px",
                        paddingRight: "20px",
                        color: "#222",
                      }}
                    >
                      {formattedDate} <br />
                      {post.title.rendered}
                    </p>
                    <p
                      style={{ fontSize: "12px", color: "#222" }}
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered.substring(0, 80),
                      }}
                    />
                    <p style={{ fontSize: "12px" }}>
                      Author: {getAuthorUsername(post.author)} <br />
                      <a href={`/posts/${post.id}`}>Read the article...</a>
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-lg-12 d-flex justify-content-center">
              <h2>No posts found.</h2>
            </div>
          )}
        </div>
      </div>
      {/* Show pagination only if the posts have finished loading */}
      {!loadingPosts && (
        <div className="container" style={{ marginTop: "45px" }}>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul className="pagination">
                <PaginationButton
                  label="Previous"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }).map((_, index) => (
                  <PaginationButton
                    key={index + 1}
                    label={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={currentPage === index + 1}
                  />
                ))}
                <PaginationButton
                  label="Next"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PostList;
