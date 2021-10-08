<template>
  <section class="detail-container">
    <div class="detail-inner">
      <div class="detail__poster"></div>
      <div class="detail__description">
        <h2 class="title header__title">
        </h2>
        <p class="content plot">
        </p>
        <h2 class="title header__actor">
        </h2>
      </div>
    </div>
  </section>
</template>
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
 .detail-inner {
  display: flex;
  width: 100%;
  min-height: 100%;
  .detail__poster{
   border-radius: 30px;
   width: 350px;
   min-height: 100%;
   animation: skeleton-gradient 1.8s infinite ease-in-out;
   @include skeleton-color($color-background);
  }
  .detail__description{
   width: 100%;
   min-height: 100%;
   margin-left: 20px;
   display: flex;

   flex-direction: column;
   .title{
    flex-basis: 30%;
    width: 100%;
    border-radius: 16px;
    margin-bottom: 15px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    @include skeleton-color($color-background);
   }
   .content {
    flex-basis: 40%;
    width: 100%;
    border-radius: 16px;
    margin-bottom: 20px;
    animation: skeleton-gradient 1.8s infinite ease-in-out;
    @include skeleton-color($color-background);
   }

  }
 }
}
//  keyframe animation
@include skeleton-keyframe;
</style>