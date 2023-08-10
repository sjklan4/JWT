import {createRouter, createWebHistory, } from 'vue-router';
import Main from './components/MainComponent.vue'
import Login from './components/LoginComponent.vue'

const routes = [
  {
    path : "/main", 
    name: "main",
    component: Main
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
















// import { createRouter, createWebHistory } from 'vue-router';
// import listpage from './components/listpage.vue';

// const routes = [

//     { path: '/listpage', name: 'ListPage', component: listpage },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;