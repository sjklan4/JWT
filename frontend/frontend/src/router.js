import { createRouter, createWebHistory } from 'vue-router';
import listpage from './components/listpage.vue';

const routes = [

    { path: '/listpage', name: 'ListPage', component: listpage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;