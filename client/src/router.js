import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import TodoListPage from './components/TodoListPage.vue';

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/todo',
    name: 'TodoListPage',
    component: TodoListPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
