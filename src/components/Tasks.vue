<template>
  <v-card class="tasks">
    <TaskListHeader />
    <TaskFilter />
    <TaskList />
    <NewTask />
  </v-card>
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

