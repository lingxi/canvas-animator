import _ease from '../utils/ease'

export default class Shape {
  constructor (context = null, x = 0, y = 0) {
    this.context = context
    this.x = x
    this.y = y
    this.velX = 0
    this.velY = 0
    this.accX = 0
    this.accY = 0

    this.rotation = 0
    this.rotationVel = 0

    this.scale = { x: 1, y: 1 }

    this.alpha = 1
    this.compositeOperation = 'source-over'

    this.lineWidth = 1.0
    this.lineCap = 'butt'
    this.lineJoin = 'miter'
    this.miterLimit = 10
    this.lineDashOffset = 0.0
    this.font = '10px sans-serif'
    this.textAlign = 'start'
    this.textBaseline = 'alphabetic'
    this.direction = 'inherit'
    this.fillStyle = '#000'
    this.strokeStyle = '#000'
    this.shadowBlur = 0
    this.shadowColor = 'fully-transparent black'
    this.shadowOffsetX = 0
    this.shadowOffsetY = 0

    this.filter = 'none'

    this.width = Number.NaN
    this.height = Number.NaN

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

      if (this.rotationVel) {
        this.rotation += this.rotationVel * elapsed
      }

      if (this.velX) {
        this.x += this.velX * elapsed
      }
      if (this.velY) {
        this.y += this.velY * elapsed
      }

      if (this.accX) {
        this.velX += this.accX * elapsed
      }
      if (this.accY) {
        this.velY += this.accY * elapsed
      }

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
    this.context.globalCompositeOperation = this.compositeOperation

    this.context.lineWidth = this.lineWidth
    this.context.lineCap = this.lineCap
    this.context.lineJoin = this.lineJoin
    this.context.miterLimit = this.miterLimit
    this.context.lineDashOffset = this.lineDashOffset
    this.context.font = this.font
    this.context.textAlign = this.textAlign
    this.context.textBaseline = this.textBaseline
    this.context.direction = this.direction
    this.context.fillStyle = this.fillStyle
    this.context.strokeStyle = this.strokeStyle
    this.context.shadowBlur = this.shadowBlur
    this.context.shadowColor = this.shadowColor
    this.context.shadowOffsetX = this.shadowOffsetX
    this.context.shadowOffsetY = this.shadowOffsetY

    this.context.filter = this.filter
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
