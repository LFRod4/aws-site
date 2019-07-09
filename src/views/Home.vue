<template>
  <div>
    <!-- Hero content: will be in the middle -->
    <section id="top" class="hero is-fullheight">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h3 class="subtitle has-text-white is-size-5">Luis Rodriguez</h3>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
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
                v-if="signedIn === true"
                class="navbar-item is-size-5 has-text-white top-nav"
                v-scroll-to="`#aboutMe`"
                >About Me</a
              >
              <a
                class="navbar-item is-size-5 has-text-white top-nav"
                @click="logInAttempt = true"
                >Log In</a
              >
              <a
                v-if="signedIn === true"
                class="navbar-item is-size-5 has-text-white top-nav"
                @click="logInAttempt = true"
              >
                Sign Out
                <amplify-sign-out></amplify-sign-out>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="modal" :class="{ 'is-active': logInAttempt }">
        <div class="modal-background"></div>
        <div class="modal-content">
          <Authenticator></Authenticator>
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="logInAttempt = false"
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
              <div class="tile is-parent">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title title">Personal Site</p>
                  </header>
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        src="../assets/images/portfolio.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="sub-title">
                      “There are two hard things in computer science: cache
                      invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">Jeff Atwood</p>
                    <div class="container">
                      <a
                        class="button is-primary is-outlined"
                        v-scroll-to="`#top`"
                        >Check It Out</a
                      >
                      <a
                        class="button is-primary is-outlined git-icon"
                        href="https://github.com/LFRod4/aws-site"
                        target="_blank"
                      >
                        <span class="icon is-small">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title title">Angular Quiz</p>
                  </header>
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        src="../assets/images/angular-quiz.png"
                        alt="Angular Quiz"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="sub-title">
                      “There are two hard things in computer science: cache
                      invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">Jeff Atwood</p>
                    <div class="container">
                      <a
                        class="button is-primary is-outlined"
                        href="https://vigorous-poincare-7385ea.netlify.com/"
                        target="_blank"
                        >Check It Out</a
                      >
                      <a
                        class="button is-primary is-outlined git-icon"
                        href="https://github.com/LFRod4/Angular-JS-Quiz"
                        target="_blank"
                      >
                        <span class="icon is-small">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title title">VueJS</p>
                  </header>
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <p class="sub-title">
                      “There are two hard things in computer science: cache
                      invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">Jeff Atwood</p>
                    <div class="container">
                      <button class="button is-primary is-outlined">
                        Check It Out
                      </button>
                      <a class="button is-primary is-outlined git-icon">
                        <span class="icon is-small">
                          <i class="fab fa-github"></i>
                        </span>
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
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
      <div class="column right-bar">
        <div class="email has-text-primary">Rodriguezlf4@gmail.com</div>
        <br />
        <div class="line"></div>
      </div>
    </div>
    <!-- Hero footer: will stick at the bottom -->
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
              <a v-scroll-to="`#top`">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Authenticator from "@/components/Authenticator.vue";

export default {
  name: "home",
  components: {
    Authenticator
  },
  data: function() {
    return {
      info: ""
    };
  },

  methods: {},
  computed: {
    signedIn() {
      return this.$store.state.signedIn;
    },
    logInAttempt() {
      return this.$store.state.logInAttempt;
    }
  }
};
</script>

<style>
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
  top: 55vh;
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
</style>
