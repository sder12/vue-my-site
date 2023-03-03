<script>
export default {
  name: "App",
}
</script>


<template>
  <!-- header -->
  <!-- <AppHeader /> -->
  <header>
    questo è un header
  </header>
  <!-- /header -->

  <!-- main -->
  <router-view></router-view>
  <!-- /main -->

  <!-- footer -->
  <!-- <AppFooter /> -->
  <!-- /footer -->
</template>


<style lang="scss">
@use './styles/general.scss' as *;
</style>