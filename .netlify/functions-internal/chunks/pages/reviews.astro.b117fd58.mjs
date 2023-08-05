import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.750432f2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.1a2c08a2.mjs';
import { $ as $$Spinner } from './contact.astro.d9a4f2c4.mjs';
import { $ as $$Testimonial } from './index.astro.1946de5b.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.50b022d0.mjs';
import 'react';
import '@emailjs/browser';
import 'react/jsx-runtime';
/* empty css                             */import 'dotenv';
/* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reviews;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Reviews" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5">
    <div class="container">
      <h1 class="display-3 text-white mb-3 animated slideInDown">
        Our Reviews
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase">
          <li class="breadcrumb-item">
            <a class="text-white" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active" aria-current="page">
            Reviews
          </li>
        </ol>
      </nav>
    </div>
  </div>
  

  ${renderComponent($$result2, "Testimonial", $$Testimonial, {})}

  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reviews.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reviews.astro";
const $$url = "/reviews";

export { $$Reviews as default, $$file as file, $$url as url };
