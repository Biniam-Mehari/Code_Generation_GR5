<template>
    <section v-if="this.$store.getters.isAuthenticated">
    <div class="container" >
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Create a transaction</h2>

        <div class="input-group mb-3">
          <span class="input-group-text">From account</span>
          <input type="text" class="form-control" v-model="fromAccount" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">To account</span>
          <input type="text" class="form-control" v-model="toAccount"/>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Transaction Type:</span>
           <select v-model="selectTransactionType">
                <option v-for="type in transactionTypes" :key="type">{{ type }}</option>
            </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Amount in €:</span>
          <input type="text" class="form-control" v-model="amount"/>
        </div>
        

          <input type="button" class="btn btn-primary" value="TransferFunds" @click="createTransaction()"/>
          <input type="button" class="btn btn-danger" value="Cancel" @click="cancelTransaction()"/>
      </form>

      <label>
          {{ result }}
      </label>

    </div>
  </section>
  <!-- v-else -->
  <div v-else class="container">
    <div class="alert alert-info">
      <h4>You are not logged in</h4>
        <p>Please click the button to login. </p>
        <router-link to="/login">
          <button type="button" class="btn btn-primary">Login here</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth"
export default {
    name: 'AddTransactions',
    data() {
        return {
            fromAccount: '',
            toAccount: '',
            transactionTypes: ["withdraw", "deposit", "transfer"],
            amount: '',
            selectTransactionType: null,
            
        }
    },
    methods: {
        createTransaction() {
          axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");

          axios.post("/transactions", {fromAccount: this.fromAccount, toAccount: this.toAccount, amount: this.amount, transactionType: this.selectTransactionType})
          .then((res) => {
              this.result = res.data;
            // this.accounts.accountId = res.data.accountId;
              console.log(res.data);
          })
          .catch((error) => this.message=error.message)

        },
        cancelTransaction() {
          axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");

          this.fromAccount = '',
          this.toAccount = '',
          this.transactionTypes = '',
          this.amount = '',
          this.date = ''
        }
    }

}
</script>

<style>

</style>