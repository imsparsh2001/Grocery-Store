<template>
    <HeaderComp/>
    <ImageSection/>
    <PopularCategory/>
    <SpecialOffers/>
    <SignUp/>
    <FooterComp/>

</template>
<script>
import FooterComp from '@/webPages/landingPage/components/FooterComp.vue';
import HeaderComp from '@/webPages/landingPage/components/HeaderComp.vue';
import ImageSection from '@/webPages/landingPage/components/ImageSection.vue';
import SignUp from '@/webPages/landingPage/components/SignUp.vue';
import SpecialOffers from '@/webPages/landingPage/components/SpecialOffers.vue';
import PopularCategory from '@/webPages/landingPage/components//PopularCategory.vue';

export default{
    name: "LandingPage",
    components: {
    HeaderComp,
    ImageSection,
    SpecialOffers,
    SignUp,
    FooterComp,
    PopularCategory
}
}
</script>