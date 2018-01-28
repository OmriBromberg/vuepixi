<script>
export default {
  inject: ['PIXI'],
  props: ['x', 'y', 'color', 'opacity', 'radius'],

  render: function (h) {
    return h('template', this.$slots.default)
  },

  computed: {
    pixiObject: function () {
      return this.circle
    }
  },

  created () {
    this.circle = new this.PIXI.Graphics()
    this.$parent.pixiObject.addChild(this.circle)
    this.circle.beginFill(this.color)
    this.circle.drawCircle(0, 0, this.radius)
    this.circle.endFill()
    this.circle.position.x = this.x || 0
    this.circle.position.y = this.y || 0
    this.circle.alpha = this.opacity || 1
  }
}
</script>
