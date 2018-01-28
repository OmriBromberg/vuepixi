<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Game :height="2000" :width="3000">
      <Container :x="500" :y="500">
       <p-circle :x="1000" :y="500" :radius="250" :color="0xffffff" >
         <Sprite v-draggable :x="random()" :y="random()" :image="'static/bunny.png'" />
       </p-circle>
       </Container>
    </Game>
  </div>
</template>

<script>
import Game from './components/Game'
import Container from './components/Container'
import Sprite from './components/Sprite'
import Text from './components/Text'
import Circle from './components/Circle'
// eslint-disable-next-line
import draggable from './directives/draggable'

export default {
  name: 'App',
  components: {
    Game,
    Container,
    Sprite,
    'p-text': Text,
    'p-circle': Circle
  },
  methods: {
    random: () => Math.floor(Math.random() * 10) + 1
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
