// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/bootstrap.min.css'],
  modules: ['nuxt-api-party', '@sidebase/nuxt-auth'],
  auth: {
    globalAppMiddleware: true,
  },
  runtimeConfig: {
    apiParty: {
      endpoints: {
        jsonPlaceholder: {
          url: 'https://dummyjson.com', // Reemplaza esto con la URL base de tu API
          token: '' // Deja el token en blanco por ahora, ya que se generará dinámicamente
        }
      }
    },
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    TWITCH_CLIENT_SECRET: process.env.TWITCH_CLIENT_SECRET,
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    },
  }

})
