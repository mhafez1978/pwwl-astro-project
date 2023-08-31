"use client";
import React, { useState, useEffect } from "react";

const ReactPostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [loading, setLoading] = useState(false);

  // Fetch all available posts from the WordPress API
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://charlottecitylimo.com/wp-json/wp/v2/posts?per_page=38"
        );
        const data = await response.json();
        setAllPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container mx-auto col-lg-12">
          <div className="row mb-8">
            {currentPosts.map((post, index) => (
              <div
                className="col-lg-4 px-4 py-4"
                key={index}
                style={{
                  border: "1px solid #222",
                  margin: "2px",
                  width: "32%",
                  borderRadius: "24px",
                  overflow: "hidden",
                }}
              >
                {/* <div style="display:none;">
                  {
                    (hasFeaturedMedia =
                      post._embedded["wp:featuredmedia"] &&
                      post._embedded["wp:featuredmedia"][0] &&
                      post._embedded["wp:featuredmedia"][0].source_url)
                  }
                </div> */}
                {/* <img
                  class="w-full"
                  src={
                    hasFeaturedMedia !== undefined
                      ? post._embedded["wp:featuredmedia"] &&
                        post._embedded["wp:featuredmedia"][0] &&
                        post._embedded["wp:featuredmedia"][0].source_url
                      : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
                  }
                  alt={post.title.rendered.replace(/[^a-zA-Z0-9 ]/g, "")}
                /> */}
                <h3 className="text-sm">
                  {post.title.rendered.replace(/[^a-zA-Z0-9 ]/g, "")}
                </h3>
                <hr />
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.rendered
                      .substring(0, 300)
                      .replace(/[^a-zA-Z0-9 ]/g, ""),
                  }}
                />
                <a href={`/posts/${post.id}`}>Read More ....</a>
              </div>
            ))}

            <div className="text-center" style={{ marginTop: "50px" }}>
              {Array.from(
                { length: Math.ceil(allPosts.length / postsPerPage) },
                (_, index) => (
                  <button key={index} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactPostList;
