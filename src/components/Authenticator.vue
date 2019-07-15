<template>
  <div>
    <div class="modal-container">
      <div class="form-container">
        <div class="field space">
          <div class="control">
            <label class="label">
              <h1 class="title is-size-5" disabled>Sign in to your account</h1>
            </label>
          </div>
        </div>
        <div class="field space">
          <h1 class="is-pulled-left space">Username</h1>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="text"
              placeholder="Username"
              v-model="login"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>
        <div class="field space">
          <h1 class="is-pulled-left space">Password</h1>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </div>
          <p v-if="error" class="help is-danger is-pulled-left error-message">
            {{ error }}
          </p>
        </div>
        <br />
        <div class="field">
          <div class="control">
            <p class="is-size-7 create-account">
              No account?
              <a href="#" class="has-text-primary" @click="changeModal(false)"
                >Create Account</a
              >
            </p>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <a class="button is-primary" @click="signIn">Submit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";

export default {
  name: "Athenticator",
  data() {
    return {
      login: "",
      password: "",
      error: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    changeModal(boolean) {
      this.$store.commit("changeModal", boolean);
    },
    signIn() {
      Auth.signIn(this.login, this.password)
        .then(user => {
          this.$store.commit("signIn", user);
          this.$store.commit("setUser", user);
          this.$store.commit("modal", false);
          console.log(
            "No credentials... You might see this error in console after logging in but this is a AWS Amplify issue at the moment"
          );
        })
        .catch(err => (this.error = err.message));
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
<style scoped>
.modal-container {
  background-color: white;
  height: 350px;
  padding: 20px;
  border-radius: 5px;
  z-index: 99;
}

.form-container {
  width: 80%;
  margin: 20px auto;
  padding: 10px 10px;
}
.button {
  border-radius: 0;
  border: none;
  width: 35%;
}

.input {
  border-width: 1px;
  border-radius: 15px !important;
}
.label {
  font-weight: lighter;
}
</style>
