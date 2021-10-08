<template>
  <header>
    <div class="header__left">
      <h1
        class="header__logo"
        @click="$router.push('/')">
        MINSGY CINEMA
      </h1>
    </div>
  </header>
</template>
<script>
export default {
 
}
</script>
<style lang="scss" scoped>
header {
 display: flex;
 align-items: center;
 padding : 0 20px;
 height: 80px;
 .header__left{
  font-family: 'Anton', sans-serif;
   font-size: 20px;
   line-height: 2;
   letter-spacing: 3px;
   .header__logo{
    cursor: pointer;
   }
 }
}
</style>