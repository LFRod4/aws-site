<template>
  <div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
      <div class="container">
        <ul>
          <li>
            <a v-scroll-to="`#projects`">Projects</a>
          </li>
          <li>
            <a v-scroll-to="`#aboutMe`">About Me</a>
          </li>
          <li>
            <a v-if="!signedIn" v-scroll-to="`#top`" @click="modal(true)"
              >Sign In</a
            >
            <a v-if="signedIn" @click="securedPage()">Private</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    securedPage() {
      this.$router.push("private");
    },
    modal(boolean) {
      this.$store.commit("modal", boolean);
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
