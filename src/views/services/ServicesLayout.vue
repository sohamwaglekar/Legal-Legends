<template>
  <div class="blackbg py-8 px-12">
    <p class="text-prime text-5xl font-semibold px-2">Book a Lawyer for you</p>
    <div class="mt-12">
      <LawyerCard />
    </div>
  </div>
</template>

<script>
import LawyerCard from "./components/LawyerCard.vue";
export default {
  components:{
    LawyerCard
  }
}
</script>