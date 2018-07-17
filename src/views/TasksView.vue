<template>
  <v-content>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 class="pt-3">
          <div class="result-container">
            <v-layout row justify-center align-center fill-height>
              <v-flex xs8>
                <Tasks />
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import Tasks from '../components/Tasks';

  export default {
    name: 'TasksView',
    components: {
      Tasks
    }
  }
</script>

<style scoped lang="less">

  .result-container {
    height: 100%;
  }

</style>
