<script>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SideMenu from './components/SideMenu.vue';

export default{
  components:{
    Header,
    Footer,
    SideMenu
  }
}

</script>

<template>
  <Header />
  <div class="container my-5">
    <div class="row">
      <div class="col-3">
        <SideMenu />
      </div>
      <div class="col-9">
         <RouterView />
      </div>

    </div>
  </div>
  <Footer />
</template>

<style scoped>

</style>
