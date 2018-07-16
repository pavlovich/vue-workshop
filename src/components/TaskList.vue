<template>
  <ul class="task-list">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script>
  import Task from "../models/task";
  import TaskItem from "./TaskItem";

  export default {
    name: 'TaskList',
    components: {
      TaskItem
    },
    data(){
      return {
        tasks: [...Array(3).keys()].map(id => new Task({id, name: `Task ${id + 1}`}))
      }
    }
  }
</script>

<style scoped lang="less">

  .task-list {
    margin: 0;
    padding: 0;
    background: white;
  }

  .task-item {
    position: relative;
    box-sizing: content-box;
    padding: 15px;
    height: 22px;
    list-style: none;
    background-color: white;
    border-bottom: #41B683 solid 1px;
  }

</style>
