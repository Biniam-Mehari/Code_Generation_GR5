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

          <input type="button" class="btn btn-primary" value="Transfer Funds"/>
          <input type="button" class="btn btn-danger" value="Cancel" />
          <input type="button" class="btn btn-info" value="List Transaction"/>
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
            date: '',
            fromAccount: '',
            toAccount: '',
            amount: '',
            accountType: ''  
        }
    },
    onSubmit(e) {
        e.preventDefault()

        if(!this.date || !this.fromAccount
        || !this.toAccount || !this.amount
        || !this.accountType) {
            alert('One of the field is empty!');
            return
        }

        const newTransaction = {
          date: this.date,
          fromAccount: this.fromAccount,
          toAccount: this.toAccount,
          amount: this.amount,
          accountType: this.accountType
        }

        this.$emit('add-transaction', newTransaction)
    },

    onCancel(e) {
      e.preventDefault()

      this.date = '',
      this.fromAccount = '',
      this.toAccount = '',
      this.amount = '',
      this.accountType = ''
    }

}
</script>

<style>

</style>