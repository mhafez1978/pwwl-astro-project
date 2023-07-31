import 'kleur/colors';
import 'node:fs/promises';
import 'node:path';
import 'node:url';
import 'http-cache-semantics';
import 'node:os';
import 'image-size';
import 'magic-string';
import mime from 'mime';
import 'node:stream';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, b as renderComponent } from '../astro.9e971bc7.mjs';
import { $ as $$ToTop, a as $$LandingLayout } from './_id_.astro.351f7598.mjs';
import { C as ContactForm, $ as $$Spinner } from './contact.astro.0217ea34.mjs';
import { i as isRemoteImage, a as isSSRService, p as parseAspectRatio, e as extname } from './endpoint.js.fa1a8680.mjs';
/* empty css                           *//* empty css                           */
function resolveSize(transform) {
  if (transform.width && transform.height) {
    return transform;
  }
  if (!transform.width && !transform.height) {
    throw new Error(`"width" and "height" cannot both be undefined`);
  }
  if (!transform.aspectRatio) {
    throw new Error(
      `"aspectRatio" must be included if only "${transform.width ? "width" : "height"}" is provided`
    );
  }
  let aspectRatio;
  if (typeof transform.aspectRatio === "number") {
    aspectRatio = transform.aspectRatio;
  } else {
    const [width, height] = transform.aspectRatio.split(":");
    aspectRatio = Number.parseInt(width) / Number.parseInt(height);
  }
  if (transform.width) {
    return {
      ...transform,
      width: transform.width,
      height: Math.round(transform.width / aspectRatio)
    };
  } else if (transform.height) {
    return {
      ...transform,
      width: Math.round(transform.height * aspectRatio),
      height: transform.height
    };
  }
  return transform;
}
async function resolveTransform(input) {
  if (typeof input.src === "string") {
    return resolveSize(input);
  }
  const metadata = "then" in input.src ? (await input.src).default : input.src;
  let { width, height, aspectRatio, background, format = metadata.format, ...rest } = input;
  if (!width && !height) {
    width = metadata.width;
    height = metadata.height;
  } else if (width) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    height = height || Math.round(width / ratio);
  } else if (height) {
    let ratio = parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
    width = width || Math.round(height * ratio);
  }
  return {
    ...rest,
    src: metadata.src,
    width,
    height,
    aspectRatio,
    format,
    background
  };
}
async function getImage(transform) {
  var _a, _b, _c;
  if (!transform.src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  let loader = (_a = globalThis.astroImage) == null ? void 0 : _a.loader;
  if (!loader) {
    const { default: mod } = await import('./endpoint.js.fa1a8680.mjs').then(n => n.s).catch(() => {
      throw new Error(
        "[@astrojs/image] Builtin image loader not found. (Did you remember to add the integration to your Astro config?)"
      );
    });
    loader = mod;
    globalThis.astroImage = globalThis.astroImage || {};
    globalThis.astroImage.loader = loader;
  }
  const resolved = await resolveTransform(transform);
  const attributes = await loader.getImageAttributes(resolved);
  const isDev = (_b = (Object.assign({"PUBLIC_SERVICEID":"service_wlsr15g","PUBLIC_TEMPLATEID":"template_fjy2afc","PUBLIC_PUBLICKEY":"OttUrdHzbARGwXV4y","PUBLIC_PRIVATETOKEN":"LGSRTA7FGU6VH4LWKXGA","PUBLIC_SERVICEID2":"service_7884kpr","PUBLIC_TEMPLATEID2":"template_mp0fcys","PUBLIC_PUBLICKEY2":"zHm8hAEo7aMdHxB9X","PUBLIC_PRIVATETOKEN2":"LnmwXiXaqQnSs0Z-DVsYJ","PUBLIC_TEMPLATEID3":"template_n3mjdrr","BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":true,"SITE":undefined,"ASSETS_PREFIX":undefined},{_:process.env._,SSR:true,}))) == null ? void 0 : _b.DEV;
  const isLocalImage = !isRemoteImage(resolved.src);
  const _loader = isDev && isLocalImage ? globalThis.astroImage.defaultLoader : loader;
  if (!_loader) {
    throw new Error("@astrojs/image: loader not found!");
  }
  const { searchParams } = isSSRService(_loader) ? _loader.serializeTransform(resolved) : globalThis.astroImage.defaultLoader.serializeTransform(resolved);
  const imgSrc = !isLocalImage && resolved.src.startsWith("//") ? `https:${resolved.src}` : resolved.src;
  let src;
  if (/^[\/\\]?@astroimage/.test(imgSrc)) {
    src = `${imgSrc}?${searchParams.toString()}`;
  } else {
    searchParams.set("href", imgSrc);
    src = `/_image?${searchParams.toString()}`;
  }
  if ((_c = globalThis.astroImage) == null ? void 0 : _c.addStaticImage) {
    src = globalThis.astroImage.addStaticImage(resolved);
  }
  return {
    ...attributes,
    src
  };
}

async function resolveAspectRatio({ src, aspectRatio }) {
  if (typeof src === "string") {
    return parseAspectRatio(aspectRatio);
  } else {
    const metadata = "then" in src ? (await src).default : src;
    return parseAspectRatio(aspectRatio) || metadata.width / metadata.height;
  }
}
async function resolveFormats({ src, formats }) {
  const unique = new Set(formats);
  if (typeof src === "string") {
    unique.add(extname(src).replace(".", ""));
  } else {
    const metadata = "then" in src ? (await src).default : src;
    unique.add(extname(metadata.src).replace(".", ""));
  }
  return Array.from(unique).filter(Boolean);
}
async function getPicture(params) {
  const { src, alt, widths, fit, position, background } = params;
  if (!src) {
    throw new Error("[@astrojs/image] `src` is required");
  }
  if (!widths || !Array.isArray(widths)) {
    throw new Error("[@astrojs/image] at least one `width` is required. ex: `widths={[100]}`");
  }
  const aspectRatio = await resolveAspectRatio(params);
  if (!aspectRatio) {
    throw new Error("`aspectRatio` must be provided for remote images");
  }
  const allFormats = await resolveFormats(params);
  const lastFormat = allFormats[allFormats.length - 1];
  const maxWidth = Math.max(...widths);
  let image;
  async function getSource(format) {
    const imgs = await Promise.all(
      widths.map(async (width) => {
        var _a;
        const img = await getImage({
          src,
          alt,
          format,
          width,
          fit,
          position,
          background,
          aspectRatio
        });
        if (format === lastFormat && width === maxWidth) {
          image = img;
        }
        return `${(_a = img.src) == null ? void 0 : _a.replaceAll(" ", encodeURI)} ${width}w`;
      })
    );
    return {
      type: mime.getType(format) || format,
      srcset: imgs.join(",")
    };
  }
  const sources = await Promise.all(allFormats.map((format) => getSource(format)));
  return {
    sources,
    // @ts-expect-error image will always be defined
    image
  };
}

const $$Astro$8 = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Image;
  const { loading = "lazy", decoding = "async", ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    warnForMissingAlt();
  }
  const attrs = await getImage(props);
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(attrs)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/node_modules/@astrojs/image/components/Image.astro", void 0);

const $$Astro$7 = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Picture;
  const {
    src,
    alt,
    sizes,
    widths,
    aspectRatio,
    fit,
    background,
    position,
    formats = ["avif", "webp"],
    loading = "lazy",
    decoding = "async",
    ...attrs
  } = Astro2.props;
  if (alt === void 0 || alt === null) {
    warnForMissingAlt();
  }
  const { image, sources } = await getPicture({
    src,
    widths,
    formats,
    aspectRatio,
    fit,
    background,
    position,
    alt
  });
  delete image.width;
  delete image.height;
  return renderTemplate`${maybeRenderHead()}<picture>
	${sources.map((attrs2) => renderTemplate`<source${spreadAttributes(attrs2)}${addAttribute(sizes, "sizes")}>`)}
	<img${spreadAttributes(image)}${addAttribute(loading, "loading")}${addAttribute(decoding, "decoding")}${spreadAttributes(attrs)}>
</picture>`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/node_modules/@astrojs/image/components/Picture.astro", void 0);

let altWarningShown = false;
function warnForMissingAlt() {
  if (altWarningShown === true) {
    return;
  }
  altWarningShown = true;
  console.warn(`
[@astrojs/image] "alt" text was not provided for an <Image> or <Picture> component.

A future release of @astrojs/image may throw a build error when "alt" text is missing.

The "alt" attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility. Set to an empty string (alt="") if the image is not a key part of the content (it's decoration or a tracking pixel).
`);
}

const $$Astro$6 = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`<!-- Carousel Start -->${maybeRenderHead()}<div class="container-fluid p-0 mb-5 astro-WFE7XCNO">
  <div class="owl-carousel header-carousel position-relative astro-WFE7XCNO">
    <div class="owl-carousel-item position-relative astro-WFE7XCNO" style="height:85vh">
      ${renderComponent($$result, "Picture", $$Picture, { "src": "https://pinnaclesedan.com/main/wp-content/uploads/2014/09/wedding-limo.jpg", "widths": [200, 400, 800], "sizes": "(max-width: 800px) 100vw, 800px", "alt": "descriptive text", "aspectRatio": "16:9", "class": "astro-WFE7XCNO" })}
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center astro-WFE7XCNO" style="background: rgba(0, 0, 0, 0.4)">
        <div class="container astro-WFE7XCNO">
          <div class="row justify-content-start astro-WFE7XCNO">
            <div class="col-10 col-lg-8 astro-WFE7XCNO">
              <h5 class="text-white mb-3 animated slideInDown astro-WFE7XCNO">
                Luxury Limo Near Charlotte NC.
              </h5>
              <h1 class="display-3 text-white animated slideInDown mb-4 astro-WFE7XCNO">
                Searching For A Flawless Wedding Limo Service ?
              </h1>
              <p class="fs-6 fw-small text-white mb-4 pb-2 astro-WFE7XCNO">
                Make your special day even more extraordinary with our luxurious
                wedding limo services. Arrive in style, sophistication, and
                comfort to create unforgettable memories. Book now and let us be
                a part of your perfect wedding day.
              </p>
              <a href="/latest-news" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft astro-WFE7XCNO">Read More</a>
              <a href="/reserve" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight astro-WFE7XCNO">Get A Free Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="owl-carousel-item position-relative astro-WFE7XCNO" style="height:85vh">
      ${renderComponent($$result, "Picture", $$Picture, { "src": "/assets/img/white-diamond-party-bus.webp", "widths": [200, 400, 800], "sizes": "(max-width: 800px) 100vw, 800px", "alt": "descriptive text", "aspectRatio": "16:9", "class": "astro-WFE7XCNO" })}
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center astro-WFE7XCNO" style="background: rgba(0, 0, 0, 0.4)">
        <div class="container astro-WFE7XCNO">
          <div class="row justify-content-start astro-WFE7XCNO">
            <div class="col-10 col-lg-8 astro-WFE7XCNO">
              <h5 class="text-white mb-3 animated slideInDown astro-WFE7XCNO">
                Charlotte NC Party Like a Rock Star.
              </h5>
              <h1 class="display-3 text-white animated slideInDown mb-4 astro-WFE7XCNO">
                Charlotte Summer Extravaganza! Party Bus
              </h1>
              <p class="fs-6 fw-small text-white mb-4 pb-2 astro-WFE7XCNO">
                Wanna have a great time, gather your friends this summer for a
                party on wheels! Our party buses are equipped with a mix of
                everything you need for a fantastic time. Enjoy a night to
                remember while our experienced driver drive you around the city
                reserve your party bus today.
              </p>
              <a href="/latest-news" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft astro-WFE7XCNO">More Details</a>
              <a href="/reserve" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight astro-WFE7XCNO">Get A Free Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="owl-carousel-item position-relative astro-WFE7XCNO" style="height:85vh">
      ${renderComponent($$result, "Picture", $$Picture, { "src": "/assets/img/space-theme-party-bus.webp", "widths": [200, 400, 800], "sizes": "(max-width: 800px) 100vw, 800px", "alt": "descriptive text", "aspectRatio": "16:9", "class": "astro-WFE7XCNO" })}
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center astro-WFE7XCNO" style="background: rgba(0, 0, 0, 0.4)">
        <div class="container astro-WFE7XCNO">
          <div class="row justify-content-start astro-WFE7XCNO">
            <div class="col-10 col-lg-8 astro-WFE7XCNO">
              <h5 class="text-white mb-3 animated slideInDown astro-WFE7XCNO">
                Charlotte NC Premiere Limo Service
              </h5>
              <h1 class="display-3 text-white animated slideInDown mb-4 astro-WFE7XCNO">
                Bachalore &amp; Bachalorette Party Limo Service
              </h1>
              <p class="fs-6 fw-small text-white mb-4 pb-2 astro-WFE7XCNO">
                Celebrate your last days of freedom in style with our exclusive
                bachelorette limo service. Gather your friends, sip champagne,
                and enjoy a safe, glamorous night on the town. Don't miss out on
                an unforgettable experience – book now.
              </p>
              <a href="/latest-news" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft astro-WFE7XCNO">Read More</a>
              <a href="/reserve" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight astro-WFE7XCNO">Get A Free Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="owl-carousel-item position-relative astro-WFE7XCNO" style="height:85vh">
      ${renderComponent($$result, "Picture", $$Picture, { "src": "https://lifestyle-limo.com/wp-content/uploads/2020/02/13131371_241915786197125_177412017485441316_o.jpg", "widths": [200, 400, 800], "sizes": "(max-width: 800px) 100vw, 800px", "alt": "descriptive text", "aspectRatio": "16:9", "class": "astro-WFE7XCNO" })}
      <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center astro-WFE7XCNO" style="background: rgba(0, 0, 0, 0.4)">
        <div class="container astro-WFE7XCNO">
          <div class="row justify-content-start astro-WFE7XCNO">
            <div class="col-10 col-lg-8 astro-WFE7XCNO">
              <h5 class="text-white mb-3 animated slideInDown astro-WFE7XCNO">
                Safe To and From Prom Venue
              </h5>
              <h1 class="display-3 text-white animated slideInDown mb-4 astro-WFE7XCNO">
                Prom Night Limo Luxury
              </h1>
              <p class="fs-6 fw-small text-white mb-4 pb-2 astro-WFE7XCNO">
                Make your prom night truly magical with our stylish and
                sophisticated prom limo service. You and your friends will feel
                like Hollywood stars as you step out of our glamorous
                limousines. Don't wait – secure your prom night limo now.
              </p>
              <a href="/latest-news" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft astro-WFE7XCNO">Read More</a>
              <a href="/reserve" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight astro-WFE7XCNO">Get A Free Quote</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Carousel End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Carousel.astro", void 0);

const $$Astro$5 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<!-- About Start -->${maybeRenderHead()}<div class="container-xxl py-5 astro-V2CBYR3P">
  <div class="container astro-V2CBYR3P">
    <div class="row g-5 astro-V2CBYR3P">
      <div class="col-lg-6 wow fadeInUp astro-V2CBYR3P" data-wow-delay="0.1s">
        <h6 class="text-secondary text-uppercase astro-V2CBYR3P">About Us</h6>
        <h1 class="mb-2 astro-V2CBYR3P">Driving You Is My Passion.</h1>
        <p class="mb-4 astro-V2CBYR3P">
          All my vehicles are meticulously maintained and clean. I personally
          make sure your limo ride is smooth and comfortable. Whatever the event
          is, our luxury limos are perfect for Weddings, Prom, Corporate Events,
          Group Charter Bus, Party Bus, and Wine tours. I am committed to your
          satisfaction. My rates are competitive hourly based pricing ensures
          that you get the best value for your money without compromising on
          quality. No hidden fees, no surprises.
        </p>
        <p class="fw-medium text-primary astro-V2CBYR3P">
          <i class="fa fa-check text-success me-3 astro-V2CBYR3P"></i>
          Licensed and Insured.
        </p>
        <p class="fw-medium text-primary astro-V2CBYR3P">
          <i class="fa fa-check text-success me-3 astro-V2CBYR3P"></i>
          Modern and well maintained fleet
        </p>
        <p class="fw-medium text-primary astro-V2CBYR3P">
          <i class="fa fa-check text-success me-3 astro-V2CBYR3P"></i>
          Group Disounts and Special Rates Available
        </p>
        <div class="bg-primary d-flex align-items-center p-4 mt-5 astro-V2CBYR3P">
          <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white astro-V2CBYR3P" style="width: 60px; height: 60px;">
            <i class="fa fa-phone-alt fa-2x text-primary astro-V2CBYR3P"></i>
          </div>
          <div class="ms-3 astro-V2CBYR3P">
            <a href="tel:+1980-391-0979" class="astro-V2CBYR3P">
              <p class="fs-5 fw-medium mb-2 text-white astro-V2CBYR3P">
                Get An Instant Free Quote
              </p>
              <h3 class="m-0 text-white astro-V2CBYR3P">+1 980-391-0979</h3>
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 pt-4 astro-V2CBYR3P" style="min-height: 500px;">
        <div class="position-relative h-100 wow fadeInUp astro-V2CBYR3P" data-wow-delay="0.5s">
          <img class="position-absolute img-fluid w-100 h-100 astro-V2CBYR3P" src="/assets/img/white-pearl-night-scene.webp" style="object-fit: cover; padding: 0 0 50px 100px;" alt="">
          <img class="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50 astro-V2CBYR3P" src="/assets/img/frankie2.webp" style="object-fit: cover;" alt="">
        </div>
      </div>
    </div>
  </div>
</div>
<!-- About End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/About.astro", void 0);

const $$Astro$4 = createAstro();
const $$Facts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Facts;
  return renderTemplate`<!-- Fact Start -->${maybeRenderHead()}<div class="container-fluid fact bg-dark my-5 py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
        <i class="fa fa-check fa-2x text-white mb-3"></i>
        <h2 class="text-white mb-2" data-toggle="counter-up">6</h2>
        <p class="text-white mb-0">Years Experience</p>
      </div>
      <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
        <i class="fas fa-car-crash fa-2x text-white mb-3"></i>
        <h2 class="text-white mb-2" data-toggle="counter-up">0</h2>
        <p class="text-white mb-0">Accidents</p>
      </div>
      <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
        <i class="fa fa-users fa-2x text-white mb-3"></i>
        <h2 class="text-white mb-2" data-toggle="counter-up">421</h2>
        <p class="text-white mb-0">Satisfied Clients</p>
      </div>
      <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
        <i class="fa fa-wrench fa-2x text-white mb-3"></i>
        <h2 class="text-white mb-2" data-toggle="counter-up">24</h2>
        <p class="text-white mb-0">Oil Changes</p>
      </div>
    </div>
  </div>
</div>
<!-- Fact End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Facts.astro", void 0);

const $$Astro$3 = createAstro();
const $$Service3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Service3;
  return renderTemplate`<!-- Service Start -->${maybeRenderHead()}<div class="container-fluid py-5 px-4 px-lg-0 astro-K2PGZO6N">
  <div class="row g-0 astro-K2PGZO6N">
    <div class="col-lg-3 d-none d-lg-flex astro-K2PGZO6N">
      <div class="d-flex align-items-center justify-content-center w-100 h-100 astro-K2PGZO6N">
        <!-- <h5 class="display-3 text-white m-0" style="transform: rotate(-45deg);">
          FIVE STARS Experience
        </h5> -->
        <img src="/assets/img/frankie.webp" width="500" alt="" class="astro-K2PGZO6N">
      </div>
    </div>
    <div class="col-md-12 col-lg-9 astro-K2PGZO6N">
      <div class="ms-lg-5 ps-lg-5 astro-K2PGZO6N">
        <div class="text-center text-lg-start wow fadeInUp astro-K2PGZO6N" data-wow-delay="0.1s">
          <h6 class="text-secondary astro-K2PGZO6N">
            Premiere Limo Service Near Charlotte NC
          </h6>
          <h1 class="mb-5 astro-K2PGZO6N">Southern Comfort Meets Style</h1>
        </div>
        <div class="owl-carousel service-carousel position-relative wow fadeInUp astro-K2PGZO6N" data-wow-delay="0.1s">
          <div class="card astro-K2PGZO6N" style="width: 20rem; height:480px">
            <img class="card-img-top astro-K2PGZO6N" src="https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-content/uploads/2023/04/black-pearl.jpg" alt="Card image cap">
            <div class="card-body astro-K2PGZO6N">
              <h5 class="card-title astro-K2PGZO6N">Party Bus</h5>
              <p class="card-text astro-K2PGZO6N">
                Holds up to 18 guests, group rates apply, minimum 4 hour
                engagement
              </p>
              <a href="/reserve" class="btn btn-primary astro-K2PGZO6N">Reserve</a>
            </div>
          </div>
          <div class="card astro-K2PGZO6N" style="width: 20rem; height:480px">
            <img class="card-img-top astro-K2PGZO6N" src="https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-content/uploads/2023/04/charlotte-wedding-limo.png" alt="Card image cap">
            <div class="card-body astro-K2PGZO6N">
              <h5 class="card-title astro-K2PGZO6N">Wedding Limo Service</h5>
              <p class="card-text astro-K2PGZO6N">
                Let's us get you there on your special day. Competetive rates.
              </p>
              <a href="/reserve" class="btn btn-primary astro-K2PGZO6N">Reserve</a>
            </div>
          </div>

          <div class="card astro-K2PGZO6N" style="width: 20rem; height:480px">
            <img class="card-img-top astro-K2PGZO6N" src="https://prestigeworldwidelimos.com/carolina-limo-rentals/wp-content/uploads/2023/04/wine-tours.png" alt="Card image cap">
            <div class="card-body astro-K2PGZO6N">
              <h5 class="card-title astro-K2PGZO6N">Wine Tours Limo</h5>
              <p class="card-text astro-K2PGZO6N">
                Explore wineries that are the best in the nation.
              </p>
              <a href="/reserve" class="btn btn-primary astro-K2PGZO6N">Reserve</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Service End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Service3.astro", void 0);

const $$Astro$2 = createAstro();
const $$Booking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Booking;
  return renderTemplate`<!-- Booking Start -->${maybeRenderHead()}<div class="container-fluid my-5 px-0">
  <div class="video wow fadeInUp" data-wow-delay="0.1s">
    <button type="button" class="btn-play" data-bs-toggle="modal" data-src="/assets/videos/vid01.mp4" data-bs-target="#videoModal">
      <img src="https://pixsector.com/cache/0d0aeff3/av63fa1d6082bbbeb54d8.png" alt="play button">
    </button>

    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              White Pearl Party Bus
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- 16:9 aspect ratio -->
            <div class="ratio ratio-16x9">
              <iframe class="embed-responsive-item" src="" id="video" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-white mb-4">Have Questions ?</h1>
    <h3 class="text-white mb-0">
      <a href="tel:+1980-391-0979" class="text-white">Call Now +1 980-391-0979</a>
    </h3>
  </div>
  <div class="container position-relative wow fadeInUp" data-wow-delay="0.1s" style="margin-top: -6rem;">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="bg-light text-center p-5">
          <h1 class="mb-4">Need A Limo ?</h1>
          <!-- <h5 class="mb-4">Get A Free Instant Quote</h5> -->
          <!-- <form>
            <div class="row g-3">
              <div class="col-12 col-sm-6">
                <input
                  type="text"
                  class="form-control border-0"
                  placeholder="Your Name"
                  style="height: 55px;"
                />
              </div>
              <div class="col-12 col-sm-6">
                <input
                  type="email"
                  class="form-control border-0"
                  placeholder="Your Email"
                  style="height: 55px;"
                />
              </div>
              <div class="col-12 col-sm-6">
                <select class="form-select border-0" style="height: 55px;">
                  <option selected>Select A Service</option>
                  <option value="1">Wedding Limo</option>
                  <option value="2">Bachalore/Bachalorette Party</option>
                  <option value="3">Prom Night Limo</option>
                  <option value="3">Wine Tour Limo</option>
                  <option value="3">Party Bus</option>
                  <option value="3">Black Pearl Party Bus</option>
                  <option value="3">White Pearl Party Bus</option>
                  <option value="3">Sprinter Van Limo</option>
                </select>
              </div>
              <div class="col-12 col-sm-6">
                <div class="phone" id="phoneData" data-target-input="nearest">
                  <input
                    type="text"
                    class="form-control border-0"
                    placeholder="Phone Number"
                    data-target="#date1"
                    style="height: 55px;"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <div class="date" id="date1" data-target-input="nearest">
                  <input
                    type="text"
                    class="form-control border-0 datetimepicker-input"
                    placeholder="Service Date"
                    data-target="#date1"
                    data-toggle="datetimepicker"
                    style="height: 55px;"
                  />
                </div>
              </div>
              <div class="col-12 col-sm-6">
                <select class="form-select border-0" style="height: 55px;">
                  <option selected>Service Time</option>
                  <option value="0">08:00 AM</option>
                  <option value="1">09:00 AM</option>
                  <option value="2">10:00 AM</option>
                  <option value="3">11:00 AM</option>
                  <option value="3">12:00 PM</option>
                  <option value="3">01:00 PM</option>
                  <option value="3">02:00 PM</option>
                  <option value="3">03:00 PM</option>
                  <option value="3">04:00 PM</option>
                  <option value="3">05:00 PM</option>
                  <option value="3">06:00 PM</option>
                  <option value="3">07:00 PM</option>
                  <option value="3">08:00 PM</option>
                  <option value="3">09:00 PM</option>
                  <option value="3">10:00 PM</option>
                  <option value="3">11:00 PM</option>
                  <option value="3">12:00 AM</option>
                  <option value="3">01:00 AM</option>
                  <option value="3">02:00 AM</option>
                  <option value="3">03:00 AM</option>
                  <option value="3">04:00 AM</option>
                  <option value="3">05:00 AM</option>
                  <option value="3">06:00 AM</option>
                  <option value="3">07:00 AM</option>
                </select>
              </div>
              <div class="col-12">
                <textarea
                  class="form-control border-0"
                  style="height:200px"
                  placeholder="Please enter your starting address, destination address, and any special instructions or requests"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary w-100 py-3" type="submit">
                  Get An Instant Quote
                </button>
              </div>
            </div>
          </form> -->
          ${renderComponent($$result, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/ContactForrm", "client:component-export": "default" })}
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Booking End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Booking.astro", void 0);

const $$Astro$1 = createAstro();
const $$Testimonial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonial;
  return renderTemplate`<!-- Testimonial Start -->${maybeRenderHead()}<div id="reviews" class="d-block astro-FKBBCKHY" style="min-height:100px"></div>
<div class="container-xxl py-5 wow fadeInUp astro-FKBBCKHY" data-wow-delay="0.1s">
  <div class="container astro-FKBBCKHY">
    <div class="text-center astro-FKBBCKHY">
      <h1 class="text-secondary text-uppercase astro-FKBBCKHY">Our Client Reviews</h1>
      <h6 class="mb-5 astro-FKBBCKHY">
        Want to know what our customers raving about , read our real world
        limousine services customer reviews
      </h6>
    </div>
    <div class="owl-carousel testimonial-carousel position-relative wow fadeInUp astro-FKBBCKHY" data-wow-delay="0.1s">
      <div class="testimonial-item text-center astro-FKBBCKHY">
        <div class="testimonial-text bg-light text-center p-4 mb-4 astro-FKBBCKHY">
          <p class="mb-0 astro-FKBBCKHY">
            Frankie made it a 10/10 experience. He was awesome to work with, all
            the "kids" just kept yelling "We Love You Frankie"!
          </p>
        </div>
        <img class="bg-light rounded-circle p-2 mx-auto mb-2 astro-FKBBCKHY" src="/assets/img/testimonial-1.webp" style="width: 80px; height: 80px;">
        <div class="mb-2 astro-FKBBCKHY">
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
        </div>
        <h5 class="mb-1 astro-FKBBCKHY">Johanna Dicarlo</h5>
        <p class="m-0 astro-FKBBCKHY">Denver, NC</p>
      </div>
      <div class="testimonial-item text-center astro-FKBBCKHY">
        <div class="testimonial-text bg-light text-center p-4 mb-4 astro-FKBBCKHY">
          <p class="mb-0 astro-FKBBCKHY">
            100% exceptional service! We had an amazing time and Frankie is top
            notch! We will be using Prestige for future events!.
          </p>
        </div>
        <img class="bg-light rounded-circle p-2 mx-auto mb-2 astro-FKBBCKHY" src="/assets/img/testimonial-4.webp" style="width: 80px; height: 80px;">
        <div class="mb-2 astro-FKBBCKHY">
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
        </div>
        <h5 class="mb-1 astro-FKBBCKHY">Nancy Rodriguez</h5>
        <p class="m-0 astro-FKBBCKHY">Charlotte NC</p>
      </div>
      <div class="testimonial-item text-center astro-FKBBCKHY">
        <div class="testimonial-text bg-light text-center p-4 mb-4 astro-FKBBCKHY">
          <p class="mb-0 astro-FKBBCKHY">
            Greet fleet of vehicles to choose from! We absolutely loved using
            their service around the holidays and will continue to use them.
          </p>
        </div>
        <img class="bg-light rounded-circle p-2 mx-auto mb-2 astro-FKBBCKHY" src="/assets/img/testimonial-2.webp" style="width: 80px; height: 80px;">
        <div class="mb-2 astro-FKBBCKHY">
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
          <small class="fa fa-star text-secondary astro-FKBBCKHY"></small>
        </div>
        <h5 class="mb-1 astro-FKBBCKHY">Samuel J.</h5>
        <p class="m-0 astro-FKBBCKHY">Statesville NC</p>
      </div>
    </div>
  </div>
</div>
<!-- Testimonial End -->`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/components/Testimonial.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "LandingLayout", $$LandingLayout, { "pageTitle": "Home", "pageDescription": "Limo service near Charlotte NC specializing in wedding limo, prom limo, party bus, charter bus, airport limo", "pageKeywords": "Limo service near Charlotte NC, specializing in, wedding limo, prom limo, party bus, charter bus, airport limo" }, { "default": ($$result2) => renderTemplate`
  ${renderComponent($$result2, "Spinner", $$Spinner, {})}
  ${renderComponent($$result2, "Carousel", $$Carousel, {})}
  ${renderComponent($$result2, "About", $$About, {})}

  ${renderComponent($$result2, "Facts", $$Facts, {})}
  ${renderComponent($$result2, "Service3", $$Service3, {})}
  ${renderComponent($$result2, "Booking", $$Booking, {})}
  

  ${renderComponent($$result2, "Testimonial", $$Testimonial, {})}
  ${renderComponent($$result2, "ToTop", $$ToTop, {})}
` })}`;
}, "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/index.astro", void 0);

const $$file = "/Users/mhafez/Desktop/My Portfolio (Node & React)/New GitHub/ASTRO/friday-astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Testimonial as $, $$Booking as a, index as i };
