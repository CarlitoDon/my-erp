import Vue from 'vue';
import Router from 'vue-router';
import UserList from './views/UserList.vue';
import UserForm from './views/UserForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'UserList',
      component: UserList,
    },
    {
      path: '/users/new',
      name: 'UserForm',
      component: UserForm,
    },
    {
      path: '/users/edit/:id',
      name: 'UserEdit',
      component: UserForm,
    },
  ],
});
