import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';
import '../bus';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [],
    carts: {
      carts: [],
    },
    pagination: {},
    categories: [],
    status: { loaddingFile: '' },
    message: '',
    order: {
      user: {},
    },
  },
  actions: {
    updateLoading(context, status) {
      context.commit('LOADING', status);
    },
    getProducts(context, item = 1) {
      const api = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/products?page=${item}`;
      axios.get(api).then((response) => {
        context.commit('PRODUCT', response.data.products);
        context.commit('CATEGORY', response.data.products);
        context.commit('PAGINATION', response.data.pagination);
      });
    },
    getCart(context) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      axios.get(url).then((response) => {
        context.commit('CARTS', response.data.data);
      });
    },
    addtoCart(context, { id, qty }) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      context.commit('LOADING', id);
      axios.post(url, { data: cart }).then(() => {
        context.dispatch('getCart');
        context.commit('LOADING', '');
      });
    },
    removeCart(context, id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/cart/${id}`;
      context.commit('LOADING', id);
      axios.delete(url).then((response) => {
        context.commit('LOADING', '');
        if (response.data.success) {
          context.dispatch('getCart');
        }
      });
    },
    createdOrder(context, order) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order`;
      axios.post(url, { data: order }).then((response) => {
        if (response.data.success) {
          router.push(`/orderout/${response.data.orderId}`);
        }
      });
    },
    getOrder(context, orderId) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_CUSTOMPATH
      }/order/${orderId}`;
      axios.get(url).then((response) => {
        context.commit('ORDER', response.data.order);
      });
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.status.loaddingFile = payload;
    },
    PRODUCT(state, payload) {
      state.products = [];
      payload.forEach((item) => {
        if (item.is_enabled === 1) {
          state.products.push(item);
        }
      });
    },
    CARTS(state, payload) {
      state.carts = payload;
    },
    CATEGORY(state, payload) {
      const categorie = new Set();
      payload.forEach((item) => {
        categorie.add(item.category);
      });
      state.categories = [...categorie];
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
    },
    MESSAGE(state, payload) {
      state.message = payload;
    },
    ORDER(state, payload) {
      state.order = payload;
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    carts(state) {
      return state.carts;
    },
    status(state) {
      return state.status.loaddingFile;
    },
    categories(state) {
      return state.categories;
    },
    pagination(state) {
      return state.pagination;
    },
  },
});
