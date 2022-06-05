<template>
<div class="blackbg p-12"> 
<div class="mb-8 flex items-center justify-between">
  <div>

                <p class="text-white text-6xl tracking-wider leading-none">AREAS OF</p>
                <p class="text-yellow-lighter text-6xl pl-8 tracking-wider">PRACTICE</p>
  </div>
                <div>
                  <b-button variant="primary" size="lg" class="bg-prime text-black" outlined>View all</b-button>
                </div>
            </div>


    <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
     
        <p block v-b-toggle.accordion-1 class="text-grey-darker text-5xl">Intellectual Property</p>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam harum totam sunt recusandae unde, nesciunt omnis quod inventore quaerat, eligendi eos impedit deleniti dignissimos sapiente? Id autem nisi amet quae.  
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
     
        <p block v-b-toggle.accordion-2 class="text-grey-darker text-5xl">Banking and Finance Law</p>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam harum totam sunt recusandae unde, nesciunt omnis quod inventore quaerat, eligendi eos impedit deleniti dignissimos sapiente? Id autem nisi amet quae.  
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
        <!-- <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button> -->
        <p block v-b-toggle.accordion-3 class="text-grey-darker text-5xl">Criminal Law</p>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam harum totam sunt recusandae unde, nesciunt omnis quod inventore quaerat, eligendi eos impedit deleniti dignissimos sapiente? Id autem nisi amet quae.  
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>