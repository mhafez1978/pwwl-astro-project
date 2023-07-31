import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.9e971bc7.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.3620f32f.mjs';
import { $ as $$Spinner } from './contact.astro.a03a386c.mjs';
import { useState, useEffect } from 'react';
import './events.astro.acc01bab.mjs';
import { format } from 'date-fns';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                                 */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.1b960958.mjs';
import '@emailjs/browser';
/* empty css                             */import 'dotenv';
/* empty css                            */
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
const PaginationButton = ({
  label,
  onClick,
  disabled
}) => /* @__PURE__ */ jsx("li", {
  className: `page-item ${disabled ? "disabled" : ""}`,
  children: /* @__PURE__ */ jsx("button", {
    className: "page-link",
    onClick,
    children: label
  })
});
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postAuthors, setPostAuthors] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const postsPerPage = 6;
  useEffect(() => {
    const fetchPosts = async () => {
      setLoadingPosts(true);
      const data = await fetchAllPosts();
      setPosts(data);
      setTotalPosts(data.length);
      setLoadingPosts(false);
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
  const getAuthorUsername = (authorId) => {
    const author = postAuthors.find((author2) => author2.id === authorId);
    return author ? author.name : "PWWL";
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      style: {
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ jsx("div", {
        className: "row",
        style: {
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        },
        children: loadingPosts ? /* @__PURE__ */ jsx("div", {
          className: "col-lg-12 d-flex justify-center",
          children: /* @__PURE__ */ jsx("img", {
            src: "https://i.gifer.com/origin/ba/ba4eeed06a8f9efb0d7b5ad26f1f8d45_w200.gif",
            alt: "",
            width: "400"
          })
        }) : (
          // Show the post list if the posts have finished loading
          currentPosts.length > 0 ? currentPosts.map((post) => {
            const formattedDate = format(new Date(post.date), "MMMM dd, yyyy");
            const hasFeaturedMedia = post._embedded && post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] && post._embedded["wp:featuredmedia"][0].source_url;
            return /* @__PURE__ */ jsxs("div", {
              className: "card d-flex flex-column",
              style: {
                width: "18rem",
                height: "460px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: "column"
              },
              children: [/* @__PURE__ */ jsx("img", {
                className: "card-img-top",
                style: {
                  objectFit: "cover",
                  height: "200px"
                },
                src: hasFeaturedMedia ? post._embedded["wp:featuredmedia"][0].source_url : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg",
                alt: post.title.rendered
              }), /* @__PURE__ */ jsxs("div", {
                className: "card-body",
                children: [/* @__PURE__ */ jsxs("p", {
                  style: {
                    fontSize: "16px",
                    paddingRight: "20px",
                    color: "#222"
                  },
                  children: [formattedDate, " ", /* @__PURE__ */ jsx("br", {}), post.title.rendered]
                }), /* @__PURE__ */ jsx("p", {
                  style: {
                    fontSize: "12px",
                    color: "#222"
                  },
                  dangerouslySetInnerHTML: {
                    __html: post.excerpt.rendered.substring(0, 80)
                  }
                }), /* @__PURE__ */ jsxs("p", {
                  style: {
                    fontSize: "12px"
                  },
                  children: ["Author: ", getAuthorUsername(post.author), " ", /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("a", {
                    href: `/posts/${post.id}`,
                    children: "Read the article..."
                  })]
                })]
              })]
            });
          }) : /* @__PURE__ */ jsx("div", {
            className: "col-lg-12 d-flex justify-content-center",
            children: /* @__PURE__ */ jsx("h2", {
              children: "No posts found."
            })
          })
        )
      })
    }), !loadingPosts && /* @__PURE__ */ jsx("div", {
      className: "container",
      style: {
        marginTop: "45px"
      },
      children: /* @__PURE__ */ jsx("div", {
        className: "row",
        children: /* @__PURE__ */ jsx("div", {
          className: "col-lg-12 d-flex justify-content-center",
          children: /* @__PURE__ */ jsxs("ul", {
            className: "pagination",
            children: [/* @__PURE__ */ jsx(PaginationButton, {
              label: "Previous",
              onClick: () => handlePageChange(currentPage - 1),
              disabled: currentPage === 1
            }), Array.from({
              length: totalPages
            }).map((_, index) => /* @__PURE__ */ jsx(PaginationButton, {
              label: index + 1,
              onClick: () => handlePageChange(index + 1),
              disabled: currentPage === index + 1
            }, index + 1)), /* @__PURE__ */ jsx(PaginationButton, {
              label: "Next",
              onClick: () => handlePageChange(currentPage + 1),
              disabled: currentPage === totalPages
            })]
          })
        })
      })
    })]
  });
};
__astro_tag_component__(PostList, "@astrojs/react");

const $$Astro = createAstro();
const $$LatestNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestNews;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Latest News", "pageDescription": "Our Latest News", "pageKeywords": "latest posts, pwwl blog", "class": "astro-KEUWC25X" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, { "class": "astro-KEUWC25X" })}
  ${maybeRenderHead()}<div class="container-fluid astro-KEUWC25X" style="margin-top:100px; min-height:100vh;z-index:-1;">
    <div style="display:flex; flex-direction:column; justify-content:center; align-items: center; margin-bottom: 40px; text-center" class="astro-KEUWC25X">
      <h1 class="text-center astro-KEUWC25X" style="color:#FF4917">Latest News</h1>
      <p style="font-size: 14px;" class="astro-KEUWC25X">
        <!-- Not sure where to go to, below we curated a list of all local events
          around you. -->
      </p>
      <nav aria-label="breadcrumb animated slideInDown" class="astro-KEUWC25X">
        <ol class="breadcrumb text-uppercase astro-KEUWC25X">
          <li class="breadcrumb-item astro-KEUWC25X">
            <a class="text-black astro-KEUWC25X" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-black active astro-KEUWC25X" aria-current="page">
            Latest News
          </li>
        </ol>
      </nav>
    </div>

    <div class="container mx-auto astro-KEUWC25X">
      ${renderComponent($$result2, "PostsPagination", PostList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/PostsPagination", "client:component-export": "default", "class": "astro-KEUWC25X" })}
    </div>
  </div>
  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-KEUWC25X" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/latest-news.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/latest-news.astro";
const $$url = "/latest-news";

export { $$LatestNews as default, $$file as file, $$url as url };
