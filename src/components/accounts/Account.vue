<template>
<div class="position-relative">
<button type="button" class="btn btn-primary" @click="this.$router.push('/createaccount');">create new account</button>
</div>

 <ol class="list-group list-group-numbered">
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold" @click="this.$router.push('/accounttransaction');">Current account</div>
     NL78INHO123456789
    </div>
    <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem;" >$ 200000.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold" @click="this.$router.push('/accounttransaction');">Saving account</div>
      NL78INHO123456789
    </div>
    <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem;" >$ 230.00</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold" @click="this.$router.push('/accounttransaction');">Saving account</div>
      Iban NL78INHO123456789
    </div>
    <span class="badge bg-primary fs-5 w-auto p-3" style="width: 7rem;" >$ 1300.00</span>
  </li>
</ol>
</template>

<script>
export default {
}
</script>

<style>
</style>