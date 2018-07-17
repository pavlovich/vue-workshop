<template>
  <form name="newTask" class="new-task" @submit.prevent.stop="createTask()" v-if="isLoggedOn">
    <input id="newTaskField" type="text" name="text" v-model="newTask.name" :placeholder="placeholder" autocomplete="off" ref="taskField" />
  </form>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "NewTask",
    data(){
      return {
        placeholder: "Type the name for a new task and press <Enter> to create it."
      }
    },
    computed: {
      ...mapGetters(['isLoggedOn', 'username', 'newTask']),
    },
    methods: {
      ...mapActions(['createTask']),
      taskField(){
        return this.$refs.taskField;
      },
      activateTaskField() {
        Vue.nextTick(() => {
          let taskField = this.taskField();
          if (taskField) {
            taskField.focus();
          }
        }, this);
      }

    },
    mounted(){
      this.activateTaskField();
    },
    watch: {
      username: function(newName, oldName){
        if(!!newName && newName.trim() && newName !== oldName){
          this.activateTaskField();
        }
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
