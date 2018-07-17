<template>
  <v-content>
    <v-container fluid>
      <v-layout column>
        <v-flex xs12 class="pt-3">
          <div class="result-container">
            <v-layout row justify-center align-center fill-height>
              <v-flex xs8>
                <v-card class="tasks">
                  <header class="task-list-header">
                    <h1>Task List</h1>
                  </header>
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
                </v-card>
              </v-flex>
            </v-layout>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    name: "Tasks"
  };
</script>

<style scoped lang="less">
  .result-container {
    height: 100%;
  }

  .task-list-header {
    position: relative;
    padding: 1px 1px 1px 10px;
    background: linear-gradient(to bottom, #41B683, #88D4B3 100%);
    border-bottom: #41B683 solid 2px;
  }

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
