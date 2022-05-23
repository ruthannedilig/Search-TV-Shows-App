<template>
  <div>
    <b-container fluid="sm">
      <b-row>
        <b-col class="search-field">
          <b-form-input 
            v-model="searchParameter" 
            placeholder="Search TV shows"
            @keyup.enter="searchTVShows">
          </b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-4" fluid="sm">
      <b-row>
        <b-col md="12">
          <div
            class="tv-show-list"
            v-if="!hasTVShowResults"
          >
            <div
              class="tv-show-item" 
              v-for="tvShow in tvShows"
              :key="tvShow.show.id"
            >
              <b-card 
                :img-src="getImageSource(tvShow)" 
                :img-alt="tvShow.show.name" 
                img-left 
                class="mb-3"
                @click="getTVShowDetails(tvShow)">
                <b-card-text class="text-start">
                  <h5 class="font-weight-bold">{{ tvShow.show.name }}</h5>
                  <h6>Rating: {{ getTVShowRating(tvShow) }}</h6>
                  <p class="tv-show-desc">{{ tvShow.show.summary | strippedContent }}</p>
                </b-card-text>
              </b-card>
            </div>
          </div>
          <b-alert 
            v-else-if="isSearchSuccessful"
            show 
            variant="info">
            No TV shows found
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TVMazeAPI from '../services/TVMazeAPI.js';
import Utils from '../utils/Utils.js';

export default {
  name: 'SearchTVShows',

  mixins: [Utils],

  data() {
    return {
      searchParameter: '',
      tvShows: [],
      isSearchSuccessful: false,
    }
  },

  computed: {
    hasTVShowResults() {
      return this.tvShows.length === 0 && this.isSearchSuccessful;
    }
  },

  methods: {
    /**
     * Search TV shows by the 
     * search parameter using TV Maze API
     */
    async searchTVShows() {
      const tvShows = await TVMazeAPI.searchTVShows(this.searchParameter);
      if (tvShows) {
        this.isSearchSuccessful = true;
        this.tvShows = tvShows;
      }
    },

    getTVShowDetails(tvShow) {
      this.$emit('displayTVShowDetails', tvShow);
    }
    
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    columns: 2;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  img {
    width: 210px;
    height: 250px;
  }
  input {
    max-width: 800px;
  }
  .search-field {
    display: flex;
    justify-content: center;
  }
  .card {
    width: 400px;
  }
  .tv-show-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  .tv-show-item {
    border-radius: 20px;
    transition: all 0.25s;
    margin: 0 15px 30px;
    cursor: pointer;
  }
  .tv-show-item:hover {
    transition: all 0.25s;
    transform: scale(1.02);
    background-color: unset;
  }
  .tv-show-desc {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 320px) and (max-width: 479px) {
    img {
      width: 150px;
      height: unset;
    }
  }
  @media screen and (max-width: 980px) {
    .card {
      width: 100%;
    }
    .tv-show-item {
      margin: unset;
    }
  }
</style>
