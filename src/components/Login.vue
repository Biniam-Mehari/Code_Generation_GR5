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
                @change="showLog()"
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
import axios from '../axios-auth';
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    showLog() {
      console.log(this.username);
    },
    // login through a store action
    login() {
      axios.post("/users/login", { 
        username: this.username, 
        password: this.password 
        })
        .then(result => {
          axios.defaults.headers.common['Authorization'] = "Bearer" + result.data.token;
          this.$router.push("/");
          //alert(result.data.token);
        })
        .catch(error => {
          this.errorMessage = error.result.data.message;
        });
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