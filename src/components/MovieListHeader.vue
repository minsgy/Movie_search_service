<template>
  <div class="main__header">
    <div class="main__header__left">
      <h2
        v-if="$route.fullPath === '/'"
        class="main__header__title">
        <strong class="color-point">Now</strong> Showing
      </h2>
      <h2
        v-else-if="Response === 'True'"
        class="main__header__title">
        검색한 영화  <strong class="color-point">'{{ title }}'</strong> - TotalResults <strong class="color-point">{{ totalResults }}</strong>
      </h2>
      <h2
        v-else-if="Response === 'False'"
        class="main__header__title">
        검색한 영화  <strong class="color-point">'{{ title }}'
        </strong>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
 computed: {
   title() {
     return this.$route.params.title
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
      return this.$route
    }
  }
}
</script>

<style lang="scss" scoped>
 .main__header {
  font-family: 'PT Sans', sans-serif;
  font-size: 42px;
  line-height: 3;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba($color-font, .6);
  .color-point {
   color: $color-font;
   font-weight: 700;
  }

  &__right {
   .main__header__search-form{
    display: flex;
    justify-content: center;
    align-items: center;
   .search-input{
    border: 2px solid $color-border;
    width: 300px;
    height: 30px;
    cursor: text;
    outline: none;
    padding: 6px 12px;
    font-size: 18px;
    background-color: $color-background;
    border-radius: 15px;
    color: $color-font;
    margin-right: 4px;
   }
  }
  }
 }
</style>