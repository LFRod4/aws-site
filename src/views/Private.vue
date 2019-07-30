<template>
  <div class="page">
    <section class="hero is-fullheight top">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h3 class="subtitle has-text-white is-size-5">Luis Rodriguez</h3>
            </a>
            <span
              class="navbar-burger burger has-text-white"
              data-target="navbarMenuHeroA"
              v-on:click="showNav = !showNav"
              :class="{ 'is-active': showNav }"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div
            id="navbarMenuHeroA"
            class="navbar-menu"
            v-bind:class="{ 'is-active': showNav }"
          >
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
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  name: "Private",
  data() {
    return {
      info: "",
      showNav: false
    };
  },
  methods: {
    moveHome() {
      this.$router.push("/");
    },
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.commit("checkSignedIn", true);
        this.$store.commit("modal", false);
        this.$store.commit("checkUser", user);
      } catch (err) {
        this.$store.commit("checkSignedIn", false);
        this.$store.commit("checkUser", null);
      }
    }
  },
  created() {
    this.findUser();

    AmplifyEventBus.$on("authState", info => {
      if (info === "signedIn") {
        this.findUser();
        this.$store.commit("checkSignedIn", true);
      } else {
        this.$store.commit("checkSignedIn", false);
      }
    });
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
          "https://zv30nmh3e2.execute-api.us-west-2.amazonaws.com/v1",
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
