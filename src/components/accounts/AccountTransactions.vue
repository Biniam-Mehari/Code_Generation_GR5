<template>
  <ol class="list-group list-group-numbered">
    <li
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        <div class="fw-bold" @click="this.$router.push('/createaccount')">
          Current account
        </div>
        NL78INHO123456789
      </div>
      <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem;" >$ 200000.00</span>
    </li>
  </ol>
  <br>
  <h1>Transactions</h1> 
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
</template>

<script>
export default {
    name: 'Transactions',
    data() {
        return {
            transactions: []
        }
    },
    setSelected()
    {
        //  trigger a mutation, or dispatch an action  
    },
    created() {
        this.transactions = [
            {
                id: 1,
                date: "2020-07-12",
                fromAccount: "NL80INGB3717231707",
                toAccount: "NL70INGB2221802675",
                amount: 500.00,
                accountType: "current"  
            },
            {
                id: 2,
                date: "2020-07-09",
                fromAccount: "NL64ABNA5558975318",
                toAccount: "NL23ABNA7393964341",
                amount: 200.00,
                accountType: "savings"

            },
            {
                id: 3,
                date: "2020-07-09",
                fromAccount: "NL52RABO9893570476",
                toAccount: "NL61INGB3175229417",
                amount: 200.00,
                accountType: "savings"
            }
        ]
    }
}
</script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>