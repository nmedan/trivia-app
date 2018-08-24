<template>
  <div>
       This is new app.
       {{joke}}
  </div>
</template>

<script>

import {mapActions, mapGetters, mapState} from 'vuex'
//import {store} from './../store'
export default {

    created() {
       this.$store.dispatch('fetchJoke')
    },
    
    methods: {
      ...mapActions({
       fetchJoke:'fetchJoke'
       })
    },

    computed: {
      ...mapGetters ({
        joke:'randomJoke'
      })
    }
}
</script>