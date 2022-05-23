<template>
  <div>
    <b-container fluid="sm">
      <b-row>
        <b-col class="text-start">
          <b-button 
            class="btn btn-light"
            @click="goBack">
            Go Back to Movie List
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
         <b-card 
            :img-src="selectedTVShow.show.image.original" 
            :img-alt="selectedTVShow.show.name" 
            img-left 
            class="mb-3 mt-3">
            <b-card-text class="text-start">
              <h4>{{ selectedTVShow.show.name }}</h4>
              <h5>Rating: {{ getTVShowRating(selectedTVShow) }}</h5>
              <p class="tv-show-desc">{{ selectedTVShow.show.summary | strippedContent }}</p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Utils from '../utils/Utils.js';

export default {
  name: 'TVShowDetails',

  mixins: [Utils],

  props: {
    selectedTVShow: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  },

  methods: {
    goBack() {
      this.$emit('renderMovieList');
    }
  }
}
</script>
<style scoped>
  img {
    width: 500px;
    height: 500px;
  }
   @media screen and (max-width: 768px) {
    .card {
      flex-flow: column wrap;
    }

    img {
      width: 100%;
    }
  }  
</style>