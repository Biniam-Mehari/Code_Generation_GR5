<template>
  <div class="container" v-if="this.$store.getters.isAuthenticated">
    <div class="position-relative">
      <button
        type="button"
        class="btn btn-primary"
        @click="this.$router.push('/createaccount')"
      >
        Create Account
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
        <div class="ms-2 me-auto" @click="showTransaction(account.IBAN)">
          <div class="fw-bold">
            {{ account.accountType }}
          </div>
          {{ account.IBAN }}
        </div>
        <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem"
          >{{ account.currency }} {{ account.currentBalance }}</span
        >
      </li>
    </ol>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "AccountList",

  props: {
    iban: String,
  },
  data() {
    return {
      accounts: [],
      user: [],
     
      totalBalance: null,
    };
  },

  methods: {
    // getTransaction(iban) {
    //   this.$router.push("/accounttransaction/" + iban);
    // },

    showTransaction(iban) {
      this.$router.push("/accounttransaction/" + iban);
    },
  },
  mounted() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get("/users/" + this.$store.state.loggedInUser.userId)
      .then((res) => {
        this.user = res.data;
        // this.accounts.accountId = res.data.accountId;
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    axios
      .get("/users/" + this.$store.state.loggedInUser.userId + "/accounts")
      .then((res) => {
        this.accounts = res.data;
        // this.accounts.accountId = res.data.accountId;
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("/users/" + this.$store.state.loggedInUser.userId + "/totalBalance")
      .then((res) => {
        this.totalBalance = res.data.totalBalance;
        console.log(res.data);
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