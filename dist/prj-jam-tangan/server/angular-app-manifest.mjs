
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/register"
  },
  {
    "renderMode": 2,
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "route": "/admin/products"
  },
  {
    "renderMode": 2,
    "route": "/admin/categories"
  },
  {
    "renderMode": 2,
    "route": "/admin/brands"
  }
],
  assets: {
    'index.csr.html': {size: 22838, hash: 'd5e52ce89b42a9578e171bb4045122e0a9ea49eef18887df63a4edc1d19bc5a7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 23361, hash: 'bb9feeaa97595a0b86890b54a6a49c1f283f9721d34ba2d5bf6061b9c10b0632', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 25498, hash: '85b318cb8691e8d6571017500da683df3e096094ffcc02dfcbcafaa9c5293a47', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 25603, hash: '2c2e95169e51f496ad2c694a7a4c85531e23ed5abfa2491dd5a2925c8112b46b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 23002, hash: 'fd98c459dacbb4d16068592f5551842d100c0d8278d9c457648a27ac250e9864', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'admin/products/index.html': {size: 23002, hash: 'fd98c459dacbb4d16068592f5551842d100c0d8278d9c457648a27ac250e9864', text: () => import('./assets-chunks/admin_products_index_html.mjs').then(m => m.default)},
    'admin/categories/index.html': {size: 23002, hash: 'fd98c459dacbb4d16068592f5551842d100c0d8278d9c457648a27ac250e9864', text: () => import('./assets-chunks/admin_categories_index_html.mjs').then(m => m.default)},
    'admin/brands/index.html': {size: 23002, hash: 'fd98c459dacbb4d16068592f5551842d100c0d8278d9c457648a27ac250e9864', text: () => import('./assets-chunks/admin_brands_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25498, hash: '85b318cb8691e8d6571017500da683df3e096094ffcc02dfcbcafaa9c5293a47', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
