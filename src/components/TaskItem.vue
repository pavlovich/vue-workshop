<template>
  <li class="task-item">
    <span class="text">{{task.name}}</span>
    <span class="email" v-if="task.owner">{{task.owner}}</span>
    <button class="delete-button" v-if="canDelete(task)" @click.stop="deleteTask">&times;</button>
  </li>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    name: 'TaskItem',
    props: ['task'],
    computed: {
      ...mapGetters(['canDelete'])
    },
    methods: {
      ...mapActions(['deleteTask'])
    }
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

  .task-item .delete-button {
    position: relative;
    margin-top: -4px;
    float: right;
    font-weight: bold;
    font-size: 14px;
    background: none;
    border: none;
    cursor: pointer;
  }

</style>
