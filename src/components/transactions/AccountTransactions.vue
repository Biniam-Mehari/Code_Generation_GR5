<template>
  <div class="container">
    <ol class="list-group list-group-numbered">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ account.accountType }}</div>
          {{ this.IBAN }}
        </div>
        <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem">{{
          account.currentBalance
        }}</span>
      </li>
    </ol>
    <br />
    <h1>Transactions</h1>
    <form action="">
      <label>Start date: </label>
      <div class="divider" />
      <input type="date" />
      <div class="divider" />
      <div class="divider" />
      <label>Start date: </label>
      <div class="divider" />
      <input type="date" />
      <div class="divider" />
      <div class="divider" />
      <button type="button" class="btn btn-success" @click="filtterByDate()">
        Search
      </button>
    </form>
    <br />
    <form action="">
      <label>Amount: </label>
      <div class="divider" />
      <input type="text" />
      <div class="divider" />
      <div class="divider" />
      <label>based on: </label>
      <div class="divider" />
      <input type="text" placeholder="<, = , >" />
      <div class="divider" />
      <button type="button" class="btn btn-success" @click="filtterByAmount()">
        Search
      </button>
    </form>
    <label>{{ errorMessage }}</label>
    <br />
    <table>
      <tr>
        <th>Datetime</th>
        <th>From Account</th>
        <th>Transfered To</th>
        <th>Amount</th>
        <th>Transaction Type</th>
      </tr>
      <tr :key="transaction.id" v-for="transaction in transactions">
        <td>{{ transaction.timestamp }}</td>
        <td>{{ transaction.fromAccount }}</td>
        <td>{{ transaction.toAccount }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.transactionType }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "Transactions",
    props: {
    IBAN: String,
  },
  data() {
    return {
      transactions: [],
      account: [],
      errorMessage: null,

      startdate:"2022-06-04"
    };
  },
  

  methods: {
    filtterByDate() {},
    filtterByAmount() {},
  },

  mounted() {
    // axios
    //   .get("/accounts/1")
    //   .then((res) => {
    //     this.account = res.data;
    //   })
    //   .catch((error) => console.log(error));
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get("/accounts/NL21INHO0123400001/transactions?startDate="+this.startdate+"&endDate=2024-06-04&skip=0&limit=5")
      .then((res) => {
        this.transactions = res.data;
      })
      .catch((error) => {
        this.errorMessage = error;
        console.log(error);
      });
  },
};
</script>
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.divider {
  width: 8px;
  height: auto;
  display: inline-block;
}
</style>