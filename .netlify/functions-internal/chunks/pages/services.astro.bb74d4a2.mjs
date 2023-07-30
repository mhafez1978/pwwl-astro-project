import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.63d2aef5.mjs';
import 'html-escaper';
import { $ as $$Spinner, a as $$ToTop, b as $$LandingLayout } from './contact.astro.e55e50d8.mjs';
import { a as $$Service3 } from './index.astro.af892625.mjs';
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
  
  <div class="container-fluid my-5 px-0">
    <div class="video wow fadeInUp" data-wow-delay="0.1s">
      <button type="button" class="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/fq2CdnfijhQ" data-bs-target="#videoModal">
        <span></span>
      </button>

      <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- 16:9 aspect ratio -->
              <div class="ratio ratio-16x9">
                <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always" allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="text-white mb-4">Emergency Plumbing Service</h1>
      <h3 class="text-white mb-0">24 Hours 7 Days a Week</h3>
    </div>
    <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style="margin-top: -6rem">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="bg-light text-center p-5">
            <h1 class="mb-4">Book For A Service</h1>
            <form>
              <div class="row g-3">
                <div class="col-12 col-sm-6">
                  <input type="text" class="form-control border-0" placeholder="Your Name" style="height: 55px">
                </div>
                <div class="col-12 col-sm-6">
                  <input type="email" class="form-control border-0" placeholder="Your Email" style="height: 55px">
                </div>
                <div class="col-12 col-sm-6">
                  <select class="form-select border-0" style="height: 55px">
                    <option selected>Select A Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="date" id="date1" data-target-input="nearest">
                    <input type="text" class="form-control border-0 datetimepicker-input" placeholder="Service Date" data-target="#date1" data-toggle="datetimepicker" style="height: 55px">
                  </div>
                </div>
                <div class="col-12">
                  <textarea class="form-control border-0" placeholder="Special Request"></textarea>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  
  <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
      <div class="text-center">
        <h6 class="text-secondary text-uppercase">Testimonial</h6>
        <h1 class="mb-5">Our Clients Say!</h1>
      </div>
      <div class="owl-carousel testimonial-carousel position-relative wow fadeInUp" data-wow-delay="0.1s">
        <div class="testimonial-item text-center">
          <div class="testimonial-text bg-light text-center p-4 mb-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img class="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-1.jpg" style="width: 80px; height: 80px">
          <div class="mb-2">
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
          </div>
          <h5 class="mb-1">Client Name</h5>
          <p class="m-0">Profession</p>
        </div>
        <div class="testimonial-item text-center">
          <div class="testimonial-text bg-light text-center p-4 mb-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img class="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-2.jpg" style="width: 80px; height: 80px">
          <div class="mb-2">
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
          </div>
          <h5 class="mb-1">Client Name</h5>
          <p class="m-0">Profession</p>
        </div>
        <div class="testimonial-item text-center">
          <div class="testimonial-text bg-light text-center p-4 mb-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img class="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-3.jpg" style="width: 80px; height: 80px">
          <div class="mb-2">
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
          </div>
          <h5 class="mb-1">Client Name</h5>
          <p class="m-0">Profession</p>
        </div>
        <div class="testimonial-item text-center">
          <div class="testimonial-text bg-light text-center p-4 mb-4">
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img class="bg-light rounded-circle p-2 mx-auto mb-2" src="assets/img/testimonial-4.jpg" style="width: 80px; height: 80px">
          <div class="mb-2">
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
            <small class="fa fa-star text-secondary"></small>
          </div>
          <h5 class="mb-1">Client Name</h5>
          <p class="m-0">Profession</p>
        </div>
      </div>
    </div>
  </div>
  
  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/services.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
