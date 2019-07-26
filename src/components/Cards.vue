<template>
  <div>
    <transition name="card" mode="out-in">
      <div class="card" v-if="frontCard" key="front">
        <header class="card-header">
          <p class="card-header-title title">{{ project["frontTitle"] }}</p>
        </header>
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="project['image']" alt="Placeholder image" />
          </figure>
        </div>
        <div class="card-content">
          <p class="sub-title text-content">{{ project["frontContent"] }}</p>
          <br />
          <div class="columns">
            <div class="column">
              <a
                v-if="project != 0"
                class="button is-primary is-outlined git-icon"
                :disabled="!project['liveURL']"
                :href="project['liveURL']"
                target="_blank"
              >
                <span>Check It Out</span>
              </a>
              <a
                v-if="project == 0"
                class="button is-primary is-outlined git-icon"
                v-scroll-to="'#top'"
              >
                <span>Check It Out</span>
              </a>
            </div>
            <div class="column">
              <a
                class="button is-primary is-outlined git-icon"
                :disabled="!project['gitURL']"
                :href="project['gitURL']"
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
              <li v-for="item in project['languages']" :key="item.id">
                {{ item }}
              </li>
            </ul>
          </div>
          <p class="title">{{ project["frontTitle"] }}</p>
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
  props: ["project"],
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
  min-height: 100px;
}

li {
  text-align: left;
  min-width: 100%;
}
</style>
