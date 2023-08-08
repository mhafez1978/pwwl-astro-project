import { useState, useEffect } from "react";
import { format } from "date-fns";

const API_URL = `https://charlottecitylimo.com/wp-json/wp/v2/posts?_embed&per_page=100`;
const Author_URL = `https://charlottecitylimo.com/wp-json/wp-json/wp/v2/users`;

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
    return author ? author.name : "Frankie C";
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
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
            const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");
            const hasFeaturedMedia =
              post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0] &&
              post._embedded["wp:featuredmedia"][0].source_url;

            return (
              <>
                <div className="col">
                  <div className="card">
                    <img
                      src={
                        hasFeaturedMedia
                          ? post._embedded["wp:featuredmedia"][0].source_url
                          : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
                      }
                      className="card-img-top"
                      alt={post.title.rendered}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{post.title.rendered}</h5>
                      <p className="card-text">
                        Author: {getAuthorUsername(post.author)} <br />
                        Published: {formattedDate}
                        <br />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered.substring(0, 80),
                          }}
                        />
                        <br />
                        <a href={`/posts/${post.id}`} target="_self">
                          Read More
                        </a>
                      </p>
                    </div>
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
                          {Array.from({ length: totalPages }).map(
                            (_, index) => (
                              <PaginationButton
                                key={index + 1}
                                label={index + 1}
                                onClick={() => handlePageChange(index + 1)}
                                disabled={currentPage === index + 1}
                              />
                            )
                          )}
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
          })
        ) : (
          <div className="col-lg-12 d-flex justify-content-center">
            <h2>No posts found.</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default PostList;
