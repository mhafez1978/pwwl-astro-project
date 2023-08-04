import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, _ as __astro_tag_component__, b as renderComponent } from '../astro.a70e49fb.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.6e494818.mjs';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';

const $$Astro$1 = createAstro();
const $$Spinner = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Spinner;
  return renderTemplate`<!-- Spinner Start -->${maybeRenderHead()}<div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
  <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">LOADING...</span>
  </div>
</div>
<!-- Spinner End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Spinner.astro", void 0);

const serviceId = "service_7884kpr";
const templateId = "template_n3mjdrr";
const publicKey = "zHm8hAEo7aMdHxB9X";
const ContactForm = () => {
  const [customer_name, setCustomerName] = useState("");
  const [customer_email, setCustomerEmail] = useState("");
  const [customer_phone, setCustomerPhone] = useState("");
  const [service_requested, setServiceRequested] = useState("");
  const [service_date, setServiceDate] = useState("");
  const [service_time, setServiceTime] = useState("");
  const [customer_message, setCustomerMessage] = useState("");
  const [passengerNumber, setPassengerNumber] = useState("");
  const [luggageNumber, setLuggageNumber] = useState("");
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
            required: true,
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
            required: true,
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
              required: true,
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
            required: true,
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
              required: true,
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
            required: true,
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
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("input", {
            name: "passengerNumber",
            type: "text",
            className: "form-control border-1",
            placeholder: "Number of passengers",
            defaultValue: 1,
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setPassengerNumber(e.target.value);
            }
          })
        }), /* @__PURE__ */ jsx("div", {
          className: "col-12 col-sm-6",
          children: /* @__PURE__ */ jsx("input", {
            name: "luggageNumber",
            type: "text",
            className: "form-control border-1",
            placeholder: "Number of Luggage",
            defaultValue: 0,
            style: {
              height: "55px"
            },
            onChange: (e) => {
              setLuggageNumber(e.target.value);
            }
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

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Contact", "pageDescription": "contact us page", "pageKeywords": "Prestige Worldwide Limos Contact Page" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}

  
  ${maybeRenderHead()}<div class="container-fluid page-header mb-5 py-5">
    <div class="container">
      <h1 class="display-3 text-white mb-3 animated slideInDown">Contact</h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol class="breadcrumb text-uppercase">
          <li class="breadcrumb-item">
            <a class="text-white" href="/">Home</a>
          </li>
          <li class="breadcrumb-item text-white active" aria-current="page">
            Contact
          </li>
        </ol>
      </nav>
    </div>
  </div>
  
  <div style="display:flex;position:relative;width:100vw;hight:400px;margin-bottom:80px;top:-60px">
    <a style="cursor:pointer" data-url="/maps/place/1515+Spruce+Ln,+Denver,+NC+28037/data=!4m2!3m1!1s0x8856b1f5c0a69e85:0x7efcb7153ecd8fd?sa=X&ved=2ahUKEwi654XO8raAAxWukIkEHbEEAdkQ8gF6BAgTEAA" href="#" tabindex="0" data-ved="2ahUKEwi654XO8raAAxWukIkEHbEEAdkQ8gF6BAgYEAI"><img id="pimg_1" src="https://www.google.com/maps/vt/data=2jM22eYoIeVAWSs9acvKcWy2zHNHWp8LUiQIeh8Sej0UYN-mI8rPaplfIlTBHrzkmBfy2QQgjHmIPTPgvcWCI_f1mVXzACVdFk9b1BTJGYH2x3LIxeFFMR91Dcj9dBLS--Jqngn-dES8_nNiGXz2SAiW8WNXILrwkR-GIEaBRpMhvZnFVBcfNt6wDfe3UWlyAaF-zagoKRuHYU_6JhY0LRoklhHZIk1GxgOkengyPsFdPobgmGsCkEO0cODgMVOsVQy1NEOU8817jjKpWxcwK22Y-GkVHBJleHZtFWhJ_KYsZsBhZVxmaKWETTPiM8qE9QqjwlzYk5yZZD-rsjylRBIexR-eUajay21X9hJvz3oyBLheypo" class="YQ4gaf" height="300" width="600" alt="" data-atf="1" data-frt="0" style="object-fit:cover; width:100vw;">
    </a>
  </div>

  <div class="container mx-auto">
    <div class="row">
      <div class="col-lg-6" style="display:flex; flex-direction:column; justify-content:start; align-items: center;">
        <img src="/assets/img/pwwl-dark-logo.webp" alt="logo" width="200" style="margin-bottom:40px;">
        <div style="margin-left:30px;">
          <h3>Address</h3>
          <address style="display:flex; flex-direction:column;">
            <span>1515 Spruce Lane</span>
            <span>Denver, NC 28037</span>
          </address>
          <h3>Phone</h3>
          <p>+1 980 391 0979</p>
        </div>
      </div>
      <div class="col-lg-6">
        <h3>Contact us</h3>
        <br>
        ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ContactForrm", "client:component-export": "default" })}
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

export { $$Spinner as $, ContactForm as C, contact as c };
