<template>
    <div class="w-3/4 pr-16">
          <b-card  v-for="(item,index) in ServiceCard"
       :key="'item-' + index" 
       class="w-full mb-12">
       <div class="flex yellowimg">
       <div class="w-3/4">
         <p class="text-xl font-bold mb-4">{{item.name}}</p>
        <p class="pr-4 font-medium">{{item.description}}</p>
       
       </div>
       <div class="w-1/4 flex flex justify-center">
        <img src="@/assets/img/hammer-removebg.png" alt="" class="w-auto h-32">
       </div>
       </div>
          </b-card>
        </div>
</template>

<script>
export default {
    data() {
        return {
            ServiceCard: [
                {
                    name: "Family and Matrimonial",
                    description:"The act was enacted with the main aim of establishment of family courts for rapid and safe settlement in the disputes arising in family and marriage and the matters related therewith."
                },
                 {
                    name: "Civil Law and Property",
                    description:"Every creation, transfer, encumbrance, or cancellation of a right in immovable property requires, in addition to the agreement of the parties, registration with the district court."
                },
                 {
                    name: "Documentation",
                    description:"Case document means a document and information in a document submitted to a court or filed with a clerk of court in a judicial action or proceeding, including exhibits, pleadings, motions, orders and judgments, and any documentation prepared by the court or clerk in the judicial action or proceeding"
                },
                 {
                    name: "Other Services",
                    description:"Website offers large quality of lawyers and services. Any court excercise has been performed by lawyers"
                },
                
            ]
        }
    },
}
</script>
