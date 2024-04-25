<template>
    <HeaderComp />
    <ImageThumbnail :id="id"/>
    <ThumbnailPage />
    <FooterComp />
</template>

<script>
import FooterComp from '@/webPages/landingPage/components/FooterComp.vue';
import HeaderComp from '../webPages/landingPage/components/HeaderComp.vue';
import ImageThumbnail from '@/webPages/thumbnailPage/components/ImageThumbnail.vue';
import ThumbnailPage from '@/webPages/thumbnailPage/components/thumbnailPage.vue';

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        ImageThumbnail,
        HeaderComp,
        ThumbnailPage,
        FooterComp
    }
}
</script>

<style></style>
