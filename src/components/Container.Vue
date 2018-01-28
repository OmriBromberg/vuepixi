<script>
export default {
  inject: ['PIXI'],
  props: ['x', 'y', 'opacity'],

  render: function (h) {
    return h('template', this.$slots.default)
  },

  computed: {
    pixiObject: function () {
      return this.container
    }
  },

  created () {
    this.container = new this.PIXI.Container()
    this.$parent.pixiObject.addChild(this.container)
    this.container.position.x = this.x || 0
    this.container.position.y = this.y || 0
    this.container.alpha = this.opacity || 1
  }
}
</script>
