<template>
  <main>
    <div class="main__container">
      <MovieListHeader />
      <ul
        v-if="Response === 'True'"
        class="main__container__movies">
        <MovieCard
          v-for="(movie, index) in movies"
          :key="`${movie.imdbID}-${index}`"
          ref="scrollObserver"
          :index="index"
          :movie="movie" />
      </ul>
      <h3
        v-else-if="!$store.state.movie.isLoading && Response === 'False'"
        class="main__notice-text">
        검색 된 영화가 없습니다.
      </h3>
      <ul
        v-if="$store.state.movie.isLoading"
        class="main__container__movies">
        <SkeletonCard
          v-for="n in 8"
          :key="n" />  
      </ul>
      <div
        ref="scrollObserver"
        class="scroll-state">
      </div>
    </div>
  </main>
</template>

<script>
import MovieListHeader from '~/components/MovieListHeader'
import MovieCard from '~/components/MovieCard'
import SkeletonCard from '~/components/SkeletonCard'
export default {
  components: {
    MovieListHeader,
    MovieCard,
    SkeletonCard
  },
  data(){
    return {
      observer: null,
      page: 1,
    }
  },
  computed: {
    movies() { 
      return this.$store.state.movie.movies
    },
    totalResults() {
      return this.$store.state.movie.totalResults
    },
    Response() {
      return this.$store.state.movie.Response
    }
  },
  watch: {
    $route() {
      this.page = 1
      this.$store.dispatch('movie/readMovies', {
        title: this.$route.params.title,
        page: this.page
      })
    },
    movies(){
      // console.log(this.$refs)
    }
  },
  created() {
     this.$store.dispatch('movie/readMovies', {
      title: this.$route.params.title,
    })
  },
  mounted(){
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !this.$store.state.isLoading){
          this.infinityListScroll()
        }
      })
    },{
      threshold: 1
    })
    this.observer.observe(this.$refs.scrollObserver)
  },
  destoryed() {
    this.observer.disconnect()
  },
  methods: 
  {
    async infinityListScroll() {
      if (this.movies.length > 0 && this.movies.length < parseInt(this.totalResults)){
        this.page += 1
        await this.$store.dispatch('movie/readMovies', {
          title: this.$route.params.title,
          page: this.page
        })
        console.log(this.movies)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
  main{
    padding: 80px 40px;
    max-width: $max-width;
    min-width: $min-width;
    overflow-x: hidden;
    margin: 0 auto;
    .main__container {
      display: flex;
      flex-direction: column;
      &__movies {
        display: flex;
        min-width: $max-width;
        flex-wrap: wrap;
        margin: 0 auto;
        padding: 0 32px 32px 0;
        background-color: rgba($color-background, .5);
      }
    }
    .main__notice-text{
      height: 25vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-family: 'PT Sans', sans-serif;
      font-weight: 700;
      color: rgba($color-font, .8);

    }
  }
  .scroll-state{
    width: 100%;
    height: 200px;
  }
</style>