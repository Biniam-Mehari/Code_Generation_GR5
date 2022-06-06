<template>
<div class="container" v-if="this.$store.getters.isAuthenticated">
  <form action="">
    <div class="container px-3">
      <h3>Create new account</h3>

      <label for="userid">User-Id </label>
      <div class="divider" />
      <input class="userid" type="text" v-model="userid" />

      <br /><br />

      <label for="dropdown">Type of account </label>

      <div class="divider" />
      <select v-model="selectedType">
        <option v-for="type in accountType" :key="type">{{ type }}</option>
      </select>

      <br /><br />

      <button type="button" margin-right="10px" class="btn btn-success" @click="createAccount()">
        Create
      </button>
      <div class="divider" />
      <button
        type="button"
        class="btn btn-danger"
        @click="this.$router.push('/')"
      >
        Cancel
      </button>
    </div>
  </form>
  <label>{{message}}</label>
  </div>
  <!-- v-else -->
  <div v-else class="container">
    <div class="alert alert-info">
      <h4>You are not logged in</h4>
        <p>Please click the button to login. </p>
        <router-link to="/login">
          <button type="button" class="btn btn-primary">Login here</button>
        </router-link>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  data() {
    return {
      accountType: ["current", "saving"],
      selectedType: null,
      userid: null,
      message:null,
    };
  },

  methods: {
    createAccount() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .post("/accounts",{accountType: this.selectedType,userId:this.userid})
        .catch((error) =>this.message=error.message);
    },
  },
};
</script>

<style>
.divider {
  width: 8px;
  height: auto;
  display: inline-block;
}
</style>