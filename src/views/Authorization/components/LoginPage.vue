<template>
    <div class="px-20">
        <form @submit.prevent='submit'>
        <p class="text-prime text-3xl mb-16 text-center font-bold">Login</p>
        <div class="mb-4">
            <p class="mb-2 text-white text-lg">Email</p>
            <b-form-input v-model="email" type="email" placeholder="Enter Email" class="w-full"></b-form-input>
        </div>
        <div class="mb-4">
            <p class="mb-2 text-white text-lg">Password</p>
            <b-form-input v-model="password" type="password" placeholder="Enter Password"></b-form-input>
        </div>
         <div class="flex justify-center mt-8">
            <b-button variant="danger" type="submit" class="font-bold text-prime">Submit</b-button>
        </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            email:"",
            password:"",
           
        };
    },
    methods: {
       async submit() {
           let payload = {
            email:this.email,
            password:this.password,
           } 
           let loader = this.$loading.show()
           setTimeout(() => {
                    loader.hide()
                }, 3000)
           try {
          let data =   await axios.post('http://localhost:8000/api/login', payload)
          console.log(data.data);
        //   loader.hide()
          if(Object.keys(data.data).length){
           this.$store.commit('auth/SET_USER',data.data.user)
            this.$router.push({
                name:'home'
            })
          }
            
           } catch (error) {
            console.log(error)
            
           }
        }

    },
}
</script>