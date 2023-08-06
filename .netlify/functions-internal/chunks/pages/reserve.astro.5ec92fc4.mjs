import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../astro.750432f2.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.30f0f11f.mjs';
import { $ as $$Spinner, C as ContactForm } from './contact.astro.10bacb04.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
import './404.astro.1b1b13b9.mjs';
import 'react';
import '@emailjs/browser';
import 'react/jsx-runtime';
/* empty css                             */import 'dotenv';

const $$Astro = createAstro();
const $$Reserve = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Reserve;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Reservations" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5">
    <div class="container">
      <h1 class="display-3 text-white mb-3 animated slideInDown">
        Reservations
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase">
          <li class="breadcrumb-item">
            <a class="text-white" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active" aria-current="page">
            Reservations
          </li>
        </ol>
      </nav>
    </div>
  </div>
  
  <div class="container">
    <h3>Make A Reservation</h3>
    <p>
      For a more accurate quote. Please fill all the required information below.
      We will contact you shortly when we receieve your message.
    </p>
    <br>
    <hr>
    <br>
    ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ContactForrm", "client:component-export": "default" })}
  </div>

  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reserve.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/reserve.astro";
const $$url = "/reserve";

export { $$Reserve as default, $$file as file, $$url as url };
