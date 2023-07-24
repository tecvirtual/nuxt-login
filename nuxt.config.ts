// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/bootstrap.min.css'],
  modules: ['nuxt-api-party'],
  runtimeConfig: {
    apiParty: {
      endpoints: {
        jsonPlaceholder: {
          url: 'https://dummyjson.com', // Reemplaza esto con la URL base de tu API
          token: '' // Deja el token en blanco por ahora, ya que se generará dinámicamente
        }
      }
    }
  }

})
