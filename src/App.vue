<template>
  <div id="app">
    <NavBar />
    <transition  name="component-fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer />
  </div>
</template>

<script>
  import NavBar from './components/NavBar';
  import Footer from './components/Footer';

  export default {
    components: {
      NavBar,
      Footer
    },
    data(){
      return {
        username: null
      }
    },
    methods: {
      toggleLogon(username){
        this.username = username;
      }
    }
  }
</script>

<style lang="less">
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
