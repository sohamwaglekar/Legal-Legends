<template>
    <div class="pt-12 h-screen blackbg">
       <p class="pl-16 text-3xl font-black mb-8 text-prime">Contact Us</p>
        <div class="flex px-16">
            <div class="w-3/4 ">
            <p class="font-semibold text-white mb-4 text-xl">Have good words for us? Or Bad? Well, we love our critics as much as we love our friends!</p>
            <div>
                <p class="font-semibold text-white mb-4 text-xl">Registered Email:</p>
                <p class="text-prime mb-4 text-lg">You can also email to us at contact@LawRato.com or call us at +91-1234-000-555 to share your thoughts with us.</p>
            </div>
            <div>
                <p class="font-semibold text-white mb-4 text-xl">For Editorial Queries:</p>
                <p class="text-prime mb-2 text-lg"><span class="text-white mr-3">Contact Person:</span> Atharva Yadav &#38; Soham Waglekar </p>
                <p class="text-prime mb-2 text-lg"><span class="text-white mr-3">Email:</span> LL@LegalLegends.com</p>
                <p class="text-prime mb-2 text-lg"><span class="text-white mr-3">Ph:</span> 1234567890</p>
            </div>
            </div>
            <div class="px-8 pt-12 pb-10 bg-prime w-1/4 h-min aboutusbookingbox">
            <div class="flex justify-center">
            <img src="@/assets/img/lawyers/L1.webp" class="mb-4 w-2/3" alt="">
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
