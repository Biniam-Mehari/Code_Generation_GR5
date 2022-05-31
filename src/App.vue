<template>
  <CreateTransactions />
  <br>
  <br>
  <br>
  <TransactionList />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import CreateTransactions from './components/transactions/CreateTransaction.vue'
import TransactionList from './components/transactions/TransactionList.vue'
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
