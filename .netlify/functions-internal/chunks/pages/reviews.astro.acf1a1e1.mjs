import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.750432f2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.6c6f1683.mjs';
import { $ as $$Spinner } from './contact.astro.948c6bb4.mjs';
import { $ as $$Testimonial } from './index.astro.1f5a6025.mjs';
/* empty css                             */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.a483d25a.mjs';
import 'react';
import '@emailjs/browser';
import 'react/jsx-runtime';
/* empty css                             */import 'dotenv';
/* empty css                             *//* empty css                           *//* empty css                           */
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
  

  ${renderComponent($$result2, "Testimonial", $$Testimonial, { "class": "astro-ALFX3E2M" })}

  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-ALFX3E2M" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reviews.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reviews.astro";
const $$url = "/reviews";

export { $$Reviews as default, $$file as file, $$url as url };
