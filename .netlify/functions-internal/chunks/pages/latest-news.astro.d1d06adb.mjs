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
let hasFeaturedMedia;
function AstroComponent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://charlottecitylimo.com/wp-json/wp/v2/posts?_embed");
      const data = await res.json();
      setPosts(data);
    };
    fetchData();
  }, []);
  return /* @__PURE__ */ jsx("div", {
    className: "col-lg-12",
    children: /* @__PURE__ */ jsx("div", {
      className: "row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3",
      children: posts.map((post) => /* @__PURE__ */ jsx("div", {
        className: "col",
        children: /* @__PURE__ */ jsxs("div", {
          className: "card",
          children: [/* @__PURE__ */ jsx("div", {
            style: {
              display: "none"
            },
            children: hasFeaturedMedia = post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] && post._embedded["wp:featuredmedia"][0].source_url
          }), /* @__PURE__ */ jsx("img", {
            className: "card-img-top",
            src: hasFeaturedMedia !== void 0 ? post._embedded["wp:featuredmedia"] && post._embedded["wp:featuredmedia"][0] && post._embedded["wp:featuredmedia"][0].source_url : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg",
            style: {
              height: "200px"
            },
            alt: ""
          }), /* @__PURE__ */ jsxs("div", {
            className: "card-body",
            children: [/* @__PURE__ */ jsxs("p", {
              className: "card-title",
              style: {
                fontSize: "20px",
                color: "#222"
              },
              children: [post.title.rendered.substring(0, 34), " ..."]
            }), /* @__PURE__ */ jsx("p", {
              className: "card-text",
              style: {
                fontSize: "14px"
              },
              dangerouslySetInnerHTML: {
                __html: post.excerpt.rendered.substring(0, 100) + `...`
              }
            }), /* @__PURE__ */ jsx("a", {
              href: `/posts/${post.id}`,
              target: "_self",
              children: "Read More"
            })]
          })]
        })
      }, post.id))
    })
  });
}
__astro_tag_component__(AstroComponent, "@astrojs/react");

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
      ${renderComponent($$result2, "MyPosts", AstroComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/components/MyPosts", "client:component-export": "default", "class": "astro-KEUWC25X" })}
      <!-- <ExternalBlogPosts /> -->
      <!-- <ReactPostList client:load /> -->
      <!-- <FinalPostList /> -->
    </div>
  </div>
  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-KEUWC25X" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/latest-news.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/latest-news.astro";
const $$url = "/latest-news";

export { $$LatestNews as default, $$file as file, $$url as url };
