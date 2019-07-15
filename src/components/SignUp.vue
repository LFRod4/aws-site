<template>
  <div>
    <!-- <div v-if="!user">
      <h1>Sign Up</h1>
      <input v-model="login" type="text" placeholder="Login" />
      <br />
      <input v-model="password" type="password" placeholder="Password" />
      <br />
      <input v-model="email" type="email" placeholder="Email" />
      <br />
      <button @click="submit">Submit</button>
    </div>
    <div v-if="user">
      <h2>Confirm Sign Up</h2>
      <input v-model="code" type="text" placeholder="Code" />
      <br />
      <button @click="confirm">Submit</button>
    </div>-->

    <div class="modal-container">
      <div class="form-container">
        <div v-if="!user">
          <div class="field">
            <div class="control">
              <label class="checkbox">
                <h1 class="title is-size-5">Sign up</h1>
              </label>
            </div>
          </div>
          <div class="field">
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
          <div class="field">
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
          </div>
          <div class="field">
            <h1 class="is-pulled-left space">Email</h1>
            <div class="control has-icons-left has-icons-right">
              <input
                class="input"
                type="text"
                placeholder="Email"
                v-model="email"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
            <p v-if="error" class="help is-danger is-pulled-left error-message">
              {{ error }}
            </p>
          </div>
          <br />
          <div class="field">
            <div class="control">
              <a class="button is-primary" @click="submit()">Submit</a>
            </div>
          </div>
        </div>
        <div class="field" v-if="user">
          <h1 class="is-pulled-left space">Confirm Sign Up</h1>
          <div class="control has-icons-left has-icons-right space">
            <input
              class="input"
              type="text"
              placeholder="Email verification code"
              v-model="code"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <p
              v-if="error2"
              class="help is-danger is-pulled-left error-message"
            >
              {{ error2 }}
            </p>
          </div>
          <div class="field">
            <div class="control">
              <a class="button is-primary" @click="confirm()">Confirm</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Auth } from "aws-amplify";
export default {
  name: "SignUp",
  data() {
    return {
      login: "",
      email: "",
      password: "",
      code: "",
      user: "",
      error: "",
      error2: ""
    };
  },
  methods: {
    confirm() {
      Auth.confirmSignUp(this.login, this.code, {
        forceAliasCreation: true
      })
        .then(data => {
          this.$store.commit("modal", false);
          this.$store.commit("changeModal");
        })
        .catch(err => (this.error2 = err.message));
    },
    submit() {
      Auth.signUp({
        username: this.login,
        password: this.password,
        attributes: {
          email: this.email
        }
      })
        .then(data => (this.user = data.user))
        .catch(err => (this.error = err.message));
    }
  }
};
</script>
<style scoped>
.space {
  padding-bottom: 10px;
}
.error-message {
  text-align: left;
  padding: 10px 0 10px 0;
}
.modal-container {
  background-color: white;
  height: 430px;
  padding: 20px;
  border-radius: 10px;
}

.form-container {
  width: 80%;
  margin: 10px auto;
  padding: 10px 10px;
}
.button {
  border-radius: 5px;
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
