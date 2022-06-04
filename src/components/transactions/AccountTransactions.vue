<template>
  <div class="container">
    <ol class="list-group list-group-numbered">
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{account.accountType}}</div>
          {{account.iban}}
        </div>
        <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem"
          >{{account.currentBalance}}</span
        >
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
      <button type="button" class="btn btn-success" @click="filtterByDate()">Search</button>
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
      <button type="button" class="btn btn-success" @click="filtterByAmount()">Search</button>
    </form>
    <label>error message</label>
    <br />
    <table>
      <tr>
        <th>Datetime</th>
        <th>From Account</th>
        <th>Transfered To</th>
        <th>Amount</th>
        <th>Account Type</th>
      </tr>
      <tr :key="transaction.id" v-for="transaction in transactions">
        <td>{{ transaction.date }}</td>
        <td>{{ transaction.fromAccount }}</td>
        <td>{{ transaction.toAccount }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.accountType }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "Transactions",
  data() {
    return {
      transactions: [
        {
          id: null,
          date: null,
          fromAccount: null,
          toAccount: null,
          amount: null,
          accountType: null,
        },
      ],
      account: {
        absoluteLimit: null,
        accountId: null,
        accountType:null,
        currentBalance: null,
        iban: null,
      },
    };
  },
  setSelected() {
    //  trigger a mutation, or dispatch an action
  },
  // created() {
  //     this.transactions = [
  //         {
  //             id: null,
  //             date: null,
  //             fromAccount: null,
  //             toAccount: null,
  //             amount: null,
  //             accountType: null
  //         },
  //         {
  //             id: 2,
  //             date: "2020-07-09",
  //             fromAccount: "NL64ABNA5558975318",
  //             toAccount: "NL23ABNA7393964341",
  //             amount: 200.00,
  //             accountType: "savings"

  //         },
  //         {
  //             id: 3,
  //             date: "2020-07-09",
  //             fromAccount: "NL52RABO9893570476",
  //             toAccount: "NL61INGB3175229417",
  //             amount: 200.00,
  //             accountType: "savings"
  //         }
  //     ]
  // },

  methods:{
filtterByDate(){

},
filtterByAmount(){
    
}
  },

  mounted() {
    axios
      .get("/accounts/1")
      .then((res) => {
        this.account = res.data;
      })
      .catch((error) => console.log(error));

    axios
      .get("/bankAPI/users/2/totalBalance")
      .then((res) => {
        this.totalBalance = res.data;
      })
      .catch((error) => console.log(error));
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