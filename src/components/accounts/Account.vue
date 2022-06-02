<template>

  <div class="ms-2 me-auto">
        <div class="fw-bold" @click="this.$router.push('/accounttransaction/' + iban)">
         {{account.accountType}}
        </div>
        {{iban}}
      </div>
      <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem"
        >{{account.currency}} {{account.balance}}</span
      >
   
</template>

<script>
export default {
    name: "Account",
    props: {
        account: Object
    }

}
</script>

<style>

</style>