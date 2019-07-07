<template>
  <div class="hello">
    <amplify-authenticator></amplify-authenticator>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  name: "Athenticator",
  data() {
    return {
      signedIn: false
    };
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
        this.signedIn = false;
      }
    });
  },
  methods: {
    async findUser() {
      try {
        const user = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
      } catch (err) {
        this.signedIn = false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
