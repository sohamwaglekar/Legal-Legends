<template>
    <div class="px-20 py-8 blackbg flex">
        <div class="w-3/4 pr-20">
        <p class="text-3xl font-black mb-8 text-prime">Check your orders here</p>
        <b-card class="w-full blackbg p-4 border-4 border-prime mb-4" v-for="(item,index) in myorder"
       :key="'item-' + index" >
       <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.Lawyername}}</p>
       </div>
       <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.Lawyeremail}}</p>
       </div>
       <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.Lawyermobile}}</p>
       </div>
       <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.Lawyername}}</p>
       </div>
       <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.LawyerAdress}}</p>
       </div>
        <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.date}}</p>
       </div>
        <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.time}}</p>
       </div>
        <div class="mb-3 flex items-center">
        <p class="mr-4 text-prime text-xl font-semibold">Your Lawyer Name is:</p>
            <p class="text-white text-xl font-semibold">{{item.descripton}}</p>
       </div>
           
        </b-card>
        </div>
         <div class="px-8 pt-12 pb-10 bg-prime w-1/4 h-min aboutusbookingbox">
        <div class="flex justify-center">
            <img src="@/assets/img/lawyers/L1.webp" class="mb-4 w-2/3" alt="">
        </div>
            <p class="mb-2 text-lg font-bold text-black text-center">
             Want to Book your legal issue advisor online?
            </p>
            
            <div class="flex justify-center">
            <b-button class="blackbg text-white my-4 px-8 hover:text-prime" variant="">BOOK NOW</b-button>
            
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState('auth',['user','myorder'])
    },
    methods: {
       async myOrder() {
          let data = await axios.post('http://localhost:8000/api/getmyorder',{
                userid:this.user._id
                })
                this.$store.commit("auth/myorder", data.data)
        }
        
    },
    mounted () {
        this.myOrder();
    },
}
</script>