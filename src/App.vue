<template>
  <div id="app">
    <img class="logo mb-4" src="./assets/logo.png" alt="TV Maze Logo">
    <keep-alive>
      <component 
        :is="selectedComponent"
        :selectedTVShow="selectedTVShow"
        @displayTVShowDetails="displayTVShowDetails"
        @renderMovieList="renderMovieList">
      </component>
    </keep-alive>
  </div>
</template>

<script>
import SearchTVShows from './components/SearchTVShows.vue';
import TVShowDetails from './components/TVShowDetails.vue';

export default {
  name: 'App',

  components: {
    SearchTVShows,
    TVShowDetails
  },

  data() {
    return {
      defaultComponent: 'SearchTVShows',
      selectedComponent: '',
      selectedTVShow: {},
    }
  },

  created() {
    this.selectedComponent = this.defaultComponent;
  },

  methods: {
    displayTVShowDetails(tvShow) {
      const tvShowDetailsComponent = 'TVShowDetails';
      this.selectedComponent = tvShowDetailsComponent;
      this.selectedTVShow = tvShow;
    },

    renderMovieList() {
      this.selectedComponent = this.defaultComponent;
    }
  }
}
</script>

<style>
  body {
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(58,58,69,1) 35%, rgba(3,3,3,1) 100%);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-top: 60px;
  }
  .logo {
    width: 300px;
  }
</style>
