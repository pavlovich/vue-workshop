<template>
  <v-app>
    <NavBar />
    <Tasks />
    <Footer />
  </v-app>
</template>

<script>
  import NavBar from './components/NavBar';
  import Tasks from './components/Tasks';
  import Footer from './components/Footer';

  export default {
    components: {
      NavBar,
      Tasks,
      Footer
    }
  }
</script>
