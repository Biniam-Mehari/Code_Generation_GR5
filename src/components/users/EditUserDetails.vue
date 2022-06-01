<template>
  <section>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit a user</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Username</span>
          <input type="text" class="form-control" v-model="product.name" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Fullname</span>
          <input type="number" class="form-control" v-model="user.fullname" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">role</span>
          <select class="form-control" v-model="user.role">
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Day Limit</span>
          <input type="text" class="form-control" v-model="product.image" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Transaction Limit</span>
          <input
            type="text"
            class="form-control"
            v-model="user.transactionLimit"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Remaining Day-Limit</span>
          <input
            type="text"
            class="form-control"
            v-model="user.remainingDayLimit"
          />
        </div>

        <div class="input-group mt-4">
          <button
            type="button"
            class="btn btn-primary"
            @click="editUser"
          >
            Save changes
          </button>

          <button class="btn btn-danger" @click="deleteUser(user.id)">
            Delete
          </button>

          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/profile')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "EditUserDetails",
  props: {
    //id: Number,
  },
  data() {
    return {
      user: {
        userId: "1",
        username: "john12",
        password: "******",
        fullname: "John Doe",
        role: "admin",
        dayLimit: "2000.00",
        transactionLimit: "500.00",
        remainingDayLimit: "2000.00",
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
  mounted() {
    // axios
    //   .get("/users/" + this.id)
    //   .then((result) => {
    //     console.log(result);
    //     this.user = result.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>