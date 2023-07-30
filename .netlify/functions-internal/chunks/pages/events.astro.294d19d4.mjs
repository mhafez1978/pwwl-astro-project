import { _ as __astro_tag_component__, c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.63d2aef5.mjs';
import 'html-escaper';
import { $ as $$Spinner, a as $$ToTop, b as $$LandingLayout } from './contact.astro.5cf89ad0.mjs';
import { useState, useEffect } from 'react';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
/* empty css                            */import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'string-width';
/* empty css                             */
function Spinner() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      id: "spinner",
      className: "show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center",
      children: /* @__PURE__ */ jsx("div", {
        class: "spinner-border text-primary",
        style: {
          width: "3rem",
          height: "3rem"
        },
        role: "status",
        children: /* @__PURE__ */ jsx("span", {
          className: "sr-only",
          children: "Loading..."
        })
      })
    })
  });
}
__astro_tag_component__(Spinner, "@astrojs/react");

const EventList = () => {
  const [geoEvents, setGeoEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 9;
  useEffect(() => {
    const fetchEventsGeoIp = async () => {
      try {
        const response2 = await fetch(`https://api.seatgeek.com/2/events?geoip=true&range=140mi&client_id=MzUxNTA5MTl8MTY5MDI1MzI4MS44NTI1NDM4&page=${currentPage}`);
        const data = await response2.json();
        setGeoEvents(data.events);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };
    fetchEventsGeoIp();
  }, [currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = geoEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const formatDate = (datetime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    };
    return new Date(datetime).toLocaleString("en-US", options);
  };
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("div", {
      style: {
        width: "70vw",
        margin: "0 auto"
      },
      children: currentEvents ? /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("div", {
          className: "row d-flex justify-content-center",
          children: currentEvents.map((each) => /* @__PURE__ */ jsxs("div", {
            className: "card",
            style: {
              width: "18rem",
              minHeight: "400px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              margin: "10px"
            },
            children: [/* @__PURE__ */ jsx("img", {
              className: "card-img-top",
              src: each.performers[0].image,
              alt: each.performers[0].short_name
            }), /* @__PURE__ */ jsxs("div", {
              className: "card-body",
              children: [/* @__PURE__ */ jsxs("h6", {
                style: {
                  textTransform: "capitalize"
                },
                children: [/* @__PURE__ */ jsxs("span", {
                  style: {
                    textTransform: "capitalize",
                    marginRight: "10px"
                  },
                  children: [each.performers[0].name, " -"]
                }), each.taxonomies[0].name]
              }), /* @__PURE__ */ jsxs("p", {
                style: {
                  fontSize: "14px",
                  display: "flex",
                  flexDirection: "column",
                  color: "#222"
                },
                children: [/* @__PURE__ */ jsx("span", {
                  children: formatDate(each.datetime_local)
                }), /* @__PURE__ */ jsx("span", {
                  children: each.venue.address
                }), /* @__PURE__ */ jsx("span", {
                  children: each.venue.extended_address
                }), /* @__PURE__ */ jsx("span", {
                  style: {
                    fontSize: "10px",
                    marginBottom: "20px"
                  },
                  children: each.venue.slug
                }), /* @__PURE__ */ jsx("a", {
                  className: "btn btn-primary",
                  href: each.url,
                  target: "_blank",
                  children: "Buy Tickets"
                })]
              })]
            })]
          }, each.id))
        }), /* @__PURE__ */ jsx("div", {
          className: "container",
          style: {
            marginTop: "45px"
          },
          children: /* @__PURE__ */ jsx("div", {
            className: "row",
            children: /* @__PURE__ */ jsx("div", {
              className: "col-lg-12 d-flex justify-content-center",
              children: /* @__PURE__ */ jsxs("ul", {
                className: "pagination",
                children: [/* @__PURE__ */ jsx("li", {
                  className: `page-item ${currentPage === 1 ? "disabled" : ""}`,
                  children: /* @__PURE__ */ jsx("button", {
                    className: "page-link",
                    onClick: () => handlePageChange(currentPage - 1),
                    children: "Previous"
                  })
                }), Array.from({
                  length: Math.ceil(geoEvents.length / eventsPerPage)
                }).map((_, index) => /* @__PURE__ */ jsx("li", {
                  className: `page-item ${currentPage === index + 1 ? "active" : ""}`,
                  children: /* @__PURE__ */ jsx("button", {
                    className: "page-link",
                    onClick: () => handlePageChange(index + 1),
                    children: index + 1
                  })
                }, index + 1)), /* @__PURE__ */ jsx("li", {
                  className: `page-item ${currentPage === Math.ceil(geoEvents.length / eventsPerPage) ? "disabled" : ""}`,
                  children: /* @__PURE__ */ jsx("button", {
                    className: "page-link",
                    onClick: () => handlePageChange(currentPage + 1),
                    children: "Next"
                  })
                })]
              })
            })
          })
        })]
      }) : /* @__PURE__ */ jsx("center", {
        children: /* @__PURE__ */ jsx(Spinner, {})
      })
    })
  });
};
__astro_tag_component__(EventList, "@astrojs/react");

const $$Astro = createAstro();
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Charlotte Events", "pageDescription": "charlotte events", "pageKeywords": "charlotte events", "class": "astro-RO7PGS3H" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, { "class": "astro-RO7PGS3H" })}
  ${maybeRenderHead()}<div class="container-fluid astro-RO7PGS3H" style="margin-top:100px; min-height:100vh;z-index:-1;">
    <div style="width:86vw;margin:0 auto;" class="astro-RO7PGS3H">
      <div style="display:flex;flex-direction:column;justify-content: center;align-items: center; margin-bottom: 40px;" class="astro-RO7PGS3H">
        <h1 style="color:#FF4917" class="astro-RO7PGS3H">Your Local Events</h1>
        <p style="font-size: 14px;" class="astro-RO7PGS3H">
          Not sure where to go to, below we curated a list of all local events
          around you.
        </p>
        <nav aria-label="breadcrumb animated slideInDown" class="astro-RO7PGS3H">
          <ol class="breadcrumb text-uppercase astro-RO7PGS3H">
            <li class="breadcrumb-item astro-RO7PGS3H">
              <a class="text-black astro-RO7PGS3H" href="/">Home</a>
            </li>
            <li class="breadcrumb-item text-black active astro-RO7PGS3H" aria-current="page">
              Events
            </li>
          </ol>
        </nav>
      </div>
      <!-- <CharlotteEventsRadius client:load /> -->
      ${renderComponent($$result2, "EventsPagination", EventList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/EventsPagination", "client:component-export": "default", "class": "astro-RO7PGS3H" })}
    </div>
  </div>
  ${renderComponent($$result2, "ToTop", $$ToTop, { "class": "astro-RO7PGS3H" })}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/events.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/events.astro";
const $$url = "/events";

export { $$Events as default, $$file as file, $$url as url };
