<template>
  <div>
    <nav
      class="pagination is-rounded is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <ul class="pagination-list">
        <li v-for="page in pageNumbers" :key="page.id">
          <a
            class="pagination-link"
            :style="
              page === activePage
                ? 'color: hsl(171, 100%, 41%); border-color: hsl(171, 100%, 41%);'
                : ''
            "
            @click="changePage(page)"
            >{{ page }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {};
  },
  methods: {
    changePage(page) {
      this.$store.dispatch("changePage", page);
    }
  },
  computed: {
    checkPage(page) {
      if (page === this.activePage) {
        return true;
      } else {
        return false;
      }
    },
    activePageNumber() {
      return this.pageNumber;
    },
    ...mapGetters(["pageNumbers"]),
    ...mapState(["projects", "activePage"])
  }
};
</script>

<style scoped>
.active {
  color: hsl(171, 100%, 41%);
  border-color: hsl(171, 100%, 41%);
}
</style>
