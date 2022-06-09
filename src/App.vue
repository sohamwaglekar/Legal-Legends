<template>
  <div id="app">
   <Navbar />
    <!-- <Homepage /> -->
    <AboutUs />
  </div>
</template>

<script>
import Navbar from "./views/Navbar/NavbarMain.vue";
// import Homepage from "./views/Homepage/HomeMain.vue";
import AboutUs from "./views/Aboutus/About-Us.vue";
import "./assets/tailwind.css";
import "./views/style/Common.css";
export default {
  name: 'App',
  components: {
    Navbar,
    // Homepage,
    AboutUs
  }
}
</script>

