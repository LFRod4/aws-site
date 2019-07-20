<template>
  <div>
    <section id="top" class="hero is-fullheight">
      <Nav></Nav>
      <div class="modal" :class="{ 'is-active': getModal }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <Authenticator v-if="loginModal"></Authenticator>
          <SignUp v-if="!loginModal"></SignUp>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="
            modal(false);
            changeModal(true);
          "
        ></button>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered has-text-white">
            Fullstack Developer
          </h1>
        </div>
      </div>
    </section>
    <div class="columns">
      <div class="column left-bar"></div>
      <div class="column main-content">
        <section id="projects" class="section">
          <div class="container">
            <h1 class="title">Projects</h1>
            <div class="tile is-ancestor">
              <div
                class="tile is-parent"
                v-for="(project, index) in projects"
                :key="project.id"
              >
                <Cards class="cards-component" :title="index"></Cards>
              </div>
            </div>
          </div>
        </section>
        <section id="aboutMe" class="section">
          <div class="container">
            <h1 class="title">About Me</h1>
          </div>
          <div class="about-content">
            <div class="columns">
              <div class="column is-three-fifths code-img-container">
                <img class="code-image" src="../assets/images/code.png" />
              </div>
              <div class="column dev-img-container">
                <img class="dev-image" src="../assets/images/dev-pic.png" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="column right-bar is-hidden-touch">
        <div class="email has-text-primary">Rodriguezlf4@gmail.com</div>
        <br />
        <div class="line"></div>
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
    <!-- <div class="hero-foot">
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
            </li>
          </ul>
        </div>
      </nav>
    </div>-->
    <Footer></Footer>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import axios from "axios";
// @ is an alias to /src
import Authenticator from "@/components/Authenticator.vue";
import Nav from "@/components/Nav.vue";
import SignUp from "@/components/SignUp.vue";
import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Authenticator,
    SignUp,
    Cards,
    Nav,
    Footer
  },
  data: function() {
    return {
      info: "",
      frontCard: true,
      isShowing: false,
      clearClass: "clear",
      blurClass: "blur"
    };
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
    toggleShow() {
      this.isShowing = !this.isShowing;
    },
    changeModal(boolean) {
      this.$store.commit("changeModal", boolean);
    },
    modal(boolean) {
      this.$store.commit("modal", boolean);
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
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    placeholder() {
      return this.signedIn ? "" : "Click to login";
    },
    signedIn() {
      return this.$store.state.signedIn;
    },
    getModal() {
      return this.$store.state.modal;
    },
    loginModal() {
      return this.$store.state.loginModal;
    }
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
      console.log(jwt);
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

<style>
.clear {
  transition: opacity 1s;
}
.blur {
  filter: blur(1px);
  opacity: 0.5;
}
.cards-component {
  min-width: 100%;
  min-height: 100%;
}
.card-enter,
.card-leave-to {
  opacity: 0;
  transform: rotateY(90deg);
}

.card-enter-active,
.card-leave-active {
  transition: all 0.5s;
}
.modal-content-opac {
  opacity: 0.3;
}
#top {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.4)
    ),
    url("../assets/images/home-top.jpg");
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0)
  );
  background-size: cover;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

#aboutMe {
  padding-bottom: 0 !important;
}

.git-icon {
  margin-left: 0.5em;
}

.top-nav {
  background-color: transparent !important;
  text-decoration: inherit !important;
  border: none !important;
  cursor: pointer !important;
}

.navbar-item:hover,
.navbar-item:focus {
  background-color: none !important;
  color: white !important;
  text-decoration: inherit !important;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 25px;
  background-color: transparent;
  height: 5px;
}

.email {
  writing-mode: vertical-lr;
  margin: 0 auto;
  position: sticky;
  bottom: 0;
}

.line {
  width: 1px;
  height: 20vh;
  background-color: hsl(171, 100%, 41%);
  margin-left: 12px;
}

.left-bar {
  width: 3vw;
  position: fixed;
  left: 0;
}

.right-bar {
  width: 3vw;
  position: fixed;
  top: 60vh;
  right: 15px;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-right: 0 auto;
}

.main-content {
  margin-right: 5vw;
  margin-left: 5vw;
  padding: 0px 10px;
}

.code-image {
  width: 100%;
}
.code-img-container {
  padding-right: 0 !important;
}

.dev-img-container {
  padding-left: 0 !important;
}

.about-content {
  padding-top: 3em;
}

.not-loggedin {
  opacity: 0.3;
  cursor: not-allowed;
}

.not-loggedin:hover {
  text-decoration: none;
  cursor: default;
}
</style>
