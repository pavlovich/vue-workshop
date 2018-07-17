<template>
  <v-content>
      <v-container>
        <v-layout column>
          <v-flex xs12>
            <v-layout row>
              <div class="container about">

                <header class="about-header">
                  <h1>About this App</h1>
                </header>
                <br/>
                <p>This is a task manager application used to illustrate how to code a VueJS application. Click the 'Tasks' menu item to display the list of tasks. To create one, you must log in (no real checking of passwords is done at present ... that is left to you as an exercise). </p>
                <p>To log in, simply type an email address in the 'Logged in User' field and press enter</p>
                <p>To log out, simply remove the text in that field and press enter.</p>
                <p>You can complete tasks (click the checkbox) or toggle your own tasks between being private/personal to being public. You can only complete your own tasks or public ones. You cannot delete or update tasks which you did not create. </p>
                <p>To update a task that you own, simply click it and it's text will display for editing in the entry field below the task list. To update the text, simply change it and press enter. To cancel editing and enter a new item, simply click the item again to unselect it.</p>
              </div>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  .about {
    position: relative;
    margin: 0 auto -10px;
    padding: 0px;
    width: 90%;
    max-width: 600px;
    min-height: 100%;
    background: #f1faf6;
    border: #184531 solid 1px;
  }

  .about .about-header {
    position: relative;
    padding: 1px 1px 1px 10px;
    background: linear-gradient(to bottom, #41B683, #88D4B3 100%);
    border-bottom: #41B683 solid 2px;
  }

  .about h1 {
    text-align: center;
  }

  .about p {
    text-align: center;
    padding: 10px;
  }
</style>
