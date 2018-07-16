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
                  <TaskFilter @update:filterString="updateTaskFilter" />
                  <TaskList :tasks="filteredTasks" />
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
  import Task from "../models/task";

  import TaskListHeader from './TaskListHeader';
  import TaskList from "./TaskList";
  import TaskFilter from "./TaskFilter";

  export default {
    name: "Tasks",
    components: {
      TaskList,
      TaskListHeader,
      TaskFilter
    },
    data(){
      return {
        tasks: [...Array(3).keys()].map(id => new Task({id, name: `Task ${id + 1}`})),
        filterString: ''
      }
    },
    computed: {
      filteredTasks(){
        return this.tasks
          .filter((task) => {return task.name && this.filterString ? task.name.includes(this.filterString) : true});
      }
    },
    methods: {
      updateTaskFilter(newFilterString) {
        this.filterString = newFilterString;
      }
    }
  };
</script>

<style scoped lang="less">
  .result-container {
    height: 100%;
  }

</style>
