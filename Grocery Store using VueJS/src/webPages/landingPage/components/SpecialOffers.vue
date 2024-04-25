<template>
    <div class="container3">
        <main id="photosJson">
            <section class="special-offers">
                <div>
                    <h3>Special Offers of the View All Week!</h3>
                    <p>Get exclusive ongoing offers, deals, and discount codes of shopping</p>
                </div>

                <div class="view-link">
                    <a @click="viewAll">View All ></a>
                </div>
            </section>

            <div class="specialoffers">
                <div v-for="itemview in data.items" :key="itemview.id" class="article">
                    <div v-if="itemview.discount && itemview.discount !== ''">
                        <pre><span>{{ itemview.discount }}%</span></pre>
                    </div>
                    <div v-else class="no-discount">

                    </div>

                    <div class="item-img">
                        <img :src="itemview.img" alt="Product-image" style="width: 150px;" />
                    </div>

                    <p class="offer-price">${{ itemview.price }}</p>
                    <p>{{ itemview.name }}</p>
                    <div class="review-stars">
                        <font-awesome-icon class="view-star" icon="star" />
                        <font-awesome-icon class="view-star" icon="star" />
                        <font-awesome-icon class="view-star" icon="star" />
                        <font-awesome-icon class="view-star" icon="star" />
                        <font-awesome-icon class="view-star" icon="star-half-stroke" />
                        4.3(68)
                    </div>
                    <p class="availibility">IN STOCK</p>
                    <progress class="custom-progress" :id="itemview.id" max="100"
                        :value="itemview.availableStock"></progress>
                    <p>Available products: {{ itemview.availableStock }}</p>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script>
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "SpecialOffers",
    data() {
        return {
            data: [],
        };
    },
    components: {
        FontAwesomeIcon
    },
    mounted() {
        axios.get("assets/project.json")
            .then(res => this.data = res.data)
            .catch(err => console.log(err))
    },
};
</script>
  
<style src="../landingPage styles/SpecialOffers.css" scoped></style>
  