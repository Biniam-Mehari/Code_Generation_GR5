<template>
  <div v-if="this.$store.getters.isAuthenticated" class="container">
    <!-- toggle that changes withoutAccount-->
    <div class="form-group">
      <label for="toggle">Without Account</label>
      <input
        id="checkbox"
        type="checkbox"
        class="form-control"
        @click="changeWithoutAccount"
      />
    </div>

    <!-- table with all objects in users -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th># id</th>
          <th>Fullname</th>
          <th>Role</th>
          <th>Day Limit</th>
          <th>Transaction Limit</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.userId">
          <td>{{ user.userId }}</td>
          <td>{{ user.fullname }}</td>
          <td>{{ user.roles }}</td>
          <td>{{ user.dayLimit }}</td>
          <td>{{ user.transactionLimit }}</td>
          <td>
            
         <button class="btn btn-info" @click="editUser(user.userId)">
              Edit
            </button>
             <div class="divider" />
            <button class="btn btn-danger" @click="deleteUser(user.userId)">
              Delete
            </button>
      
          </td>
        </tr>
      </tbody>
    </table>
    <!-- pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" @click="toPreviousPage()">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changePage(0)">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changePage(1)">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changePage(2)">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changePage(3)">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" @click="changePage(4)">5</a>
        </li>
        <li class="page-item" @click="toNextPage()">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else class="container">
    <div class="alert alert-info">
      <h4>You are not logged in</h4>
      <p>Please click the button to login.</p>
      <router-link to="/login">
        <button type="button" class="btn btn-primary">Login here</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "UsersList",
  data() {
    return {
      id: 0,
      users: [],
      page: 0,
      withoutAccount: 0,
    };
  },
  methods: {
    toNextPage() {
      this.page++;
      this.getUsers();
    },
    toPreviousPage() {
      if(this.page > 0) {
        this.page--;
        this.getUsers();
      }
    },
    changeWithoutAccount() {
      // if checkbox is checked, set withoutAccount to 1
      if (document.getElementById("checkbox").checked) {
        this.withoutAccount = 1;
      } else {
        // if checkbox is unchecked, set withoutAccount to 0
        this.withoutAccount = 0;
      }
    },
    changePage(page) {
      this.page = page;
      this.getUsers();
    },
    editUser(id) {
      this.$router.push("/edituser/" + id);
    },
    deleteUser(id) {
      this.$router.push("/edituser/" + id);
    },
    getUsers() {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("token");
      axios
        .get(
          "/users" +
            "?skip=" +
            this.page * 10 +
            "&limit=10" +
            "&withOutAccount=" +
            this.withoutAccount
        )
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("token");
    axios
      .get(
        "/users" +
          "?skip=" +
          this.page * 10 +
          "&limit=10" +
          "&withOutAccount=" +
          this.withoutAccount
      )
      .then((response) => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>