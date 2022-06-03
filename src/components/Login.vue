<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-6 center">
          <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <form>
            <div class="mb-3">
              <label for="inputUsername" class="form-label">Username</label>
              <input
                id="inputUsername"
                type="text"
                class="form-control"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="inputPassword" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                v-model="password"
              />
            </div>
            <div class="">
              <button type="button" @click="login()" class="btn btn-outline-primary mr-1">
                Login
              </button>
              <button type="button" @click="register()" class="btn btn-outline-secondary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: null,
    };
  },
  methods: {
    // login through a store action
    login() {
      
    },
    // register through a store action
    register() {},
  },
};
</script>

<style scoped>
body {
  text-align: center;
}
</style>