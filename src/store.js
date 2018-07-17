import Vue from 'vue';
import Vuex from 'vuex';

import Task from './models/task';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [],
    newTask: new Task({}),
    filters: {
      filterString: ''
    },
    nextId: 0,
    username: null
  },
  getters: {
    filteredTasks(state){
      return state.tasks
        .filter((task) => {return task.name && state.filters.filterString ? task.name.includes(state.filters.filterString) : true});
    },
    username(state){
      return state.username;
    },
    filterString(state){
      return state.filters.filterString;
    },
    isLoggedOn(state){
      return !!state.username;
    },
    isOwner(state) {
      return task => state.username && state.username === task.owner;
    },
    canDelete(state, getters) {
      return task => getters.isOwner(task);
    },
    newTask(state){
      return state.newTask;
    },
    hasTasks(state, getters){
      const myTasks = getters.filteredTasks;
      return myTasks && myTasks.length !== 0;
    }
  },
  mutations: {
    deleteTask(state, item){
      let newTasks = [...state.tasks];
      let indexToUpdate = state.tasks.findIndex((task) => {return task.matches(item)});
      newTasks.splice(indexToUpdate, 1);
      state.tasks = newTasks;
    },
    updateFilterString(state, newFilterString){
      state.filters.filterString = newFilterString;
    },
    toggleLogon(state, username){
      state.username = username;
    },
    createTask(state){
      state.newTask.id = state.nextId;
      state.nextId = state.nextId + 1;
      state.newTask.owner = state.username;
      state.tasks.push(state.newTask);
      state.newTask = new Task({});
    }
  },
  actions: {
    toggleLogon({commit}, username){
      commit('toggleLogon', username);
    },
    updateFilterString({commit}, newFilterString) {
      commit('updateFilterString', newFilterString);
    },
    createTask({commit}){
      commit('createTask');
    },
    deleteTask({commit}, task){
      commit('deleteTask', task);
    }
  }
});

export default store;
