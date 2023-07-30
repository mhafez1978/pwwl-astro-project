import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.63d2aef5.mjs';
import 'html-escaper';
import { $ as $$Spinner, a as $$ToTop, b as $$LandingLayout } from './contact.astro.e55e50d8.mjs';
import { a as $$Service3, b as $$Booking, $ as $$Testimonial } from './index.astro.c6388ba9.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             */import 'react';
import '@emailjs/browser';
import 'react/jsx-runtime';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import 'node:stream';
import './endpoint.js.fa1a8680.mjs';
import 'sharp';
/* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Services" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5">
    <div class="container">
      <h1 class="display-3 text-white mb-3 animated slideInDown">
        Our Services
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase">
          <li class="breadcrumb-item">
            <a class="text-white" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active" aria-current="page">
            Services
          </li>
        </ol>
      </nav>
    </div>
  </div>
  
  ${renderComponent($$result2, "Services3", $$Service3, {})}
  ${renderComponent($$result2, "Booking", $$Booking, {})}
  ${renderComponent($$result2, "Testimonial", $$Testimonial, {})}
  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/services.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
