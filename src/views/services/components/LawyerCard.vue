<template>
<div class="blackbg">
    <BookingForm :lawyerdata="lawyerdetails"/>
        <div class="flex flex-wrap w-full"
       >
        <b-card  v-for="(item,index) in LawyerCard"
       :key="'item-' + index" 
       class="w-1/6 mx-4 mb-12">
        <div class="mb-4 flex justify-center w-full">
           <img :src="item.image" class="w-auto h-36" />
           <!-- <img src="../../../assets/img/lawyers/L1.webp" class="w-auto h-36" /> -->

        </div>
        <div>
            
        <p class="text-center  mb-2 font-semibold"><span class="text-center font-bold mr-3">Adv.</span>{{item.lawyername}}</p>
        <p class="text-center mb-2 font-semibold"><span class="text-center font-bold mr-3">Career:</span>{{item.laywerprofile}}</p>
        <p class="text-center font-semibold">{{item.information}}</p>

        </div>
        
        <div class="w-full mt-4">
            <b-button variant="danger" class="w-full text-prime font-bold" @click="submitForm(item)" v-b-modal.modal-1>Book Now</b-button>

        </div>
        </b-card>
        </div>
    
</div>
</template>

<script>

import BookingForm from "./BookingForm.vue";
import LawyerList from "./LawyerList.json";
export default {
    data(){
        return{
            LawyerCard : LawyerList,
            lawyerdetails: {}
        };
    },
    components:{
        BookingForm
    },
    methods: {
        submitForm(data) {
            this.lawyerdetails=data
        },
        getImage(image){
            return require(image)
        }

    },
}
</script>