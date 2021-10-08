<template>
  <div class="app__inner">
    <Header />
    <div class="app__main">
      <Banner />
      <RouterView />
    </div>
  </div>
</template>
<script>
import Header from '~/components/Header'
import Banner from '~/components/Banner'
export default {
  components: {
    Header,
    Banner
  }
}
</script>

<style lang="scss" scoped>
#app {
  .app__inner { 
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/banner-bg.jpeg');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display:flex;
    min-height: 100vh;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.4;
    color: $color-font;
    background-color: $color-background;
    font-family: 'Noto Sans KR', sans-serif;
    .app__main{
      height: 100%;
    }
  }
}
</style>
