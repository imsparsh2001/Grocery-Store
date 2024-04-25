<template>
    <HeaderComp/>
    <ProductListingPage/>
    <FooterComp/>
</template>

<script>
import FooterComp from '@/webPages/landingPage/components/FooterComp.vue';
import HeaderComp from '@/webPages/landingPage/components/HeaderComp.vue';
import ProductListingPage from '@/webPages/productListingPage/components/productListingPage.vue';

    export default{
    
    components:{
    HeaderComp,
    FooterComp,
    ProductListingPage
}
}
</script>

<style>
</style>

