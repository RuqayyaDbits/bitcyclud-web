export default defineNuxtConfig({
  modules: [
    ['@nuxtjs/tailwindcss', {
      darkMode: 'class',
      config: {
        content: [],
        theme: {
          extend: {
            fontFamily: {
              poppins: ['Poppins', 'sans-serif'],
              roboto: ['Roboto', 'sans-serif'],
            },
          },
        },
      }
    }]
  ],
  
})