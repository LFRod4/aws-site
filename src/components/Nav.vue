<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h3 class="subtitle has-text-white is-size-5">Luis Rodriguez</h3>
          </a>
          <span
            class="navbar-burger burger has-text-primary"
            data-target="navbarMenuHeroA"
            v-on:click="showNav = !showNav"
            :class="{ 'is-active': showNav }"
          >
            <span></span>
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
              class="navbar-item is-size-5 has-text-white top-nav"
              v-scroll-to="`#projects`"
              >Projects</a
            >
            <a
              class="navbar-item is-size-5 has-text-white top-nav"
              v-scroll-to="`#aboutMe`"
              >About Me</a
            >
            <a
              v-if="signedIn"
              class="navbar-item is-size-5 has-text-primary top-nav"
              @click="securedPage()"
              >Private</a
            >
            <a
              v-if="!signedIn"
              class="navbar-item is-size-5 has-text-white top-nav"
              @click="modal(true)"
              >Log In</a
            >
            <a
              v-if="signedIn"
              @click="signOut()"
              class="navbar-item is-size-5 has-text-white top-nav"
              >Sign Out</a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "Nav",
  data: function() {
    return {
      info: "",
      showNav: false,
      frontCard: true
    };
  },
  methods: {
    securedPage() {
      this.$router.push("private");
    },
    modal(boolean) {
      this.$store.commit("modal", boolean);
    },
    signOut() {
      Auth.signOut()
        .then(data => {
          this.$store.state.signedIn = !!data;
        })
        .catch(err => console.log(err));
    }
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    }
  }
};
</script>

<style lang="scss" scoped></style>
