<template>
  <li class="card__container">
    <div
      class="card__thumbnail"
      :style="{ backgroundImage: `url(${movie.Poster})` }"></div>
    <div class="card__description">
      <h2 class="title">
        {{ movie.Title }}
      </h2>
      <span class="release">Released {{ movie.Year }}</span>
    </div>
    <button
      class="card__detail"
      @click="$router.push({
        name: 'movieDetail',
        params: {
          index,
          imdbID: movie.imdbID
        }
      })">
      Detail
    </button> 
  </li>
</template>
<script>

export default {
 props: {
  movie : {
   type: Object,
   default: () => ({})
  },
  index : {
   type: Number,
   default: 0
  }
 },
}
</script>
<style lang="scss" scoped>
 .card__container {
  box-sizing: border-box;
  flex-basis: 25%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px 0 0 32px;
  font-family: 'PT Sans', sans-serif;
  .card__thumbnail{
   background-size: cover;
   background-position: center;
   width: 100%;
   height: 80%;
  }
  .card__description{
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   .title{
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    flex-basis: 60%;
   }

   .release{
    display: flex;
    align-items: center;
    font-size: 14px;
    flex-basis: 40%;
    color: darken($color-font, 25%);
   }
  }
  .card__detail{
   font-family: 'PT Sans', sans-serif;
   padding: 4px 16px;
   border: 1px solid $color-border;
   background-color: rgba($color-background, .7);
   width: 40%;
   font-size: 18px;
   font-weight: 400;
   color: $color-font;
   transition: .3s ease-in;
   cursor: pointer;
   &:hover{
    background-color: rgba($color-background-point, .3);
   }
  }
 }
</style>