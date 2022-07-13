<template>
    <div class="py-8 px-12 blackbg">
        <div>
       <p class="text-center text-white text100">YOU RUN YOUR</p>
       <p class="text-center  text-white text100">BUSINESS</p>
       <p class="text-center text-yellow-lighter text100">WE`LL PROTECT IT</p>
       </div>
       <div class="flex items-center justify-center p-8">
           
           <div class="flex items-center rounded-full bg-yellow-lighter font-semibold py-2 px-4 cursor-pointer hover:bg-transparent border-2 border-prime hover:text-yellow-lighter" @click="handleClick('services')"><p>BOOK NOW</p></div>
       </div> 
    </div>
</template>

<script>
export default {
    methods: {
         handleClick(name){
this.$router.push({name:name})
},
    },
}
</script>