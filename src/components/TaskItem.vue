<template>
  <li class="task-item">
    <span class="text">{{task.name}}</span>
    <span class="email" v-if="task.owner">{{task.owner}}</span>
    <button class="delete-button" v-if="canDelete" @click.stop="deleteTask">&times;</button>
  </li>
</template>

<script>
  export default {
    name: 'TaskItem',
    props: ['task', 'username'],
    computed: {
      isOwner() {
        return this.username && this.username === this.task.owner;
      },
      canDelete() {
        return this.isOwner;
      }
    },
    methods: {
      deleteTask() {
        this.$emit('delete', this.task);
      }
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
