export { renderers } from '../../renderers.mjs';
export { onRequest } from '../../_empty-middleware.mjs';
import '../../chunks/astro.a70e49fb.mjs';
import 'html-escaper';
import 'react';
import 'react-dom/server';

const page = () => import('../../chunks/pages/index.astro.da64fdc3.mjs').then(n => n.i);

export { page };
