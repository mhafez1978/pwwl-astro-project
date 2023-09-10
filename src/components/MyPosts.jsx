import React, { useState, useEffect } from "react";

function MyPostList() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [authors, setAuthors] = useState([]);

  // Function to convert date to EST
  function toEST(isoDate) {
    const date = new Date(isoDate);
    const estOffset = -5 * 60 * 60000; // Offset in milliseconds
    const estDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60000 + estOffset
    );
    return estDate;
  }

  // Function to format date
  function formatDate(estDate) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return estDate.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://charlottechoicelimos.com/wp-json/wp/v2/posts?_embed&per_page=9&page=${currentPage}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        setTotalPages(Number(res.headers.get("X-WP-TotalPages")));

        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  // Fetch authors once when component mounts
  useEffect(() => {
    const fetchAuthors = async () => {
      const res = await fetch(
        "https://charlottechoicelimos.com/wp-json/wp/v2/users"
      );
      const data = await res.json();
      setAuthors(data);
    };

    fetchAuthors();
  }, []);

  const getAuthorName = (authorId) => {
    const author = authors.find((a) => a.id === authorId);
    return author ? author.name : "PWWL Mgmt";
  };

  return (
    <>
      <div className="col-lg-12">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {posts.map((post) => {
            const estDate = toEST(post.date);
            const formattedDate = formatDate(estDate);
            const authorName = getAuthorName(post.author);
            const hasFeaturedMedia =
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0] &&
              post._embedded["wp:featuredmedia"][0].source_url;

            return (
              <div className="col" key={post.id}>
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src={
                      hasFeaturedMedia !== undefined
                        ? hasFeaturedMedia
                        : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg"
                    }
                    style={{ height: "200px" }}
                    alt=""
                  />
                  <div className="card-body">
                    <p
                      className="card-title"
                      style={{ fontSize: "20px", color: "#222" }}
                    >
                      {post.title.rendered
                        .substring(0, 300)
                        .replace(/[^a-zA-Z0-9 ]/g, "")}
                    </p>
                    <p className="card-text">
                      Published by {authorName}
                      <br />
                      Published on {formattedDate}
                    </p>
                    <p className="card-text" style={{ fontSize: "14px" }}>
                      {post.excerpt.rendered
                        .substring(3, 340)
                        .replace(/[^a-zA-Z0-9 ]/g, "")}
                      ...
                    </p>

                    <a href={`/posts/${post.id}`} target="_self">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center" style={{ margin: "80px auto;" }}>
        <button
          style={{ padding: "10px 30px" }}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          style={{ padding: "10px 30px" }}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default MyPostList;
