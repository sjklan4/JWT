<template>
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
</script>