import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import contact from './components/contact.vue'
import services from './components/services.vue'
import singleservice from './components/singleservice.vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(VueRouter);
Vue.config.productionTip = false


const routes = [
  { path: '/contact', component: contact },
  { path: '/', component: services }, 
  { path: '/singleservice', component: singleservice }, 
];

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
