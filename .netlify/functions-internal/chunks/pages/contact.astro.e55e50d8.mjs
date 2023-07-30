import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead, _ as __astro_tag_component__ } from '../astro.63d2aef5.mjs';
import 'html-escaper';
/* empty css                             */import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const $$Astro$6 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
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
          <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email">
          <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
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

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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

const $$Astro$4 = createAstro();
const $$Topbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Topbar;
  return renderTemplate`<!-- Topbar Start -->${maybeRenderHead()}<div class="container-fluid bg-light text-black d-none d-lg-block">
  <div class="row align-items-center top-bar">
    <div class="col-lg-3 col-md-12 text-center text-lg-start">
      <a href="" class="navbar-brand m-0 p-0">
        <img class="pt-2" width="380px" src="/assets/img/dark-logo.png" alt="">
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
        <p class="m-0" style="font-size:16px; font-weight:600 ;">Email</p>
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
const $$Astro$3 = createAstro();
const $$LandingLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LandingLayout;
  const { pageTitle, pageDescription, pageKeywords } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <title>PWWL | ', '</title>\n    <meta content="width=device-width, initial-scale=1.0" name="viewport">\n    <meta', ' name="keywords">\n    <meta', ' name="description">\n\n    <!-- Favicon -->\n    <link href="/favicon.svg" rel="icon">\n\n    <!-- Google Web Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet">\n\n    <!-- Icon Font Stylesheet -->\n    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">\n    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">\n\n    <!-- Libraries Stylesheet -->\n    <link href="/assets/lib/animate/animate.min.css" rel="stylesheet">\n    <link href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">\n    <link href="/assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet">\n\n    <!-- Customized Bootstrap Stylesheet -->\n    <link href="/assets/css/bootstrap.min.css" rel="stylesheet">\n\n    <!-- Template Stylesheet -->\n    <link href="/assets/css/style.css" rel="stylesheet">\n  ', "</head>\n\n  <body>\n    ", "\n    ", "\n    ", "\n\n    ", '\n\n    <script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"><\/script>\n    <script src="/assets/lib/wow/wow.min.js"><\/script>\n    <script src="/assets/lib/easing/easing.min.js"><\/script>\n    <script src="/assets/lib/waypoints/waypoints.min.js"><\/script>\n    <script src="/assets/lib/counterup/counterup.min.js"><\/script>\n    <script src="/assets/lib/owlcarousel/owl.carousel.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/moment-timezone.min.js"><\/script>\n    <script src="/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"><\/script>\n    <script src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js" integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D" crossorigin="anonymous" async><\/script>\n    <!-- Template Javascript -->\n    <script src="/assets/js/main.js"><\/script>\n  </body>\n</html>'])), pageTitle, addAttribute(pageKeywords, "content"), addAttribute(pageDescription, "content"), renderHead(), renderComponent($$result, "Topbar", $$Topbar, {}), renderComponent($$result, "Navbar", $$Navbar, { "title": pageTitle }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/layouts/LandingLayout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Spinner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Spinner;
  return renderTemplate`<!-- Spinner Start -->${maybeRenderHead()}<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
  <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
<!-- Spinner End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Spinner.astro", void 0);

const serviceId = "service_wlsr15g";
const templateId = "template_fjy2afc";
const publicKey = "OttUrdHzbARGwXV4y";
const ContactForm = () => {
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");
  const [customer_phone, setCustomerPhone] = useState("");
  const [service_requested, setServiceRequested] = useState("");
  const [service_date, setServiceDate] = useState("");
  const [service_time, setServiceTime] = useState("");
  const [customer_message, setCustomerMessage] = useState("");
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
      className: "col-lg-12 col-sm-6",
      children: [successMessageStatus === "d-block" ? /* @__PURE__ */ jsx("div", {
        class: "alert alert-success  text-center",
        role: "alert",
        children: "Success, your message was sent, we will be in touch!"
      }) : /* @__PURE__ */ jsx("div", {}), errorMessageStatus === "d-block" ? /* @__PURE__ */ jsx("div", {
        class: "alert alert-danger text-center",
        role: "alert",
        children: "There was a problem, your message was not sent. Please try again later."
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
            name: "customer_name",
            type: "text",
            className: "form-control border-1",
            placeholder: "Your Name",
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setCustomerName(e.target.value);
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("input", {
            name: "customer_email",
            type: "email",
            className: "form-control border-1",
            placeholder: "Your Email",
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setCustomerEmail(e.target.value);
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("div", {
            className: "phone",
            id: "customerPhone",
            "data-target-input": "nearest",
            children: /* @__PURE__ */ jsx("input", {
              name: "customer_phone",
              type: "text",
              className: "form-control border-1",
              placeholder: "Phone Number",
              "data-target": "#customerPhone",
              style: {
                height: "55px"
              },
              onChange: (e) => {
                setCustomerPhone(e.target.value);
              }
            })
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsxs("select", {
            id: "serviceRequested",
            name: "service_requested",
            className: "form-select border-1",
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setServiceRequested(e.target.value);
            },
            defaultValue: "Select A Service",
            children: [/* @__PURE__ */ jsx("option", {
              children: "Select A Service"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Wedding",
              children: "Wedding Limo"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Bachalore",
              children: "Bachalore/Bachalorette Party"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Prom",
              children: "Prom Night Limo"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Wine Tour",
              children: "Wine Tour Limo"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Party Bus",
              children: "Party Bus"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceRequested",
              value: "Sprinter Van",
              children: "Sprinter Van Limo"
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("div", {
            className: "date",
            id: "serviceDate",
            "data-target-input": "nearest",
            children: /* @__PURE__ */ jsx("input", {
              name: "service_date",
              type: "text",
              className: "form-control border-1 datetimepicker-input",
              placeholder: "Service Date",
              "data-target": "#serviceDate",
              "data-toggle": "datetimepicker",
              style: {
                height: "55px"
              },
              onChange: (e) => {
                setServiceDate(e.target.value);
              }
            })
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          id: "serviceTime",
          "data-target-input": "nearest",
          children: /* @__PURE__ */ jsxs("select", {
            name: "service_time",
            className: "form-select border-1",
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setServiceTime(e.target.value);
            },
            defaultValue: "Service Time",
            children: [/* @__PURE__ */ jsx("option", {
              children: "Service Time"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "8:00AM",
              children: "08:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "9:00AM",
              children: "09:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "10:00AM",
              children: "10:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "11:00AM",
              children: "11:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "12:00PM",
              children: "12:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "1:00PM",
              children: "01:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "2:00PM",
              children: "02:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "3:00PM",
              children: "03:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "4:00PM",
              children: "04:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "5:00PM",
              children: "05:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "6:00PM",
              children: "06:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "7:00PM",
              children: "07:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "8:00PM",
              children: "08:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "9:00PM",
              children: "09:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "10:00PM",
              children: "10:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "11:00PM",
              children: "11:00 PM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "12:00AM",
              children: "12:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "1:00AM",
              children: "01:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "2:00AM",
              children: "02:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "3:00AM",
              children: "03:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "4:00AM",
              children: "04:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "5:00AM",
              children: "05:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "6:00AM",
              children: "06:00 AM"
            }), /* @__PURE__ */ jsx("option", {
              "data-target": "#serviceTime",
              value: "7:00AM",
              children: "07:00 AM"
            })]
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12",
          children: /* @__PURE__ */ jsx("textarea", {
            id: "customerMessage",
            "data-target": "#customerMessage",
            name: "customer_message",
            className: "form-control border-1",
            style: {
              height: "200px"
            },
            placeholder: "Please enter your starting address, destination address, and any special instructions or requests",
            onChange: (e) => {
              setCustomerMessage(e.target.value);
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12",
          children: /* @__PURE__ */ jsx("button", {
            className: "btn btn-primary w-100 py-3",
            type: "submit",
            children: "Get An Instant Quote"
          })
        })]
      })
    })]
  });
};
__astro_tag_component__(ContactForm, "@astrojs/react");
__astro_tag_component__(ContactForm, "@astrojs/react");

const $$Astro$1 = createAstro();
const $$ToTop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ToTop;
  return renderTemplate`<!-- Back to Top -->${maybeRenderHead()}<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-0 back-to-top"><i class="bi bi-arrow-up"></i></a>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ToTop.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Contact" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}

  
  
  
  ${maybeRenderHead()}<div style="display:flex;position:relative;width:100vw;hight:400px;margin-bottom:80px">
    <a style="cursor:pointer" data-url="/maps/place/1515+Spruce+Ln,+Denver,+NC+28037/data=!4m2!3m1!1s0x8856b1f5c0a69e85:0x7efcb7153ecd8fd?sa=X&ved=2ahUKEwi654XO8raAAxWukIkEHbEEAdkQ8gF6BAgTEAA" href="#" jsaction="trigger.Ez7VMc" tabindex="0" data-ved="2ahUKEwi654XO8raAAxWukIkEHbEEAdkQ8gF6BAgYEAI"><img id="pimg_1" src="https://www.google.com/maps/vt/data=2jM22eYoIeVAWSs9acvKcWy2zHNHWp8LUiQIeh8Sej0UYN-mI8rPaplfIlTBHrzkmBfy2QQgjHmIPTPgvcWCI_f1mVXzACVdFk9b1BTJGYH2x3LIxeFFMR91Dcj9dBLS--Jqngn-dES8_nNiGXz2SAiW8WNXILrwkR-GIEaBRpMhvZnFVBcfNt6wDfe3UWlyAaF-zagoKRuHYU_6JhY0LRoklhHZIk1GxgOkengyPsFdPobgmGsCkEO0cODgMVOsVQy1NEOU8817jjKpWxcwK22Y-GkVHBJleHZtFWhJ_KYsZsBhZVxmaKWETTPiM8qE9QqjwlzYk5yZZD-rsjylRBIexR-eUajay21X9hJvz3oyBLheypo" class="YQ4gaf" height="400" width="600" alt="" data-atf="1" data-frt="0" style="object-fit:cover; width:100vw;">
    </a>
  </div>

  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-6">
        <h3>Address</h3>
        <address style="display:flex; flex-direction:column;">
          <span>1515 Spruce Lane</span>
          <span>Denver, NC 28037</span>
        </address>
        <h3>Phone</h3>
        <p>+1 980 391 0979</p>
      </div>
      <div class="col-lg-6">
        <h3>Contact us</h3>
        ${renderComponent($$result2, "ContactForm", ContactForm, {})}
      </div>
    </div>
  </div>

  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/contact.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Spinner as $, ContactForm as C, $$ToTop as a, $$LandingLayout as b, contact as c };
