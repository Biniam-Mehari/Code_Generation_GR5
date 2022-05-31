<template>
    <h1>All Transactions</h1>

    <table>
        <tr>
            <th>From Account</th>
            <th>Transfered To</th>
            <th>Amount</th>
            <th>Datetime</th>
        </tr>
        <tr>
            <td>2020-11-23</td>
            <td>NL07ABNA2847123288</td>
            <td>NL70INGB2221802675</td>
            <td>200.00</td>
        </tr>

        <tr>
            <td>2020-12-12</td>
            <td>NL64ABNA5558975318</td>
            <td>NL23ABNA7393964341</td>
            <td>400.00</td>
        </tr>

        <tr>
            <td>2021-02-02</td>
            <td>NL23ABNA7393964341</td>
            <td>NL55RABO4886189474</td>
            <td>500.00</td>
        </tr>
    </table>
</template>

<script>

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