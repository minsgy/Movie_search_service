<template>
  <SkeletonDetail v-if="$store.state.movie.isLoading" />
  <section
    v-else-if="!$store.state.movie.isLoading"
    class="detail-container">
    <div class="detail-inner">
      <div
        class="detail__poster" 
        :style="{ backgroundImage: `url(${detail.Poster})`}"></div>
      <div class="detail__description">
        <h2 class="title header__title">
          {{ detail.Title }}
        </h2>
        <p class="content plot">
          {{ detail.Plot }}
        </p>
        <h2 class="title header__actor">
          Actors
        </h2>
        <ul class="actors">
          <li
            v-for="actor in actors"
            :key="actor"
            class="content name">
            {{ actor }}
          </li>
        </ul>
        <h2 class="title header__director">
          Director
        </h2>
        <span class="content director">
          {{ detail.Director }}
        </span>
        <h2 class="title header__ratings">
          Ratings
        </h2>
        <ul class="ratings icon">
          <li class="rating-icon">
            <img
              src="../img/imdb-icon.svg"
              class="rating-icon"
              alt="icon" />
          </li>
          <li>
            <img
              src="../img/rotten-icon.svg"
              class="rating-icon"
              alt="icon" />
          </li>
          <li>
            <img
              src="../img/metacritic-icon.svg"
              class="rating-icon"
              alt="icon" />
          </li>
        </ul>
        <ul class="ratings">
          <li 
            v-for="rating in detail.Ratings"
            :key="rating.Source"
            class="rating-value">
            {{ rating.Value }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
import SkeletonDetail from '~/components/SkeletonDetail'
export default {
  components: {
    SkeletonDetail
  },
  data() {
   return {
     detail : {},
     actors : []
   }
  },
  created() {
   this.movieDetail()
   this.detail = this.$store.state.movie.currentMovie
   this.actors = this.$store.state.movie.currentMovie.Actors.split(',')
   this.detail.Poster = this.detail.Poster.replace('SX300', 'SX700')
   console.log(this.detail)
  },
  methods: {
    async movieDetail() {
      return await this.$store.dispatch('movie/readMovie', {
        imdbID: this.$route.params.imdbID
      }) 
    }
  }
}
</script>
<style lang="scss" scoped>
.detail-container{
 margin: 40px auto 0;
 box-sizing: border-box;
 padding: 40px;
 display: flex;
 max-width: $max-width;
 min-width: $min-width;
 border-radius: 15px;
 min-height: 650px;
 background-color: rgba($color-background, .7);
 .detail-inner {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .detail__poster{
   border-radius: 30px;
   width: 350px;
   height: 650px;
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
  }
  .detail__description{
   flex-grow: 1;
   margin-left: 20px;
   display: flex;
   flex-direction: column;
   .title{
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 38px;
    line-height: 2.5;
    color: $color-font;
   }
   .plot{
     max-width: 900px;
   }
   .actors{
    display: flex;
    justify-items: center;
    .name {
     color: darken($color-font, 15%);
     font-size: 22px;
     margin-right: 12px;
    }
   }
   .ratings{
    display: flex;
    width: 250px;
    align-items: center;
    .rating-icon{
     width: 60px;
     height: 60px;
     margin-right: 16px;
    }
    .rating-value{
     text-align: center;
     width: 60px;
     font-size: 18px;
     margin-right: 16px;
    }
   }
  }
 }
}
.content {
 font-family: 'PT Sans', sans-serif;
 color : darken($color-font, 30%);
 font-size: 20px;
}
</style>