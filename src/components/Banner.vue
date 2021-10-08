<template>
  <section>
    <div class="banner__container">
      <h1 class="banner__container__introduce">
        WELCOME TO MINSGY
        <br />
        CINEMA
      </h1>
      <span class="banner__container__description">
        검색을 통해 원하는 영화를 찾아보세요.
      </span>
      <div class="banner__search__form">
        <input
          v-model="searchData"
          class="search-input"
          placeholder="영화 제목을 입력해주세요."
          @keyup.enter.exact="moviesSearch" />
        <button
          class="search-submit"
          @click="moviesSearch">
          <span class="material-icons">
            search
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      searchData: ''
    }
  },
  // created() {
  //   this.$store.dispatch('movie/readMovies', {
  //     title: 'league'
  //   })
  // },
  methods: { 
    moviesSearch(){
      console.log(this.searchData)
      this.$router.push({
        name: 'movies',
        params: {
          title: this.searchData
        }
      })
      this.searchData = ''
    }
  }
}
</script>

<style lang="scss" scoped>
section{
  display: flex;
  padding: 80px 40px 0;
      max-width: $max-width;
    min-width: $min-width;
    margin: 0 auto;
  .banner__container {
    &__introduce {

      font-family: 'Anton', sans-serif;
      letter-spacing: 2px;
      font-size: 64px;
    }
    &__description{
      display: flex;
      align-items: flex-end;
      height: 50px;

      color: rgba($color-font, .7);
      font-size: 20px;
      margin-bottom: 15px;
    }
    .banner__search__form{
        display: flex;
        align-items: center; 
        .search-input{
          border: 2px solid $color-border;
          width: 200px;
          height: 30px;
          cursor: text;
          outline: none;
          padding: 6px 12px;
          font-size: 18px;
          background-color: $color-background;
          color: $color-font;
          margin-right: 5px;
        }
      .search-submit{
        width: 36px;
        height: 36px;
        border: none;
        outline: none;
        cursor: pointer;
        background: none;
        color: $color-font;
        cursor: pointer;
        .material-icons{
          font-size: 32px;
        }
        &:hover{ 
          .material-icons{
            border-radius: 50%;
            background-color: rgba($color-font, .3);
          }
        }
      }
    }
  }
}
</style>
