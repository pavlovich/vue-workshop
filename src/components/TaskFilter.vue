<template>
  <v-layout row justify-space-between align-center class="task-filter-container">
      <input type="text" placeholder="Type here to filter Tasks" v-model="filterString" />
      <button class="clear-filter-button" @click="clearTextFilter">Clear</button>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      filterString: {
        get(){
          return this.$store.state.filterString;
        },
        set(value){
          this.$store.commit('updateFilterString', value);
        }
      }
    },
    methods: {
      clearTextFilter(){
        this.$store.commit('updateFilterString', null);
      }
    }
  }
</script>

<style scoped lang="less">

  .task-filter-container {
    border: 2px inset rgba(24, 69, 49, 0.46);
    height: 40px;
  }

  input {
    padding: 1px 5px;
    margin: 1px 10px;
    flex: auto;
    border: inherit;
    border-style: inset;
  }

  button {
    margin-left: 10px;
    margin-right: 10px;
    padding: 1px 5px;
    border: inherit;
    border-radius: 2px;
    background-color: #96cfb0;
  }

</style>
