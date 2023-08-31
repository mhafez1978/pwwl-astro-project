import React, { useState, useEffect } from "react";
let hasFeaturedMedia;
function AstroComponent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://charlottecitylimo.com/wp-json/wp/v2/posts?_embed"
      );
      const data = await res.json();
      console.log(2);
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="col-lg-12">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <div style={{ display: "none" }}>
                {
                  (hasFeaturedMedia =
                    post._embedded["wp:featuredmedia"] &&
                    post._embedded["wp:featuredmedia"][0] &&
                    post._embedded["wp:featuredmedia"][0].source_url)
                }
              </div>
              <img
                className="card-img-top"
                src={
                  hasFeaturedMedia !== undefined
                    ? post._embedded["wp:featuredmedia"] &&
                      post._embedded["wp:featuredmedia"][0] &&
                      post._embedded["wp:featuredmedia"][0].source_url
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
                  {post.title.rendered.substring(0, 34)} ...
                </p>
                <p
                  className="card-text"
                  style={{ fontSize: "14px" }}
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt.rendered.substring(0, 100) + `...`,
                  }}
                />

                <a
                  href={`/posts/${post.id}`}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AstroComponent;
