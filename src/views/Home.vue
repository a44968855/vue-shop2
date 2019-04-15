<template>
  <div>
    <section class="container">
      <div class="h4 text-primary line pt-2">
        <i class="fas fa-mug-hot mr-3"></i>
        <span class="text-dark h2 font-weight-bold">主廚推薦 Menu</span>
      </div>
      <div class="row mt-4">
        <div
          class="col-md-4 mb-4"
          v-for="(card,index) in products"
          :key="index"
        >
          <div
            class="card border-0 shadow-sm h-100"
            v-if="index<3&card.is_enabled"
          >
            <div
              style="height: 150px; background-size: cover; background-position: center"
              :style="{backgroundImage:`url(${card.imageUrl})`}"
            ></div>
            <div class="card-body">
              <span class="badge badge-secondary float-right ml-2">{{card.category}}</span>
              <h5 class="card-title">
                <p class="text-dark font-weight-bold">{{card.title}}</p>
              </h5>
              <p class="card-text">{{card.content}}</p>
              <div class>
                <div
                  class="h4 text-danger text-right"
                  v-if="card.price"
                >售價 NT{{ card.price | currency}}/{{card.unit}}</div>
              </div>
            </div>
            <div class="card-footer d-flex">
              <router-link
                :to="`/product/${card.id}`"
                class="btn btn-outline-secondary btn-sm"
              >
                <i
                  v-if="loddingFile===card.id"
                  class="fas fa-spinner fa-spin"
                ></i>
                查看更多
              </router-link>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto"
                @click="addtoCart(card.id,card.num)"
                :class="{disabled : status===card.id}"
                :disabled="status===card.id ? true : false"
              >
                <i
                  v-if="status===card.id"
                  class="fas fa-spinner fa-spin"
                ></i>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container my-5">
      <div class="form-row">
        <div class="col-md-6">
          <div
            class="bg-cover"
            style="background-image:url(https://images.unsplash.com/photo-1519656919827-59c35dd3ce77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80);height:380px"
          ></div>
        </div>
        <div class="col-md-6">
          <div class="h4 text-primary font-weight-bold d-flex line mt-2">
            <i class="fas fa-mug-hot mr-3"></i>
            <span class="text-dark">最新消息 News</span>
          </div>
          <div class="h-100">
            <h2 class="text-center font-weight-bold mt-4">歡慶開幕</h2>
            <p class="h5 mx-4 coupon_text">
              歡慶開幕，本周全館商品只要輸入優惠碼皆可享有5折優惠。
              <br>優惠碼 : open
            </p>
            <router-link
              class="btn btn-primary coupon_btn"
              to="/productorder"
            >前往選購</router-link>
          </div>
        </div>
      </div>
    </div>
    <drop ref="drop"></drop>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import drop from '../components/drop.vue';

export default {
  data() {
    return {
      loddingFile: '',
    };
  },
  methods: {
    getProducts() {
      this.$store.dispatch('getProducts');
    },
    addtoCart(id, qty = 1) {
      this.$store.dispatch('addtoCart', { id, qty });
    },
  },
  computed: {
    ...mapGetters(['products', 'status']),
  },
  created() {
    this.getProducts();
  },
  components: {
    drop,
  },
};
</script>
<style>
</style>
