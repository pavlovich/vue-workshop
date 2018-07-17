<template>
  <ul class="task-list">
    <li class="task-item">
      <span class="text">Task 1</span>
    </li>

    <li class="task-item">
      <span class="text">Task 2</span>
    </li>

    <li class="task-item">
      <span class="text">Task 3</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'TaskList'
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
