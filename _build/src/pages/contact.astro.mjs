export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.a70e49fb.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/contact.astro.d3f087cf.mjs').then(n => n.c);

export { page };
