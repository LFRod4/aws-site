<template>
  <div class="hello">
    <div v-if="!signedIn">
      <amplify-authenticator></amplify-authenticator>
    </div>
    <div v-if="signedIn">
      <amplify-sign-out></amplify-sign-out>
    </div>
    {{ signedIn }}
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
      } else {
        this.$store.state.signedIn = false;
      }
    });
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.$store.state.signedIn = true;
      } catch (err) {
        this.$store.state.signedIn = false;
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
