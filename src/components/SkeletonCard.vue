<template>
  <li class="card__container">
    <div
      class="card__thumbnail"></div>
    <div class="card__description">
      <h2 class="title">
      </h2>
      <span class="release"></span>
    </div>
    <button
      class="card__detail">
    </button> 
  </li>
</template>
<style lang="scss" scoped>
 .card__container {
  box-sizing: border-box;
  flex-basis: 25%;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 32px 0 0 32px;
  .card__thumbnail{
   width: 100%;
   height: 80%;
   border-radius: 5px;
   animation: skeleton-gradient 1.8s infinite ease-in-out;
   background-color: rgba($color-background, .8);
  }
  .card__description{
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   .title{
    display: flex;
    align-items: center;
    flex-basis: 30%;
    margin: 5px 0;
    border-radius: 5px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    background-color: rgba($color-background, .7);
   }

   .release{
    display: flex;
    align-items: center;
    flex-basis: 40%;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    background-color: rgba($color-background, .7);
    border-radius: 5px;
   }
  }
  .card__detail{
   border: none;
   animation: skeleton-gradient 1.8s infinite ease-in-out;
   background-color: rgba($color-background, .7);
   width: 40%;
   flex-grow: 1;
   border-radius: 10px;
  }
 }

//  keyframe animation
@include skeleton-keyframe;
</style>