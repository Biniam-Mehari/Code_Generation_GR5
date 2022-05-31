<template>
    <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Create a transaction</h2>

        <div class="input-group mb-3">
          <span class="input-group-text">From account</span>
          <input type="text" class="form-control" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">To account</span>
          <input type="number" class="form-control" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Amount in €:</span>
          <input type="text" class="form-control" />
        </div>

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary">Transfer</button>
          <button type="button" class="btn btn-danger">Cancel</button>
          <button type="button" class="btn btn-info">List all transactions</button>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
// if cancel button pressed then clear the textareas and values
export default {
    name: 'AddTransactions',
    data() {
        return {
            "id": '',
            "fromAccount": '',
            "toAccount": '',
            "amount": '',
            "timestamp": ''
        }
    }

}
</script>

<style>

</style>