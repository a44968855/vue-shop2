<template>
  <div>
    <Alert></Alert>
    <slider></slider>
    <homenavbar class="sticky-top"></homenavbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
import homenavbar from '../components/homenavbar.vue';
import Footer from '../components/footer.vue';
import slider from '../components/slider.vue';
import Alert from '../components/alertmessage.vue';

export default {
  components: {
    homenavbar,
    Footer,
    slider,
    Alert,
  },
};
</script>
