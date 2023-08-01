import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, e as renderSlot, f as renderHead } from '../astro.750432f2.mjs';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
/* empty css                             */import dotenv from 'dotenv';

const serviceId = "service_7884kpr";
const templateId = "template_mp0fcys";
const publicKey = "zHm8hAEo7aMdHxB9X";
const NewsletterSignup = () => {
  const [user_email, setUserEmail] = useState("");
  useState("");
  const [successMessageStatus, setSuccessMessageStatus] = useState("d-none");
  const [errorMessageStatus, setErrorMessageStatus] = useState("d-none");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then((result) => {
      setSuccessMessageStatus("d-block");
      form.current.reset();
    }, (error) => {
      setErrorMessageStatus("d-block");
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "col-12",
      children: [successMessageStatus === "d-block" ? /* @__PURE__ */ jsx("div", {
        class: "alert alert-success  text-center",
        role: "alert",
        style: {
          fontSiz: "12px",
          width: "300px"
        },
        children: "Thank you! You're signed up to the newsletter."
      }) : /* @__PURE__ */ jsx("div", {}), errorMessageStatus === "d-block" ? /* @__PURE__ */ jsx("div", {
        class: "alert alert-danger text-center",
        role: "alert",
        style: {
          fontSiz: "12px",
          width: "300px"
        },
        children: "There was a problem, try again later."
      }) : /* @__PURE__ */ jsx("div", {})]
    }), /* @__PURE__ */ jsx("form", {
      ref: form,
      onSubmit: sendEmail,
      className: "border-1",
      children: /* @__PURE__ */ jsxs("div", {
        className: "row g-3",
        children: [/* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("input", {
            required: true,
            name: "user_email",
            type: "email",
            className: "form-control border-1",
            placeholder: "user@email.com",
            style: {
              height: "55px",
              width: "300px"
            },
            onChange: (e) => {
              setUserEmail(e.target.value);
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12",
          children: /* @__PURE__ */ jsx("button", {
            className: "btn btn-primary py-1 hover:bg-green-500",
            style: {
              width: "300px",
              borderRadius: "4px"
            },
            type: "submit",
            children: "SignUp"
          })
        })]
      })
    })]
  });
};
__astro_tag_component__(NewsletterSignup, "@astrojs/react");
__astro_tag_component__(NewsletterSignup, "@astrojs/react");

const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`<!-- Footer Start -->${maybeRenderHead()}<div class="container-fluid bg-dark text-light footer pt-5 mt-5" data-wow-delay="0.1s">
  <div class="container py-5">
    <div class="row g-5">
      <div class="col-lg-3 col-md-6">
        <h4 class="text-light mb-4">Address</h4>
        <p class="mb-2">
          <i class="fa fa-map-marker-alt"></i>
          Address: <br>1515 Spruce Lane Denver, NC 28037 USA
        </p>
        <p class="mb-2">
          <i class="fa fa-phone-alt"></i>
          <a href="tel:+1980-391-0979" class="text-white">+1 980-391-0979</a>
        </p>
        <p class="mb-2">
          <i class="fa fa-envelope"></i>
          <a style="color:#fff" href="mailto:reserve@prestigeworldwidelimos.com">Email</a>
        </p>
        <div class="d-flex pt-2">
          <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
          <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
          <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
          <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-light mb-4">Opening Hours</h4>
        <h6 class="text-light">Monday - Friday:</h6>
        <p class="mb-4">09.00 AM - 09.00 PM</p>
        <h6 class="text-light">Saturday - Sunday:</h6>
        <p class="mb-0">09.00 AM - 12.00 PM</p>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-light mb-4">Services</h4>
        <a class="btn btn-link" href="">Wedding Limo Rentals</a>
        <a class="btn btn-link" href="">Bachalorette/Bachalore Parties</a>
        <a class="btn btn-link" href="">Charotte Party Bus</a>
        <a class="btn btn-link" href="">Corporate Limousine Service</a>
        <a class="btn btn-link" href="">Prom night Limo</a>
        <a class="btn btn-link" href="">Wine Tour Limo</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h4 class="text-light mb-4">Newsletter</h4>
        <p>
          Sign-up for our newsletter to receive promotional offers and discount
          from Prestige Worldwide Limos.
        </p>
        <div class="position-relative mx-auto" style="max-width: 400px;">
          ${renderComponent($$result, "NewsletterSignup", NewsletterSignup, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/NewsletterSignup", "client:component-export": "default" })}
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="copyright">
      <div class="row">
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          &copy; <a class="border-bottom" href="#">PWWL</a>, All Right Reserved.
        </div>
        <div class="col-md-6 text-center text-md-end">
          Designed By <a class="border-bottom" href="">MHafez</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Footer End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { title } = Astro2.props;
  return renderTemplate`<!-- Navbar Start -->${maybeRenderHead()}<div class="container-fluid nav-bar bg-dark astro-5BLMO7YK">
  <nav class="navbar navbar-expand-lg navbar-dark p-3 py-lg-0 px-lg-4 astro-5BLMO7YK">
    <a href="/" class="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none astro-5BLMO7YK">
      <h1 style="font-size:1.2rem;" class="text-white m-0 astro-5BLMO7YK">
        Prestige Worldwide Limos
      </h1>
    </a>
    <button class="navbar-toggler astro-5BLMO7YK" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span class="fa fa-bars astro-5BLMO7YK"></span>
    </button>
    <div class="collapse navbar-collapse astro-5BLMO7YK" id="navbarCollapse">
      <div class="navbar-nav me-auto astro-5BLMO7YK">
        <a href="/"${addAttribute((title === "Home" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Home</a>
        <a href="/services"${addAttribute((title === "Services" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Services</a>
        <a href="/reviews"${addAttribute((title === "Reviews" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Reviews</a>
        <!-- <div class="nav-item dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Pages</a
          >
          <div class="dropdown-menu fade-up m-0">
            <a href="/" class="dropdown-item">Latest News</a>
            <a href="/" class="dropdown-item">Reviews</a>
            <a href="/" class="dropdown-item">Testimonial</a>
            <a href="/" class="dropdown-item">404 Page</a>
          </div>
        </div> -->
        <a href="/events"${addAttribute((title === "Events" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Events</a>
        <a href="/latest-news"${addAttribute((title === "Latest News" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Latest News</a>
        <a href="/reserve"${addAttribute((title === "Reservations" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Reservations</a>
        <a href="/contact"${addAttribute((title === "Contact" ? "nav-item nav-link" : "nav-item nav-link active") + " astro-5BLMO7YK", "class")}>Contact</a>
      </div>
      <div class="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center astro-5BLMO7YK">
        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white astro-5BLMO7YK" style="width: 45px; height: 45px;">
          <i class="fa fa-phone-alt text-primary astro-5BLMO7YK"></i>
        </div>
        <div class="ms-3 astro-5BLMO7YK">
          <p class="mb-1 text-white astro-5BLMO7YK">Have Questions ?</p>
          <h5 class="m-0 text-white astro-5BLMO7YK">
            <a class="text-white astro-5BLMO7YK" rel="tel" href="tel:19803910979">+1 980-391-0979</a>
          </h5>
        </div>
      </div>
    </div>
  </nav>
</div>
<!-- Navbar End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Navbar.astro", void 0);

const $$Astro$2 = createAstro();
const $$Topbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Topbar;
  return renderTemplate`<!-- Topbar Start -->${maybeRenderHead()}<div class="container-fluid bg-light text-black d-none d-lg-block">
  <div class="row align-items-center top-bar">
    <div class="col-lg-3 col-md-12 text-center text-lg-start">
      <a href="" class="navbar-brand m-0 p-0">
        <img class="pt-2" width="380px" src="/assets/img/dark-logo.webp" alt="">
      </a>
    </div>
    <div class="col-lg-9 col-md-12 text-end">
      <div class="h-100 d-inline-flex align-items-center me-4">
        <i class="fa fa-map-marker-alt text-primary me-2"></i>
        <p class="m-0" style="font-size:16px; font-weight:600 ;">
          1515 Spruce Lane Denver, NC 28037
        </p>
      </div>
      <div class="h-100 d-inline-flex align-items-center me-4">
        <i class="fa fa-envelope-open text-primary me-2"></i>
        <p class="m-0" style="font-size:16px; font-weight:600 ;">
          <a href="mailto:frankie@prestigeworldwidelimos.com">Email</a>
        </p>
      </div>
      <div class="h-100 d-inline-flex align-items-center">
        <a class="btn btn-sm-square bg-white text-primary me-1" href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="btn btn-sm-square bg-white text-primary me-1" href="#">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="btn btn-sm-square bg-white text-primary me-1" href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a class="btn btn-sm-square bg-white text-primary me-0" href="#">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>
</div>
<!-- Topbar End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Topbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  dotenv.config();
  const { pageTitle, pageDescription, pageKeywords } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>PWWL | ', '</title>\n    <meta content="width=device-width, initial-scale=1.0" name="viewport">\n    <meta', ' name="keywords">\n    <meta', ' name="description">\n\n    <!-- Favicon -->\n    <link href="/favicon.svg" rel="icon">\n\n    <!-- Google Web Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet">\n\n    <!-- Icon Font Stylesheet -->\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">\n\n    <!-- Libraries Stylesheet -->\n    <link href="/assets/lib/animate/animate.min.css" rel="stylesheet">\n    <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">\n    <link href="/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet">\n\n    <!-- Customized Bootstrap Stylesheet -->\n    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">\n\n    <!-- Template Stylesheet -->\n    <link href="/assets/css/style.css" rel="stylesheet">\n  ', "</head>\n\n  <body>\n    ", "\n    ", "\n    ", "\n\n    ", '\n\n    <script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"><\/script>\n    <script src="/assets/lib/wow/wow.min.js"><\/script>\n    <script src="/assets/lib/easing/easing.min.js"><\/script>\n    <script src="/assets/lib/waypoints/waypoints.min.js"><\/script>\n    <script src="/assets/lib/counterup/counterup.min.js"><\/script>\n    <script src="/assets/lib/owlcarousel/owl.carousel.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment-timezone.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async><\/script>\n    <!-- Template Javascript -->\n    <script src="/assets/js/main.js"><\/script>\n  </body>\n</html>'])), pageTitle, addAttribute(pageKeywords, "content"), addAttribute(pageDescription, "content"), renderHead(), renderComponent($$result, "Topbar", $$Topbar, {}), renderComponent($$result, "Navbar", $$Navbar, { "title": pageTitle }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": "Error Page" }, { "default": ($$result2) => renderTemplate`
  

  ${maybeRenderHead()}<div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
          <h1 class="display-1">404</h1>
          <h1 class="mb-4">Page Not Found</h1>
          <p class="mb-4">
            We’re sorry, the page you have looked for does not exist in our
            website! Maybe go to our home page or try to use a search?
          </p>
          <a class="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
        </div>
      </div>
    </div>
  </div>
  
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/404.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Footer as $, _404 as _, $$Navbar as a, $$Topbar as b };
