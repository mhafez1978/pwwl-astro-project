import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, e as renderSlot, f as renderHead, d as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../astro.750432f2.mjs';
import { $ as $$Footer, a as $$Navbar, b as $$Topbar } from './404.astro.50b022d0.mjs';
import dotenv from 'dotenv';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$LandingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  dotenv.config();
  const { pageTitle, pageDescription, pageKeywords } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>PWWL | ', '</title>\n    <meta content="width=device-width, initial-scale=1.0" name="viewport">\n    <meta', ' name="keywords">\n    <meta', ' name="description">\n\n    <!-- Favicon -->\n    <link href="/favicon.svg" rel="icon">\n\n    <!-- Google Web Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet">\n\n    <!-- Icon Font Stylesheet -->\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">\n\n    <!-- Libraries Stylesheet -->\n    <link href="/assets/lib/animate/animate.min.css" rel="stylesheet">\n    <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">\n    <link href="/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet">\n\n    <!-- Customized Bootstrap Stylesheet -->\n    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">\n\n    <!-- Template Stylesheet -->\n    <link href="/assets/css/style.css" rel="stylesheet">\n    <base href="/">\n  ', "</head>\n\n  <body>\n    ", "\n    ", "\n    ", "\n\n    ", '\n\n    <script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"><\/script>\n    <script src="/assets/lib/wow/wow.min.js"><\/script>\n    <script src="/assets/lib/easing/easing.min.js"><\/script>\n    <script src="/assets/lib/waypoints/waypoints.min.js"><\/script>\n    <script src="/assets/lib/counterup/counterup.min.js"><\/script>\n    <script src="/assets/lib/owlcarousel/owl.carousel.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment-timezone.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async><\/script>\n    <!-- Template Javascript -->\n    <script src="/assets/js/main.js"><\/script>\n  </body>\n</html>'])), pageTitle, addAttribute(pageKeywords, "content"), addAttribute(pageDescription, "content"), renderHead(), renderComponent($$result, "Topbar", $$Topbar, {}), renderComponent($$result, "Navbar", $$Navbar, { "title": pageTitle }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/layouts/LandingLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$ToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ToTop;
  return renderTemplate`<!-- Back to Top -->${maybeRenderHead()}<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ToTop.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const res = await fetch(
    `https://api.charlottecitylimo.com/wp-json/wp/v2/posts/${id}`
  );
  const media = await fetch(
    `https://api.charlottecitylimo.com/wp-json/wp/v2/posts/${id}?_embed`
  );
  const post = await res.json();
  const postMedia = await media.json();
  const hasFeaturedMedia = postMedia._embedded && postMedia._embedded["wp:featuredmedia"] && postMedia._embedded["wp:featuredmedia"][0] && postMedia._embedded["wp:featuredmedia"][0].source_url;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": `article - ${id}`, "pageDescription": post.slug, "pageKeywords": post.slug }, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="container" style="margin:100px auto; display:flex;flex-direction: column; justify-content:center; align-items:center">
    <img${addAttribute(900, "width")}${addAttribute(600, "height")}${addAttribute(hasFeaturedMedia ? postMedia._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg", "src")} style="width: 72vw; height:40vh">

    <br>
    <h1>${unescapeHTML(post.title.rendered)}</h1>
    <p>${unescapeHTML(post.content.rendered)}</p>

    <div class="bread-crumb alert alert-warning">
      <span>You are here:</span><br>
      <a href="/">Home</a> > <a href="/latest-news">Latest News</a> > Article : <span>${unescapeHTML(post.slug)}</span>
    </div>
  </div>
  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/posts/[id].astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/posts/[id].astro";
const $$url = "/posts/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ToTop as $, _id_ as _, $$LandingLayout as a };
