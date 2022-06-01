<template>
    <div class="container">
        <h1>All Transactions</h1>
        <div class="filterDates">
            <label>Enter Start Date: </label>
            <input type="date" name="startdate" id="datetime">
        </div>

        <div>
            <label>Enter End Date: </label>
            <input type="date" name="enddate" id="datetime">
        </div>
        <br />
        <div class="filterAccount">
            <label for="">Filter by IBAN:</label>
            <input type="text" name="IBAN" placeholder="Enter IBAN">
        </div>
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
export default {
    name: 'Transactions',
    data() {
        return {
            transactions: []
        }
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