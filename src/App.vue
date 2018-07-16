<template>
  <v-app>
    <v-toolbar class="navbar" app>
      <v-toolbar-title class="mr-4">Task Master</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat class="active"><a>Tasks</a></v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <div class="username">
        <label for="username">Logged In User:</label><input name="username" placeholder="your email address" type="text">
      </div>
    </v-toolbar>
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
    <v-footer app>
      <span class="ml-2">&copy; 2018</span><span class="ml-1">[ Your company name here ]</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default { }
</script>

<style scoped lang="less">

  button, input, select, textarea {
    border-style: inherit;
  }

  .navbar {
    background-color: #f1faf6;

    .v-btn {
      color: #777;
      background-color: transparent;
      cursor: pointer;

      &.active {
        color: #555;
        background-color: #e7e7e7;
        cursor: pointer;
      }

      &:hover {
        color: #333;
        background-color: #92e7bf;
      }
    }

    .username {
      label {
        font-weight: normal;
        margin-right: 10px;
      }

      input {
        border: 1px inset lightgreen;
        width: 200px;
        padding: 3px;
        text-align: center;
      }
    }
  }

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
