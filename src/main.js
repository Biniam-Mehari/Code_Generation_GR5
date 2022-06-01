import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Account from './components/accounts/Account.vue'
import CreateAccount from './components/accounts/CreateAccount.vue';
// import ProductList from './components/products/ProductList.vue';
// import CreateProduct from './components/products/CreateProduct.vue';
// import EditProduct from './components/products/EditProduct.vue';


const routes = [
    { path: '/', component: Account },
    { path: '/createaccount', component: CreateAccount },
    // { path: '/createproduct', component: CreateProduct },
    // { path: '/editproduct/:id', component: EditProduct, props: true  }
];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');