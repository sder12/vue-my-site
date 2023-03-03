<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue"

export default {
  name: "App",
  components: { AppHeader, AppFooter },
}
</script>


<template>
  <!-- header -->
  <AppHeader />
  <!-- /header -->

  <!-- main -->
  <main>
    <router-view></router-view>
  </main>
  <!-- /main -->

  <!-- footer -->
  <AppFooter />
  <!-- /footer -->
</template>


<style lang="scss">
@use './styles/general.scss' as *;
</style>