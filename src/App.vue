<template>
  <v-app>
    <NavBar @toggleLogon="toggleLogon" />
    <Tasks :username="username" />
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
