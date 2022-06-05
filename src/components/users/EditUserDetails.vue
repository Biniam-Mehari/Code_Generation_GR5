<template>
  <section>
    <div v-if="this.$store.getters.isAuthenticated" class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit a user</h2>

        <div v-if="!this.$store.getters.isAdmin || this.$store.state.loggedInUser.userId == this.id" class="input-group mb-3">
          <span class="input-group-text">Fullname</span>
          <input
            type="text"
            class="form-control"
            v-model="changedUser.fullname"
          />
        </div>

        <div v-if="!this.$store.getters.isAdmin || this.$store.state.loggedInUser.userId == this.id" class="input-group mb-3">
          <span class="input-group-text">Password</span>
          <input
            type="password"
            class="form-control"
            v-model="changedUser.password"
          />
        </div>

        <div v-if="this.$store.getters.isAdmin" class="input-group mb-3">
          <span class="input-group-text">role</span>
          <select class="form-control">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <div v-if="this.$store.getters.isAdmin" class="input-group mb-3">
          <span class="input-group-text">Day Limit</span>
          <input
            type="text"
            class="form-control"
            v-model="changedUser.dayLimit"
          />
        </div>

        <div v-if="this.$store.getters.isAdmin" class="input-group mb-3">
          <span class="input-group-text">Transaction Limit</span>
          <input
            type="text"
            class="form-control"
            v-model="changedUser.transactionLimit"
          />
        </div>

        <div class="input-group mt-4">
          <button type="button" class="btn btn-primary" @click="editUser">
            Save changes
          </button>

          <button v-if="this.$store.getters.isAdmin" class="btn btn-danger" @click="deleteUser(changedUser.userId)">
            Delete
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            @click="this.$router.push('/profile')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    <div v-else class="container">
    <div class="alert alert-info">
      <h4>You are not logged in</h4>
        <p>Please click the button to login. </p>
        <router-link to="/login">
          <button type="button" class="btn btn-primary">Login here</button>
        </router-link>
    </div>
  </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "EditUserDetails",
  data() {
    return {
      id: "",
      changedUser: {
        userId: 0,
        fullname: "",
        password: "",
        roles: [],
        dayLimit: 0.0,
        transactionLimit: 0.0,
        remainingDayLimit: 0.0,
      },
    };
  },
  methods: {
    editUser() {
      //   axios
      //     .put("/users/" + this.user.id, this.user)
      //     .then((result) => {
      //       console.log(result.data);
      //       this.$refs.form.reset();
      //       this.$router.push("/profile");
      //     })
      //     .catch((error) => console.log(error));
    },
    deleteUser(id) {
      String(id);
      //   axios
      //     .delete("/products/" + id)
      //     .then((result) => {
      //       console.log(result);
      //       this.$emit("update");
      //     })
      //     .catch((error) => console.log(error));
      // use axios to delete the product
    },
  },
  created() {
    this.id = this.$route.params.id;
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get("/users/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.changedUser.userId = response.data.userId;
        this.changedUser.fullname = response.data.fullname;
        this.changedUser.roles = response.data.roles;
        this.changedUser.dayLimit = response.data.dayLimit;
        this.changedUser.transactionLimit = response.data.transactionLimit;
        this.changedUser.remainingDayLimit = response.data.remainingDayLimit;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>