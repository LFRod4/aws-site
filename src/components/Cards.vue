<template>
  <div>
    <transition name="card" mode="out-in">
      <div class="card" v-if="frontCard" key="front">
        <header class="card-header">
          <p class="card-header-title title">
            {{ projects[title]["frontTitle"] }}
          </p>
        </header>
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="projects[title]['image']" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="sub-title text-content">
            {{ projects[title]["frontContent"] }}
          </p>
          <br />
          <div class="columns">
            <div class="column">
              <a
                v-if="title != 0"
                class="button is-primary is-outlined git-icon"
                :href="projects[title]['liveURL']"
                target="_blank"
              >
                <span>Check It Out</span>
              </a>
              <a
                v-if="title == 0"
                class="button is-primary is-outlined git-icon"
                v-scroll-to="'#top'"
              >
                <span>Check It Out</span>
              </a>
            </div>
            <div class="column">
              <a
                class="button is-primary is-outlined git-icon"
                :disabled="!projects[title]['gitURL']"
                :href="projects[title]['gitURL']"
                target="_blank"
              >
                <span class="icon is-small">
                  <i class="fas fa-code"></i>
                </span>
                <span>Code</span>
              </a>
            </div>
            <div class="column">
              <a
                class="button is-primary is-outlined git-icon"
                @click="frontCard = false"
              >
                <span class="icon is-small">
                  <i class="fas fa-heartbeat"></i>
                </span>
                <span>Guts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="card" v-if="!frontCard" key="back">
        <header class="card-header">
          <p class="card-header-title title">What's It Made Of</p>
        </header>
        <div class="card-content">
          <div class="content">
            <ul>
              <li v-for="item in projects[title]['languages']" :key="item.id">
                {{ item }}
              </li>
            </ul>
          </div>
          <p class="title">{{ projects[title]["frontTitle"] }}</p>
          <div class="container">
            <a
              class="button is-primary is-outlined git-icon"
              @click="frontCard = true"
            >
              <span class="icon is-small">
                <i class="fas fa-hand-point-left"></i>
              </span>
              <span>Back</span>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["title"],
  data() {
    return {
      frontCard: true
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
    languages(index) {
      return this.$store.state.projects[index]["languages"];
    }
  }
};
</script>

<style scoped>
.text-content {
  text-align: left;
}

li {
  text-align: left;
  min-width: 100%;
}
</style>
