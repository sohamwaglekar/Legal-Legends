<template>
    <div class="pt-12 blackbg px-20">
        <p class=" text-3xl font-black mb-8 text-prime">Services</p>
        <div class="flex">
        <LeftSide />
        <RightSide />
        </div>
    </div>
</template>

<script>
import LeftSide from "./components/LeftSide.vue";
import RightSide from "./components/RightSide.vue"
export default {
    components:{
        LeftSide,
        RightSide
    }
}
</script>