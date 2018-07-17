<template>
  <header class="task-list-header">
    <h1>Task List</h1>
  </header>
</template>

<script>
  export default {
    name: "TaskListHeader"
  }
</script>

<style scoped lang="less">

  .task-list-header {
    position: relative;
    padding: 1px 1px 1px 10px;
    background: linear-gradient(to bottom, #41B683, #88D4B3 100%);
    border-bottom: #41B683 solid 2px;
  }

</style>
