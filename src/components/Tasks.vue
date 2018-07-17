<template>
  <v-content>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 class="pt-3">
          <div class="result-container">
            <v-layout row justify-center align-center fill-height>
              <v-flex xs8>
                <v-card class="tasks">
                  <TaskListHeader />
                  <TaskFilter />
                  <TaskList />
                  <NewTask />
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import TaskListHeader from './TaskListHeader';
  import TaskList from "./TaskList";
  import TaskFilter from "./TaskFilter";
  import NewTask from "./NewTask";

  export default {
    name: "Tasks",
    components: {
      TaskList,
      TaskListHeader,
      TaskFilter,
      NewTask
    }
  };
</script>

<style scoped lang="less">

  .result-container {
    height: 100%;
  }

</style>
