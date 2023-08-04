import { createRouter, createWebHistory } from 'vue-router';
import ListPage from './components/listpage.vue';

const routes = [
  // your other routes...
  { path: '/listpage', component: ListPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;