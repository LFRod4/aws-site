import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    signedIn: false,
    modal: false,
    loginModal: true,
    projects: [
      {
        frontTitle: "Personal Site",
        image: require("./assets/images/portfolio.png"),
        frontContent:
          "What's the point of creating a web portfolio if you don't go all out and sprinkle some AWS services, state management, and modern JS framework.",
        liveURL: "#top",
        gitURL: "https://github.com/LFRod4/aws-site",
        languages: [
          "Bulma",
          "Javascript",
          "VueJS",
          "Vue Router",
          "Vuex",
          "Vue CLI",
          "Axios",
          "NPM",
          "Amazon S3",
          "Amazon Cloudfront",
          "Amazon Route 53",
          "AWS Amplify",
          "AWS CLI"
        ]
      },
      {
        frontTitle: "Angular Quiz",
        image: require("./assets/images/angular-quiz.png"),
        frontContent:
          "I woke up one day and realized I knew nothing about turtles. Decided to build a quiz that will help me learn some turtle facts. Oh and Angular JS seemed like the cool thing to do at the time.",
        liveURL: "https://vigorous-poincare-7385ea.netlify.com/",
        gitURL: "https://github.com/LFRod4/Angular-JS-Quiz",
        languages: ["Jade", "Bulma", "Javascript", "Angular JS", "Netifly"]
      },
      {
        frontTitle: "Skags Generator",
        image: require("./assets/images/skags.png"),
        frontContent:
          "In the PPC world everyone loves a good SKAG campaign but dread the building process. This cool toy helps speed things up and avoid using the craziness of Excel.",
        liveURL: "https://meetkite.com/skag/",
        gitURL: false,
        languages: [
          "Bootstrap",
          "Bulma",
          "Javascript",
          "VueJS",
          "Vue Router",
          "Vuex",
          "Vue CLI",
          "Webpack",
          "NPM"
        ]
      }
    ]
  },
  getters: {
    signedIn: state => {
      return state.signedIn;
    }
  },
  mutations: {
    signIn: (state, user) => {
      state.signedIn = !!user;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    checkSignedIn: (state, boolean) => {
      state.signedIn = boolean;
    },
    modal: (state, boolean) => {
      state.modal = boolean;
    },
    checkUser: (state, status) => {
      state.user = status;
    },
    changeModal: (state, boolean) => {
      state.loginModal = boolean;
    }
  },
  actions: {}
});
