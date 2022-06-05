<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <router-link v-if="this.$store.getters.isAuthenticated" to="/" class="nav-link" active-class="active"
            >Accounts</router-link>
        </li>      
        <li class="nav-item">
          <router-link v-if="this.$store.getters.isAuthenticated" to="dc" class="nav-link" active-class="active"
            >Create Transactions</router-link
          >
        </li>
        <li class="nav-item">
            <router-link to="/profile" class="nav-link" active-class="active"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link v-if="!this.$store.getters.isAuthenticated" to="/login" class="nav-link" active-class="active"
              >Login</router-link
            >
          </li>
          <li class="nav-item" v-if="this.$store.getters.isAuthenticated">
            <router-link to="/login" @click="this.$store.dispatch('logout')" class="nav-link"
              >Logout</router-link
            >
          </li>
          <li v-if="this.$store.getters.isAuthenticated" class="nav-item">
            <router-link to="/edituser/1" class="nav-link" active-class="active"
              >Edit User</router-link
            >
          </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style>
</style>