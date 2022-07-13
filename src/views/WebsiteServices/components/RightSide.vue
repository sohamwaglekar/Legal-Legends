<template>
    <div class="px-8 pt-12 pb-10 bg-prime w-1/4 h-min aboutusbookingbox">
        <div class="flex justify-center">
            <img src="../../../assets/img/lawyers/L1.webp" class="mb-4 w-2/3" alt="">
        </div>
            <p class="mb-2 text-lg font-bold text-black text-center">
              Googling your legal issue online?
            </p>
            <p class="text-black text-center text-lg font-medium">
                The internet is not a lawyer and neither are you.<br>Talk to a real lawyer about your legal issue
            </p>
            <div class="flex justify-center">
            <b-button class="blackbg text-white my-4 px-8 hover:text-prime" variant="" @click="handleClick('services')">BOOK NOW</b-button>
            </div>
        </div>
</template>

<script>
export default {
    methods: {
         handleClick(name){
this.$router.push({name:name})
let loader = this.$loading.show()
setTimeout(() => {
                    loader.hide()
                }, 2000)

},
    },
}
</script>