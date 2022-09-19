export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    // ...
    console.log('===========');
    console.log(error);
    console.log(context);
  }
})