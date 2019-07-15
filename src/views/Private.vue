<template>
  <div>
    <section class="hero is-fullheight top">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h3 class="subtitle has-text-white is-size-5">Luis Rodriguez</h3>
            </a>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a
                class="navbar-item is-size-5 has-text-primary top-nav"
                @click="moveHome()"
                >Home</a
              >
            </div>
          </div>
        </div>
      </nav>
      <div class="hero-body">
        <div class="card">
          <div class="card-content">
            <p class="title">If you're not first, you're last.</p>
            <p class="subtitle">- Ricky Bobby</p>
            <p class="protected">
              *This is a protected
              <span class="has-text-weight-bold">route</span>/quote/info
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Private",
  data() {
    return {
      showNav: false
    };
  },
  methods: {
    moveHome() {
      this.$router.push("/");
    }
  },
  mounted() {
    if (this.$store.state.user) {
      const jwt = this.$store.state.user
        .getSignInUserSession()
        .getIdToken()
        .getJwtToken();

      const config = {
        headers: {
          authorization: jwt
        }
      };

      axios
        .get(
          "https://c4pumknsvf.execute-api.eu-west-1.amazonaws.com/V1",
          config
        )
        .then(val => (this.info = val))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
.protected {
  font-size: 9px;
  text-align: left;
}
.subtitle {
  text-align: left;
  padding-top: 10px;
}
.card {
  margin: 0 auto;
  border-radius: 5px;
}
.top {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8)
    ),
    url("../assets/images/home-top.jpg");
  background-size: cover;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}
</style>
