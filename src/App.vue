<template>
    <BoardView style="margin: 0 auto" />
</template>
<script lang="ts">
import './assets/scss/style.scss'
import './assets/scss/main.scss'
import BoardView from './components/BoardView.vue'
export default {
  name: 'vue-2048',
  components: {
    BoardView
  }
}
</script>
