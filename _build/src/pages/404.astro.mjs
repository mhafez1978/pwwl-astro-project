export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.a70e49fb.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/404.astro.ae2bdad6.mjs').then(n => n._);

export { page };
