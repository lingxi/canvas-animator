import _ease from '../utils/ease'

export default class Shape {
  constructor (context = null, x = 0, y = 0) {
    this.context = context
    this.x = x
    this.y = y

    this.rotation = 0
    this.rotationVel = 0

    this.scale = { x: 1, y: 1 }

    this.alpha = 1
    this.filter = 'none'

    this.width = Number.NaN
    this.height = Number.NaN
    this.actualWidth = Number.NaN
    this.actualHeight = Number.NaN

    this.loop = false
    this.period = false
    this.anims = []
    this.lastAnimIndex = -1

    this.autoRemoveWhenStopped = true

    this.reset()
  }

  reset () {
    this.stopped = false
    this.total = 0
    this.progress = 0
  }

  addAnim ({ duration, init, update }) {
    if (this.anims.length <= 0) {
      this.period = duration
      this.anims.push({
        end: this.period,
        init,
        update
      })
    } else {
      this.period = this.anims[this.anims.length - 1].end + duration
      this.anims.push({
        end: this.period,
        init,
        update
      })
    }
    return this
  }

  addTween ({ duration, target, ease, update }) {
    const origin = {}
    ease = ease || _ease.quadInOut
    return this.addAnim({
      duration,
      init: () => {
        for (const field in target) {
          origin[field] = this[field]
        }
      },
      update: (progress, elapsed) => {
        const easedProgress = ease(progress)
        for (const field in target) {
          this[field] = origin[field] + easedProgress * (target[field] - origin[field])
        }
        if (update) {
          update(progress, easedProgress, elapsed)
        }
      }
    })
  }

  update (elapsed) {
    if (!this.stopped) {
      if (this.period) {
        this.progress = this.total / this.period
        if (this.progress >= 1) {
          if (!this.loop) {
            this.stopped = true
            this.total = this.period
            this.progress = 1
          } else {
            this.total = 0
            this.progress = 0
          }
        }
      }

      for (let i = 0; i < this.anims.length; i++) {
        const begin = i <= 0 ? 0 : this.anims[i - 1].end
        const end = this.anims[i].end
        const callback = this.anims[i].update
        const initCallback = this.anims[i].init
        if (this.total >= begin && this.total < end) {
          if (this.lastAnimIndex !== i) {
            if (this.lastAnimIndex >= 0) {
              const lastUpdate = this.anims[this.lastAnimIndex].update
              if (lastUpdate) {
                lastUpdate(1, 0)
              }
            }
            if (initCallback) {
              initCallback()
            }
            this.lastAnimIndex = i
          }
          const animProgress = (this.total - begin) / (end - begin)
          if (callback) {
            callback(animProgress, elapsed)
          }
          break
        }
      }

      this.rotation += this.rotationVel * elapsed

      this.total += elapsed
    }
  }

  _beforeDraw () {
    this.context.save()

    this.context.translate(this.x, this.y)
    this.context.rotate(this.rotation)
    if (typeof this.scale === 'number') {
      this.context.scale(this.scale, this.scale)
    } else {
      this.context.scale(this.scale.x, this.scale.y)
    }
    this.context.globalAlpha = this.alpha
    this.context.filter = this.filter

    this.actualWidth = this.width // * this.finalScale
    this.actualHeight = this.height // * this.finalScale
  }

  _draw () {
    // override by child class
  }

  _afterDraw () {
    this.context.restore()
  }

  draw () {
    this._beforeDraw()
    this._draw()
    this._afterDraw()
  }
}
