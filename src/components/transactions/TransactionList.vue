<template>
    <div class="container">
        <h1>All Transactions</h1>
        <div class="filterDates">
            <label>Filter transactions: </label>
            <input type="date" name="filterdate" id="datetime">
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
            <tr>
                <td>2020-11-23</td>
                <td>NL07ABNA2847123288</td>
                <td>NL70INGB2221802675</td>
                <td>200.00</td>
                <td>Savings</td>
            </tr>

            <tr>
                <td></td>
                <td>NL64ABNA5558975318</td>
                <td>NL23ABNA7393964341</td>
                <td>400.00</td>
                <td>Current</td>
            </tr>

            <tr>
                <td>2021-02-02</td>
                <td>NL23ABNA7393964341</td>
                <td>NL55RABO4886189474</td>
                <td>500.00</td>
                <td>Current</td>
            </tr>

            <tr>
                <td>2021-02-02</td>
                <td>NL52RABO9893570476</td>
                <td>NL61INGB3175229417</td>
                <td>700.00</td>
                <td>Current</td>
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
                fromAccount: "",
                toAccount: "NL70INGB2221802675",
                amount: 500.00,
                accountType: "current"  
            },
            {
                id: 2,
                date: "2020-07-09",
                fromAccount: ""
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