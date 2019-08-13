import Vue from 'vue';
import Router from 'vue-router';
import ContactList from './views/ContactList';
import ContactDetails from './views/ContactDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContactList,
    },
    {
      path: '/contact/:id',
      name: 'ContactDetails',
      component: ContactDetails,
    },
  ],
});
