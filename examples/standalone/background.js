import animator from '../../src/index'

const canvas = document.getElementById('js-canvas-background')
const context = canvas.getContext('2d')
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

const NUM = 32

const MIN_ACC_X = -50
const MAX_ACC_X = 50
const MIN_ACC_Y = -50
const MAX_ACC_Y = -150
const MIN_LIFE = 1
const MAX_LIFE = 5

const FADE_TIME = 0.5
const SIZE = 32
const SIZE_SQRT_2 = SIZE * Math.SQRT2
const ROTATION_VEL = Math.PI * 2

const random = animator.util.randomNumber

class FloatRect extends animator.shapes.Rect {
  constructor (context) {
    super(context, 0, 0, SIZE, SIZE, 0, '#666')
    this.lineWidth = 3
  }

  reset () {
    super.reset()
    this.x = random(0, canvas.width)
    this.y = canvas.height + SIZE_SQRT_2
    this.life = random(MIN_LIFE, MAX_LIFE)
    this.accX = random(MIN_ACC_X, MAX_ACC_X)
    this.accY = random(MIN_ACC_Y, MAX_ACC_Y)
    this.velX = 0
    this.velY = 0
    this.rotationVel = random(-ROTATION_VEL, ROTATION_VEL)
  }

  update (elapsed) {
    super.update(elapsed)
    if (this.total > this.life) {
      this.alpha = 1 - (this.total - this.life) / FADE_TIME
      if (this.total > this.life + FADE_TIME) {
        this.reset()
      }
    }
    if (this.x < -SIZE_SQRT_2) {
      this.x = canvas.width + SIZE_SQRT_2
    }
    if (this.x > canvas.width + SIZE_SQRT_2) {
      this.x = -SIZE_SQRT_2
    }
  }
}

const container = new animator.base.ShapeContainer(context, 0, 0)

for (let i = 0; i < NUM; i++) {
  const rect = new FloatRect(context)
  container.add(rect)
}

const myAnimator = new animator.Animator(container)
myAnimator.play()
