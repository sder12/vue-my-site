<script>
import AppHeader from "./components/AppHeader.vue";
import AppHeader2 from "./components/AppHeader2.vue";
import AppFooter from "./components/AppFooter.vue"

export default {
  name: "App",
  components: { AppHeader, AppFooter, AppHeader2 },
}
</script>


<template>
  <!-- header -->
  <AppHeader />
  <!-- /header -->
  <!-- <AppHeader2 /> -->
  <!-- main -->
  <router-view></router-view>
  <!-- /main -->

  <!-- footer -->
  <AppFooter />
  <!-- /footer -->
</template>


<style lang="scss">
@use './styles/general.scss' as *;
</style>