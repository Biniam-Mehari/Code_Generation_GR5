<template>
  <div class="container">
    <div class="position-relative">
      <button
        type="button"
        class="btn btn-primary"
        @click="this.$router.push('/createaccount')"
      >
        create new account
      </button>
      <div>
        <label>Total balance:</label>
        <div class="divider" />
        <label>{{ totalBalance }}</label>
      </div>
    </div>
    <br />
    <ol class="list-group list-group-numbered">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        v-for="account in accounts"
        :key="account.accountType"
      >
        <div class="ms-2 me-auto">
          <div
            class="fw-bold"
            @click="this.$router.push('/accounttransaction/' + account.iban)"
          >
            {{ account.accountType }}
          </div>
          {{ account.iban }}
        </div>
        <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem"
          >{{ account.currency }} {{ account.balance }}</span
        >
        <account-info :account="accounts" />
      </li>
    </ol>
  </div>
</template>

<script>
import AccountInfo from "./AccountList.vue";
import axios from "../../axios-auth";
export default {
  name: "AccountList",
  components: {
    AccountInfo,
  },
  data() {
    return {
      accounts: [
        {
          absoluteLimit: null,
          accountId: 0,
          accountType: null,
          currentBalance: 0,
          iban: null,
          userId: null,
        },
      ],

      totalBalance: null,
    };
  },

  methods: {
    getTransaction(iban) {
      this.$router.push("/accounttransaction/" + iban);
    },
  },
  mounted() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get("/users/" + this.$store.state.loggedInUser.userId + "/accounts")
      .then((res) => {
        this.accounts = res.data;
        this.accounts.accountId = res.data.accountId;
        console.log( res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("/users/" + this.$store.state.loggedInUser.userId + "/totalBalance")
      .then((res) => {
        this.totalBalance = res.data.totalBalance;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.divider {
  width: 8px;
  height: auto;
  display: inline-block;
}
</style>