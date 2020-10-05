import Vue from 'vue';

Vue.component(
  'hello-component',
  require('./client/HelloComponent.vue').default
);

new Vue({
  el: '#app',
  data: {
    message: 'Hello from Webpack',
  },
});
