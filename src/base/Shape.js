import ease from '../utils/ease'

export default class Shape {
  constructor (context = null, x = 0, y = 0, z = 0, distance = Number.MAX_SAFE_INTEGER) {
    this.x = x
    this.y = y
    this.z = z

    this.context = context
    this.distance = distance

    this.worldX = this.x
    this.worldY = this.y
    this.worldZ = this.z

    this.rotationX = 0
    this.rotationY = 0
    this.rotationZ = 0
    this.rotationVelX = 0
    this.rotationVelY = 0
    this.rotationVelZ = 0

    this.scale = 1
    this.zScale = 1
    this.finalScale = 1

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
    this.map()
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

  addTween ({ duration, target, easeFunc }) {
    const origin = {}
    easeFunc = easeFunc || ease.quadInOut
    return this.addAnim({
      duration,
      init: () => {
        for (const field in target) {
          origin[field] = this[field]
        }
      },
      update: (progress, elapsed) => {
        for (const field in target) {
          this[field] = origin[field] + easeFunc(progress) * (target[field] - origin[field])
        }
      }
    })
  }

  // 3D => 2D
  map () {
    this.zScale = (this.worldZ + this.distance) / this.distance
    this.worldX *= this.zScale
    this.worldY *= this.zScale
  }

  update (elapsed) {
    if (!this.stopped) {
      if (this.period) {
        this.progress = this.total / this.period
        // console.log(elapsed, this.progress, this.total, this.period)
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

      this.rotationX += this.rotationVelX * elapsed
      this.rotationY += this.rotationVelY * elapsed
      this.rotationZ += this.rotationVelZ * elapsed
      this.finalScale = this.zScale * this.scale

      this.total += elapsed      
    }
  }

  draw () {
    this.context.save()

    this.context.translate(this.worldX, this.worldY)
    this.context.rotate(this.rotationZ)
    this.context.globalAlpha = this.alpha
    this.context.filter = this.filter

    this.actualWidth = this.width * this.finalScale
    this.actualHeight = this.height * this.finalScale

    if (this._draw) {
      this._draw()
    }

    this.context.restore()
  }
}
