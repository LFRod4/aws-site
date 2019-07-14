<template>
  <div>
    <div class="modal-container">
      <div class="form-container">
        <div class="field space">
          <div class="control">
            <label class="checkbox">
              <h1 class="title is-size-5">Sign in to your account</h1>
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
          <!-- <p class="help is-danger is-pulled-left">This email is invalid</p> -->
        </div>
        <br />
        <div class="field">
          <div class="control">
            <p class="is-size-7 create-account">
              No account?
              <a href="#" class="has-text-primary">Create Account</a>
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
      password: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
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
        .catch(err => console.log(err));
    },
    confirm() {
      // After retrieveing the confirmation code from the user
      Auth.confirmSignUp(this.login, this.code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true
      })
        .then(data => this.$router.push("/"))
        .catch(err => console.log(err));
    },
    submit() {
      Auth.signUp({
        username: this.login,
        password: this.password,
        attributes: {
          email: this.email
        },
        validationData: [] // optional
      })
        .then(data => (this.user = data.user))
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal-container {
  background-color: white;
  height: 350px;
  padding: 20px;
  border-radius: 5px;
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
