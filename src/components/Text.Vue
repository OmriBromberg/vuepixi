<script>
const defaultStyle = {
  fontSize: 24,
  fill: 0xffffff
}
export default {
  inject: ['PIXI'],
  props: ['x', 'y', 'content', 'opacity', 'contentStyle'],

  render: function (h) {
    return h('template', this.$slots.default)
  },

  computed: {
    pixiObject: function () {
      return this.text
    }
  },

  created () {
    this.text = new this.PIXI.Text(this.content, Object.assign({}, defaultStyle, this.contentStyle))
    this.$parent.pixiObject.addChild(this.text)
    this.text.position.x = this.x || 0
    this.text.position.y = this.y || 0
    this.text.alpha = this.opacity || 1
  }
}
</script>
