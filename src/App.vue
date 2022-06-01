<template>
  <CreateTransactions/>
  <TransactionList />
</template>

<script>
import TransactionList from './components/transactions/TransactionList.vue'
import CreateTransactions from './components/transactions/CreateTransaction.vue'

export default {
  name: 'App',
  components: {
    CreateTransactions,
    TransactionList
  }

}
</script>

<style>

</style>
