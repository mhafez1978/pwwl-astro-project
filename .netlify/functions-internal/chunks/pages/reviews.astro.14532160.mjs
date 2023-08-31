import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../astro.a5318bb2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.65327277.mjs';
import { $ as $$Spinner } from './contact.astro.d8d12ce6.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.1a2f991a.mjs';
import 'react';
import '@emailjs/browser';
import 'react/jsx-runtime';
/* empty css                             */import 'dotenv';
/* empty css                             */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro();
const $$GBizReviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GBizReviews;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer><\/script>\n', '<div class="elfsight-app-6890e7c1-899f-4f5f-981a-13f60a09f6d0"></div>'])), maybeRenderHead());
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/components/GBizReviews.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$GoogleReviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GoogleReviews;
  return renderTemplate(_a || (_a = __template(["<!-- <GoogleReviewsComponent apiKey={apiKey} placeId={placeId} client:load /> -->", "\n\n<!-- <script>\n  console.log(({}).PUBLIC_GPLACEID);\n  console.log(({}).PUBLIC_APIKEY);\n<\/script> -->"])), renderComponent($$result, "GBizReviews", $$GBizReviews, {}));
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/components/GoogleReviews.astro", void 0);

const $$Astro = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reviews;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Reviews", "class": "astro-ALFX3E2M" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, { "class": "astro-ALFX3E2M" })}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5 astro-ALFX3E2M">
    <div class="container astro-ALFX3E2M">
      <h1 class="display-3 text-white mb-3 animated slideInDown astro-ALFX3E2M">
        Our Reviews
      </h1>
      <nav aria-label="breadcrumb animated slideInDown" class="astro-ALFX3E2M">
        <ol class="breadcrumb text-uppercase astro-ALFX3E2M">
          <li class="breadcrumb-item astro-ALFX3E2M">
            <a class="text-white astro-ALFX3E2M" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active astro-ALFX3E2M" aria-current="page">
            Reviews
          </li>
        </ol>
      </nav>
    </div>
  </div>
  

  ${renderComponent($$result2, "GoogleReviews", $$GoogleReviews, { "class": "astro-ALFX3E2M" })}

  

  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-ALFX3E2M" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/reviews.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/pwwl-astro-project/src/pages/reviews.astro";
const $$url = "/reviews";

export { $$Reviews as default, $$file as file, $$url as url };
