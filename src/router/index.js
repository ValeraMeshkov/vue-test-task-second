import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Tickets/Tickets.vue';

const routes = [
  {
    path: '/',
    name: 'Tickets',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
