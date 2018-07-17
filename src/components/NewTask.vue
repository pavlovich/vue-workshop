<template>
  <form name="newTask" class="new-task" @submit.prevent="submitTask">
    <input id="newTaskField" type="text" name="text" v-model="task.name" :placeholder="placeholder" autocomplete="off" />
  </form>
</template>

<script>
  export default {
    name: "NewTask",
    props: ['task'],
    data(){
      return {
        placeholder: "Type the name for a new task and press <Enter> to create it."
      }
    },
    methods: {
      submitTask() {
        this.$emit('create:task');
      }
    }
  }
</script>

<style lang="less">
  .new-task input {
    box-sizing: border-box;
    background: transparent;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border-style: inset;
  }

  .new-task input:focus {
    background-color: #D3EFE3;
  }
</style>
