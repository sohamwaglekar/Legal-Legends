<template>
<div class="blackbg py-12 px-20"> 
<div class="mb-8 flex items-center justify-between">
  <div>

                <p class="text-white text-6xl tracking-wider leading-none">AREAS OF</p>
                <p class="text-yellow-lighter text-6xl pl-8 tracking-wider">PRACTICE</p>
  </div>
             
            </div>


    <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
     
        <p block v-b-toggle.accordion-1 class="text-grey-darker text-5xl">Family Law</p>
      </b-card-header>
      <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white text-xl">
          Family law, body of law regulating family relationships, including marriage and divorce, the treatment of children, and related economic matters.
<br /><br />
In the past, family law was closely connected with the law of property and succession (see property law), and, judging from the records available, it must have originated principally in the economic and property questions created by the transfer of a female from her father’s family to the power and guardianship of her husband. Even with regard to the relationship between parent and child, legal concepts such as guardianship, custody, and legitimacy were associated with family power structures and family economic interests. Family law also traditionally has to do with matters of personal status—for example, the question of whether a person is to be considered married or single, legitimate or illegitimate—though the incidents and importance of these distinctions often derive from the law of property.  
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
     
        <p block v-b-toggle.accordion-2 class="text-grey-darker text-5xl">Civil / Property Law</p>
      </b-card-header>
      <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white text-xl">
            Civil law systems, also called continental or Romano-Germanic legal systems, are found on all continents and cover about 60% of the world. They are based on concepts, categories, and rules derived from Roman law, with some influence of canon law, sometimes largely supplemented or modified by local custom or culture. The civil law tradition, though secularized over the centuries and placing more focus on individual freedom, promotes cooperation between human beings.
<br /><br />
In their technical, narrow sense, the words civil law describe the law that pertains to persons, things, and relationships that develop among them, excluding not only criminal law but also commercial law, labor law, etc. Codification took place in most civil law countries, with the French Code civil and the German BGB being the most influential civil codes.
          </p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 accordionboxcard">
      <b-card-header header-tag="header" class="p-1 blackbg accordionbox" role="tab">
        <!-- <b-button block v-b-toggle.accordion-3 variant="info">Accordion 3</b-button> -->
        <p block v-b-toggle.accordion-3 class="text-grey-darker text-5xl">Documentation</p>
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body class="blackbg py-8 px-2">
          <p class="text-white text-xl">
            A legal document, in general, is a document where two or more parties enter into an agreement and it is confirmed by the placement of their signatures at the end. The term legal documents have a very broad term when it comes to discovery and court required documents.
<br /> 
Many times a court, during a specific case, will have to make a ruling on what types of documents are considered legal documents in relevance to the case.
<br /><br />
When a legal document is created to form a contract, all parties must agree and sign the document. If you do not sign the document it cannot be held as binding in a Court of Law.
<br /><br />
Many people attest to the “verbal agreement” theory. However, one should always remember the old cliche: “The agreement is only as good as the paper it is written upon.”
<br />
If you do not sign a document it is not legal. A legal document is legally binding in the eyes of the court.

                      </p>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</div>
</template>