<template>
  
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UsersList",
  data() {
    return {
      id: 0,
      users: [],
      page: 1,
    };
  },
  methods: {
    editUser(id) {
      this.$router.push("/edituser/" + id);
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