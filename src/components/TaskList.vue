<template>
  <ul class="task-list">
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
    <li class="task-item" v-if="!hasTasks">No tasks found.</li>
  </ul>
</template>

<script>
  import { mapGetters } from 'vuex';

  import TaskItem from "./TaskItem";

  export default {
    name: 'TaskList',
    computed: {
      ...mapGetters(['filteredTasks', 'hasTasks'])
    },
    components: {
      TaskItem
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
