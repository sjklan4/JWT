import { createApp } from 'vue';
import App from './App.vue';
// import router from './router'; 
import store from './store.js'
import router from './router.js'


createApp(App)
.use(store).use(router)// 이 줄은 애플리케이션이 라우터를 사용하도록 만드는 데 중요합니다
.mount('#app');