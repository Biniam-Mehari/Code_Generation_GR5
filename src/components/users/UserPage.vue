<template>
  <h1>This is the userdetails page</h1>

  <!-- make a card with user object information -->
  <div class="container">
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
export default {
  name: "Login",
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
    editUser(id) {
      this.$router.push("/edituser/" + id);
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>