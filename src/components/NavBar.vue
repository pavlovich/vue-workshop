<template>
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
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="less">
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

</style>