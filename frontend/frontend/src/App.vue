<template>
   <div v-if="!isLoggedIn">
    ID :<input type="text" v-model="user.id">
    Password: <input type="password" v-model="user.password">
    <button @click="login()">login</button>
  </div>
  <router-view>

  </router-view>
</template>



<script>
import axios from "axios";
import router from './router'; 

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: false,
      token: '',
      user: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      axios.get(`http://localhost:8000/api/token?id=${this.user.id}&password=${this.user.password}`)
      .then(res => {
        console.log(res.data);
        if (res.data.errflg === '0') {
          this.token = res.data.token; 
          this.isLoggedIn = true;
          router.push('/listpage');
        } 
      })
      .catch(err => {
        if(err.status >= 400){
          console.log(err);

        };
      });
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- <template>
  <div>
    ID :<input type="text"> 
    비밀번호 : <input type="text">
    <button @click="login()">로그인</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      token: '',
    }
  },
  methods: {
    login() {
      axios.get('http://localhost:8000/api/token?id=')
      .then(res=> {
        console.log(res.data);
        this.token = res.data.token;
      })
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->