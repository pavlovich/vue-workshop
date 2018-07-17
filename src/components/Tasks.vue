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
                  <NewTask :task="newTask" @create:task="createTask" />
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
  import NewTask from "./NewTask";

  export default {
    name: "Tasks",
    components: {
      TaskList,
      TaskListHeader,
      TaskFilter,
      NewTask
    },
    data(){
      return {
        newTask: new Task({}),
        tasks: [],
        filterString: '',
        nextId: 0
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
      },
      incrementNextId(){
        this.nextId = this.nextId + 1;
      },
      getNextId(){
        const id = this.nextId;
        this.incrementNextId();
        return id;
      },
      addTask(task){
        this.tasks.push(task);
      },
      createTask(){
        this.newTask.id = this.getNextId();
        this.addTask(this.newTask);
        this.newTask = new Task({});
      }
    }
  };
</script>

<style scoped lang="less">
  .result-container {
    height: 100%;
  }

</style>
