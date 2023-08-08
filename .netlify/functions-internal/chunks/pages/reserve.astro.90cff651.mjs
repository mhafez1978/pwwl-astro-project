import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.750432f2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.6c6f1683.mjs';
import { $ as $$Spinner, C as ContactForm } from './contact.astro.948c6bb4.mjs';
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
/* empty css                             */
const $$Astro = createAstro();
const $$Reserve = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reserve;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Reservations", "class": "astro-56NBFQGZ" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, { "class": "astro-56NBFQGZ" })}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5 astro-56NBFQGZ">
    <div class="container astro-56NBFQGZ">
      <h1 class="display-3 text-white mb-3 animated slideInDown astro-56NBFQGZ">
        Reservations
      </h1>
      <nav aria-label="breadcrumb animated slideInDown" class="astro-56NBFQGZ">
        <ol class="breadcrumb text-uppercase astro-56NBFQGZ">
          <li class="breadcrumb-item astro-56NBFQGZ">
            <a class="text-white astro-56NBFQGZ" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active astro-56NBFQGZ" aria-current="page">
            Reservations
          </li>
        </ol>
      </nav>
    </div>
  </div>
  
  <div class="container astro-56NBFQGZ">
    <h3 class="astro-56NBFQGZ">Make A Reservation</h3>
    <p class="astro-56NBFQGZ">
      For a more accurate quote. Please fill all the required information below.
      We will contact you shortly when we receieve your message.
    </p>
    <br class="astro-56NBFQGZ">
    <hr class="astro-56NBFQGZ">
    <br class="astro-56NBFQGZ">
    ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ContactForrm", "client:component-export": "default", "class": "astro-56NBFQGZ" })}
  </div>

  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-56NBFQGZ" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reserve.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reserve.astro";
const $$url = "/reserve";

export { $$Reserve as default, $$file as file, $$url as url };
