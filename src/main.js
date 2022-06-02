import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import AccountList from './components/accounts/AccountList.vue'
import CreateAccount from './components/accounts/CreateAccount.vue';
import AccountTransactions from './components/accounts/AccountTransactions.vue';
// import TransactionsListTable from './components/transaction/TransactionsListTable.vue';
import Login from "./components/Login.vue";
import UserPage from "./components/users/UserPage.vue";
import EditUserDetails from "./components/users/EditUserDetails.vue";


const routes = [
    { path: '/', component: AccountList },
    { path: '/createaccount', component: CreateAccount },
    { path: "/login", component: Login },
    { path: "/profile", component: UserPage },
    { path: "/accounttransaction/:iban", component: AccountTransactions },
    { path: "/edituser/:id", component: EditUserDetails, props: true  }
    // { path: '/transactionListTable', component: TransactionsListTable }
    

];

const router = createRouter({
    "history": createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');