import Vue from 'vue'
// eslint-disable-next-line
const defaultConfig = {
  bounds: 'parent'
}

const onDragStart = function (event) {
  this.data = event.data
  this.alpha *= 0.5
  this.lastPosition = this.data.getLocalPosition(this.parent)
}

const onDragEnd = function () {
  this.alpha *= 2
  delete this.lastPosition
  delete this.data
}

const onDragMove = function () {
  if (this.lastPosition) {
    const parentBounds = this.parent.getBounds()
    // eslint-disable-next-line
    const bounds = this.getBounds()
    const newPosition = this.data.getLocalPosition(this.parent)
    const xDiff = newPosition.x - this.lastPosition.x
    const yDiff = newPosition.y - this.lastPosition.y

    if (bounds.left + xDiff >= parentBounds.left && bounds.right + xDiff <= parentBounds.right) {
      this.position.x += xDiff
    }

    if (bounds.top + yDiff >= parentBounds.top && bounds.bottom + yDiff <= parentBounds.bottom) {
      this.position.y += yDiff
    }

    this.lastPosition = newPosition
  }
}

export default {
  draggable: Vue.directive('draggable', {
    bind (el, binding, vnode) {
      vnode.componentInstance.pixiObject.interactive = true
      vnode.componentInstance.pixiObject
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove)
    }
  })
}
