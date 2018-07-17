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
