<template>
  <li class="task-item">
    <span class="text">{{task.name}}</span>
    <span class="email" v-if="task.owner">{{task.owner}}</span>
  </li>
</template>

<script>
  export default {
    name: 'TaskItem',
    props: ['task']
  }
</script>

<style scoped lang="less">
  .task-item .email {
    padding-left: 5px;
    opacity: .40;
  }

  .task-item .email:before {
    content: "(";
  }

  .task-item .email:after {
    content: ")";
  }

</style>
