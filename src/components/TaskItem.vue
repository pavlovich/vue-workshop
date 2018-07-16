<template>
  <li class="task-item">
    <span class="text">{{task.name}}</span>
  </li>
</template>

<script>
  export default {
    name: 'TaskItem',
    props: ['task']
  }
</script>

<style scoped lang="less">

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
