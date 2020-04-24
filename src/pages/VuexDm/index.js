import Vue from 'vue';
import App from './App.vue';
import store from './store';

new Vue({
  el:'#root',
  store,
  render: h => h(App)
})
