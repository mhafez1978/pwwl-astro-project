import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.a5318bb2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.65327277.mjs';
import { $ as $$Spinner } from './contact.astro.d8d12ce6.mjs';
import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
/* empty css                                 */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.1a2f991a.mjs';
import '@emailjs/browser';
/* empty css                             */import 'dotenv';
/* empty css                             */
const ReactPostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://charlottecitylimo.com/wp-json/wp/v2/posts?per_page=38");
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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return /* @__PURE__ */ jsx("div", {
    children: loading ? /* @__PURE__ */ jsx("p", {
      children: "Loading..."
    }) : /* @__PURE__ */ jsx("div", {
      className: "container mx-auto col-lg-12",
      children: /* @__PURE__ */ jsxs("div", {
        className: "row mb-8",
        children: [currentPosts.map((post, index) => /* @__PURE__ */ jsxs("div", {
          className: "col-lg-4 px-4 py-4",
          style: {
            border: "1px solid #222",
            margin: "2px",
            width: "32%",
            borderRadius: "24px",
            overflow: "hidden"
          },
          children: [/* @__PURE__ */ jsx("h3", {
            className: "text-sm",
            children: post.title.rendered.replace(/[^a-zA-Z0-9 ]/g, "")
          }), /* @__PURE__ */ jsx("hr", {}), /* @__PURE__ */ jsx("div", {
            dangerouslySetInnerHTML: {
              __html: post.content.rendered.substring(0, 300).replace(/[^a-zA-Z0-9 ]/g, "")
            }
          }), /* @__PURE__ */ jsx("a", {
            href: `/posts/${post.id}`,
            children: "Read More ...."
          })]
        }, index)), /* @__PURE__ */ jsx("div", {
          className: "text-center",
          style: {
            marginTop: "50px"
          },
          children: Array.from({
            length: Math.ceil(allPosts.length / postsPerPage)
          }, (_, index) => /* @__PURE__ */ jsx("button", {
            onClick: () => paginate(index + 1),
            children: index + 1
          }, index))
        })]
      })
    })
  });
};
__astro_tag_component__(ReactPostList, "@astrojs/react");

const $$Astro = createAstro();
const $$LatestNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LatestNews;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Latest News", "pageDescription": "Latest charlotte news, events, promotional offers, and tourism posts mostly promoting small local business.", "pageKeywords": "Prestige Worldwide Limos latest posts, articles, news, promotional offers and events.", "class": "astro-KEUWC25X" }, { "default": ($$result2) => renderTemplate`
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
      <!-- <PostsPagination client:load /> -->
      <!-- <ExternalPosts /> -->
      <!-- <MyPosts client:load /> -->
      <!-- <ExternalBlogPosts /> -->
      ${renderComponent($$result2, "ReactPostList", ReactPostList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/components/ReactPostList", "client:component-export": "default", "class": "astro-KEUWC25X" })}
      <!-- <FinalPostList /> -->
    </div>
  </div>
  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-KEUWC25X" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/latest-news.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/latest-news.astro";
const $$url = "/latest-news";

export { $$LatestNews as default, $$file as file, $$url as url };
