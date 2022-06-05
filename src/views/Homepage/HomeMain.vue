<template>
    <div>
        <CoverPhase />
        <BigImg />
        <AreaPrac />
       
    </div>
</template>

<script>
import CoverPhase from "./components/CoverPhase.vue";
import BigImg from "./components/BigImage.vue";
import AreaPrac from "./components/AreaofPractice.vue";

export default {
    components:{
        CoverPhase,
         BigImg,
         AreaPrac,
         
    }
}
</script>