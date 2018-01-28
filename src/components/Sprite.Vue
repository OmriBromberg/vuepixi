<script>
export default {
  inject: ['PIXI'],
  props: ['x', 'y', 'image', 'opacity'],

  render: function (h) {
    return h('template', this.$slots.default)
  },

  computed: {
    pixiObject: function () {
      return this.sprite
    }
  },

  created () {
    this.sprite = this.PIXI.Sprite.fromImage(this.image)
    this.$parent.pixiObject.addChild(this.sprite)
    this.sprite.anchor.set(0.5)
    this.sprite.position.x = this.x || 0
    this.sprite.position.y = this.y || 0
    this.sprite.alpha = this.opacity || 1
  }
}
</script>
