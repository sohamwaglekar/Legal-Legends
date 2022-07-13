<template>
  <div id="app">
   <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./views/Navbar/NavbarMain.vue";

import "./assets/tailwind.css";
import "./views/style/Common.css";
export default {
  name: 'App',
  components: {
    Navbar,
   
  }
}
</script>


