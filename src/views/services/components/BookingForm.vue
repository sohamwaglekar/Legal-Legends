<template>
    <div>
         <b-modal id="modal-1" footer-class="hidden" title="Booking Form" header-class="blackbg border-2"
         title-class="text-prime font-semibold text-2xl" body-class="blackbg border-2" header-close-variant="white">
            <form @submit.prevent="submitOrder">
   <div class="mb-4">
    <label for="example-datepicker" class="text-white font-semibold text-lg mb-2">Choose a date</label>
    <b-form-datepicker id="example-datepicker" v-model="date" class=""></b-form-datepicker>

   </div>
   <div class="mb-4">
     <label class="text-white font-semibold text-lg mb-2">Enter your Time</label>
    <b-form-input
          id="input-1"
          v-model="time"
          type="text"
          placeholder="Enter Time"
          required
        ></b-form-input>
   </div>
   <div class="mb-4">
     <label class="text-white font-semibold text-lg mb-2">Enter your Case Details</label>
    <b-form-textarea
      id="textarea"
      v-model="descr"
      placeholder="Type"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
   </div>
   <div class="w-full mt-5 mb-4 flex justify-end">
            <b-button variant="danger" class=" text-prime font-bold uppercase" type="submit">Submit</b-button>
        </div>
   </form>
  </b-modal>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
    props: {
        lawyerdata: {
            type: Object,
            // default: {}
        },
    },
    data() {
        return {
            date: "",
            time:"",
            descr:""
        }
    },
    methods: {
      async  submitOrder() {
          let payload = {
            userid: this.user._id,
            Lawyerid: this.lawyerdata.id,
            Lawyername: this.lawyerdata.lawyername,
             Lawyeremail: this.lawyerdata.email,
              Lawyermobile: this.lawyerdata.mobile,
              LawyerAdress: this.lawyerdata.address,
              date: this.date,
              time: this.time,
              descripton: this.descr
          }  
          await axios.post('http://localhost:8000/api/order', payload)
           this.$router.push({
                name:'order'
            })
        }
    },
    computed:{
        ...mapState("auth",["user"])
    }
}
</script>