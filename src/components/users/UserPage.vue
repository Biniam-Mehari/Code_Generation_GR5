<template>
  <h1>This is the userdetails page</h1>

  <!-- make a card with user object information -->
  <div v-if="this.user" class="container">
    <!-- User Details Card -->
    <div class="card-wrapper">
      <!-- BG -->
      <div class="card-wrapper__bg">
        <div class="card-wrapper__cover-bg"></div>
        <div class="card-wrapper__profile-pic">
          <img src="https://pickaface.net/assets/images/slides/slide4.png" />
        </div>
      </div>
      <!-- card details -->
      <div class="card-wrapper__details">
        <!-- First Fold -->
        <div class="card-wrapper__user-details">
          <div class="text-center card-wrapper__user-name">
            {{ user.fullname }}
          </div>
          <div
            class="
              text-center
              card-wrapper__designation card-wrapper__user-detail
            "
          >
            {{ user.role }}
          </div>
        </div>
        <!-- Second Fold -->
        <div class="card-wrapper__user-contact-info-wrapper text-center">
          <!-- email details -->
          <div
            class="
              card-wrapper__user-contact-info
              card-wrapper__user-contact-info--email
            "
          >
            <div class="card-wrapper__user-contact-info-label">Username</div>
            <div class="card-wrapper__user-contact-info-value">
              {{ user.username }}
            </div>
          </div>
          <!-- phone details -->
          <div
            class="
              card-wrapper__user-contact-info
              card-wrapper__user-contact-info--email
            "
          >
            <div class="card-wrapper__user-contact-info-label">Day Limit</div>
            <div class="card-wrapper__user-contact-info-value">
              {{ user.dayLimit }}
            </div>
          </div>
          <div
            class="
              card-wrapper__user-contact-info
              card-wrapper__user-contact-info--email
            "
          >
            <div class="card-wrapper__user-contact-info-label">
              Transaction Limit
            </div>
            <div class="card-wrapper__user-contact-info-value">
              {{ user.transactionLimit }}
            </div>
          </div>
          <div
            class="
              card-wrapper__user-contact-info
              card-wrapper__user-contact-info--email
            "
          >
            <div class="card-wrapper__user-contact-info-label">
              Remaining Day Limit
            </div>
            <div class="card-wrapper__user-contact-info-value">
              {{ user.remainingDayLimit }}
            </div>
          </div>
        </div>
      </div>
      <!-- create edit button -->
      <button type="button" class="btn btn-primary center" @click="editUser(user.userId)">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "Login",
  data() {
    return {
      // user: {
      //   userId: "",
      //   username: "",
      //   fullname: "",
      //   roles: [],
      //   dayLimit: 0.00,
      //   transactionLimit: 0.00,
      //   remainingDayLimit: 0.00,
      // },
      user: null,
    };
  },
  methods: {
    editUser(id) {
      this.$router.push("/edituser/" + id);
    },
  },
  mounted() {
    // check if token is present in session storage
    if (sessionStorage.getItem("token")) {
      // set the axios default header
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + sessionStorage.getItem("token");

      // get user info
      axios
        .get("/users/loggedInUser")
        .then((result) => {
          this.user = result.data;
          // store result data in user object
          // this.user.userId = result.data.userId;
          // this.user.username = result.data.username;
          // this.user.fullname = result.data.fullname;
          // this.user.roles = result.data.roles;
          // this.user.dayLimit = result.data.dayLimit;
          // this.user.transactionLimit = result.data.transactionLimit;
          // this.user.remainingDayLimit = result.data.remainingDayLimit;
        })
        .catch((error) => {
          this.errorMessage = error.result.data.message;
        });
    }
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>