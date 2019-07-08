<template>
  <div>
    <!-- Hero content: will be in the middle -->
    <section id="top" class="hero is-fullheight">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h3 class="subtitle has-text-white">Luis Rodriguez</h3>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item has-text-white" v-scroll-to="`#projects`"
                >Projects</a
              >
              <a class="navbar-item has-text-white" v-scroll-to="`#aboutMe`"
                >About Me</a
              >
              <a class="navbar-item has-text-white" @click="logInAttempt = true"
                >Log In</a
              >
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
              <div class="tile is-4 is-vertical is-parent">
                <div class="tile is-child box">
                  <p class="title">Personal Site</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                  <button class="button is-primary is-inline-block">
                    Check It Out
                  </button>
                  <span
                    class="icon is-large has-text-primary is-inline-block git-icon"
                  >
                    <i class="fab fa-github"></i>
                  </span>
                </div>
                <div class="tile is-child box">
                  <p class="title">Angular Quiz</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                  <button class="button is-primary is-inline-block">
                    Check It Out
                  </button>
                  <span
                    class="icon is-large has-text-primary is-inline-block git-icon"
                  >
                    <i class="fab fa-github svg-inline--fa"></i>
                  </span>
                </div>
              </div>
              <div class="tile is-parent">
                <div class="tile is-child box">
                  <p class="title">VueJS Story Teller</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam semper diam at erat pulvinar, at pulvinar felis
                    blandit. Vestibulum volutpat tellus diam, consequat gravida
                    libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                    eleifend, nunc dui porta orci, quis semper odio felis ut
                    quam.
                  </p>
                  <p>
                    Suspendisse varius ligula in molestie lacinia. Maecenas
                    varius eget ligula a sagittis. Pellentesque interdum, nisl
                    nec interdum maximus, augue diam porttitor lorem, et
                    sollicitudin felis neque sit amet erat. Maecenas imperdiet
                    felis nisi, fringilla luctus felis hendrerit sit amet.
                    Aenean vitae gravida diam, finibus dignissim turpis. Sed
                    eget varius ligula, at volutpat tortor.
                  </p>
                  <p>
                    Integer sollicitudin, tortor a mattis commodo, velit urna
                    rhoncus erat, vitae congue lectus dolor consequat libero.
                    Donec leo ligula, maximus et pellentesque sed, gravida a
                    metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                    lacus, quis faucibus libero. Quisque non semper leo.
                  </p>
                  <button class="button is-primary is-inline-block">
                    Check It Out
                  </button>
                  <span
                    class="icon is-large has-text-primary git-icon is-inline-block"
                  >
                    <i class="fab fa-github"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="aboutMe" class="section">
          <div class="container">
            <h1 class="title">About Me</h1>
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
    <div class="hero-foot footer" style="display: none;">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <ul>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
            <li>
              <a>Sign In</a>
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
import SignUp from "@/components/SignUp.vue";

export default {
  name: "home",
  components: {
    SignUp,
    Authenticator
  },
  data: function() {
    return {
      logInAttempt: false,
      info: ""
    };
  }
};
</script>

<style>
.line {
  width: 1px;
  height: 20vh;
  margin: 0 auto;
  background-color: hsl(171, 100%, 41%);
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

.git-icon {
  font-size: 3em;
}

.foote {
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

.left-bar {
  width: 3vw;
  position: fixed;
  left: 0;
}

.right-bar {
  width: 3vw;
  position: fixed;
  top: 55vh;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  margin-right: 1.5vw;
}

.main-content {
  margin-right: 5vw;
  margin-left: 5vw;
  padding: 0px 10px;
}
</style>
