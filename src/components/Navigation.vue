<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container">
      <div class="row container-fluid">
        <ul class="col w-75 navbar-nav me-auto mr-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link" active-class="active"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/profile" class="nav-link" active-class="active"
              >Profile</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" active-class="active"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/edituser/1" class="nav-link" active-class="active"
              >Edit User</router-link
            >
          </li>
        </ul>
      </div>
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