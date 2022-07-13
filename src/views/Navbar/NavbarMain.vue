<template>
   <div class="bordernavbar blackbg">
  <b-navbar toggleable="lg"  class="blackbg py-4" >
    <div class="pl-12 w-1/4">
    <b-navbar-brand @click="handleClick('home')">
      <img src="@/assets/img/LL_logo1.png" alt="" class="cursor-pointer">
    </b-navbar-brand>
    </div>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto w-3/4">
          <div class="flex  ">
        <b-nav-item class="navbarhead pr-12 cursor-pointer text-white" @click="handleClick('about')">About Us</b-nav-item>
        <b-nav-item class="navbarhead px-12 cursor-pointer text-white" @click="handleClick('websiteservices')">Services</b-nav-item>
        <b-nav-item class="navbarhead px-12 cursor-pointer text-white" @click="handleClick('services')">Find a Lawyer</b-nav-item>
        <b-nav-item class="navbarhead px-12 cursor-pointer text-white" @click="handleClick('contact')">Contact</b-nav-item>
         <b-nav-item class="navbarhead px-12 cursor-pointer text-white" v-if="!isLoggedIn" @click="handleClick('authentication')">Login</b-nav-item>
         <div v-else class="px-12">
          <b-nav-item-dropdown text="Profile" right>
          <b-nav-item class="px-6 cursor-pointer" @click="handleClick('order')"><p class="text-black text-base">Orders</p></b-nav-item>
          <b-nav-item class="px-6 cursor-pointer text-black" @click="handleLogout"><p class="text-black text-base">Logout</p></b-nav-item>
          
        </b-nav-item-dropdown>
         </div>
         
          </div>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
     
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  methods:{
  handleClick(name){
this.$router.push({name:name})
},
async handleLogout(){
 try {
  await axios.post('http://localhost:8000/api/logout')
  
  this.$store.commit('auth/SET_USER',{})
  window.location.reload()
  
 } catch (error) {
  console.log(error)
 }

}
  },
  computed: {
    ...mapState('auth',['user']), 
    isLoggedIn() {
      console.log(this.user);
      if(this.user && Object.keys(this.user).length>1){
        return true
      }else{
        return false
      }
    }
  },
}
</script>