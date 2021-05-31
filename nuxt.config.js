
// Eventually we will want to upgrade local environment to SSL as well:
// See --> https://letsencrypt.org/docs/certificates-for-localhost/

const serverMiddleware = process.env.NODE_ENV === 'production'
  ? ["redirect-ssl"]
  : []

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "KS Wrestling Center",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "default", name: "default", content: "KWC - Kansas Wrestling Center. Wrestling and MMA driven events are hosted here. Check out our events page for more info." }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // Simple usage
    "@nuxtjs/vuetify"
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",

    // https://go.nuxtjs.dev/content
    // '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:5051/api',
    https: false,
    proxy: false,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.KWC_SERVER_URL
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // buildDir: 'nuxt-dist',
  build: {},
  serverMiddleware: serverMiddleware,
};
