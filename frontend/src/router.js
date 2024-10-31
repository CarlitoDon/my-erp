import { createRouter, createWebHistory } from 'vue-router';
import UserList from './views/UserList.vue';
import UserForm from './views/UserForm.vue';
import AdminRegister from './views/AdminRegister.vue';

const routes = [
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
  {
    path: '/admin/register',
    name: 'AdminRegister',
    component: AdminRegister,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
