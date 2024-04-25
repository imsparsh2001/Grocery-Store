<template>
    <HeaderComp/>
    <ProductListing />
    
</template>
    
  <script>
  import HeaderComp from '@/webPages/landingPage/components/HeaderComp.vue';
import ProductListing from '@/webPages/productListingPage/components/productListingPage.vue'
  export default {
    components: {
        HeaderComp,
        ProductListing 
    }
  }
  </script>

    