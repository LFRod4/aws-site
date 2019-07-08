<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="button is-large is-primary">Hello</button>
    <amplify-sign-out></amplify-sign-out>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: ""
    };
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
