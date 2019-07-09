<template>
  <div class="hello">
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  name: "Athenticator",
  data() {
    return {};
  },
  props: {
    msg: String
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
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.commit("checkSignedIn", true);
        this.$store.commit("checkLogIn", false);
      } catch (err) {
        this.$store.commit("checkSignedIn", false);
      }
    }
  },
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
