<template>
  <div>
    <!-- All child <template> elements get added in here -->
    <slot></slot>
  </div>
</template>

<script>
import * as PIXI from 'pixi.js'
// import Container from './Container'
// import Sprite from './Sprite'
// // eslint-disable-next-line
// import draggable from '../directives/draggable'

export default {
  provide: {
    PIXI: PIXI
  },
  props: ['width', 'height'],
  computed: {
    pixiObject: function () {
      return this.app.stage
    }
  },
  created () {
    this.app = new PIXI.Application({
      width: this.width,
      height: this.height
    })
  },
  mounted () {
    this.$el.appendChild(this.app.view)
  }
}
</script>
