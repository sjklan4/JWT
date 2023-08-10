<template>
    <div>
        <h1>MainComponents</h1>
    ID :<input type="text" name="id" id="id">&nbsp;
    Password: <input type="password" name="password" id="password">&nbsp;
    <button @click="login()" v-if="!store.state.isToken">login</button>
    <button @click="logout()" v-if="store.state.isToken">logout</button>
    {{ $store.state.token }}

    </div>
</template>
<script>
export default{
    name: "MainComponent"
}
</script>


<style>

</style>




<!-- <template>
    <div>
        <h1>MainComponents</h1>
    </div>
</template>

<script>
import axios from "axios";

export default{
    name: 'App',
    data(){
        return{
            token: '',
        }
    }
methods:{
    login() {
        axios.get(`http://localhost:8000/api/token?id=ppp`)
    .then(res => {
    console.log(res.data);
    this.token = res.data.token;
        
    })
    .catch(err => {
        if(err.status >= 400){
          console.log(err);

        };
    })
},
</script> -->