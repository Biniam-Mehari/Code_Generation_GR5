<template>
<div class="container">
  <div class="position-relative">
    <button
      type="button"
      class="btn btn-primary"
      @click="this.$router.push('/createaccount')">
      create new account
    </button>
   <div>
     <label>Total balance:</label>
      <label>100000</label>
   </div>
  </div>
 <br>
  <ol class="list-group list-group-numbered">
    <li
      class="list-group-item d-flex justify-content-between align-items-start" v-for="account in accounts" :key="account.accountType">
      <div class="ms-2 me-auto">
        <div class="fw-bold" @click="this.$router.push('/accounttransaction/' + account.iban)">
         {{account.accountType}}
        </div>
        {{account.iban}}
      </div>
      <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem"
        >{{account.currency}} {{account.balance}}</span
      >
    <account-info  :account="accounts" />
    </li>
  </ol>
  </div>
</template>

<script>
import AccountInfo from "./AccountList.vue";
export default {
  name: "AccountList",
  components: {
    AccountInfo,
  },
  data() {
    return {
      accounts: [
        {
          accountType: "Current",
          iban: "NL78INHO123456789",
          balance: 2000.0,
          currency: "€",
        },
        {
          accountType: "Saving",
          iban: "NL78INHO123456759",
          balance: 300.0,
          currency: "€",
        },
        {
          accountType: "Saving",
          iban: "NL78INHO123456780",
          balance: 1550.0,
          currency: "€",
        },
      ],
    };
  },

  methods: {
      getTransaction(iban){
          this.$router.push('/accounttransaction/' + iban)
      }

      // getAccounts(){
      //   axios .get("http://localhost:8089/bankAPI/users/2/accounts")
      //   .then((result) => {
      //     console.log(result);
      //     this.accounts=result.data;
      //   })
      //   .catch((error) => console.log(error));

      // },
  }

  
};

</script>

<style>
</style>