import Vue from 'vue'
import Vuex from 'vuex'
import {chuckService} from '../services/ChuckService'
Vue.use(Vuex)

export const store = new Vuex.Store({

      state: {
          joke:{}
      },

      mutations: {
          setJoke(state, joke) {
              state.joke = joke;
          }
      },

      getters: {
          randomJoke(state) {
              return state.joke;
          }
      },

      actions: {
        async fetchJoke(context) {
                 let joke = await chuckService.getRandomJoke()
                 console.log(joke);
                 context.commit('setJoke', joke)
                 return Promise.resolve()                    
             }
      }
});

