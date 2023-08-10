<template>
  <div>
      <router-view>

    </router-view>

  </div>
  <!-- <router-view>

  </router-view> -->
</template>



<script>


import router from './router'; 

export default {
  name: 'App',
  methods: {
    login() {
      router.push('main');
    },
    logout(){
      router.push('login');
    }
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