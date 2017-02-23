import animator from '../../src/index'
import ease from '../../src/misc/ease'

const CURVE_SIZE = 100
const CURVE_SAMPLE = 50
const CIRCLE_R = 40
const DURATION = 3

for (const key in ease) {
  const curveId = `js-ease-curve-${key}`
  const animId = `js-ease-anim-${key}`

  const canvasCurve = document.getElementById(curveId)
  canvasCurve.width = canvasCurve.clientWidth
  canvasCurve.height = canvasCurve.clientHeight
  const contextCurve = canvasCurve.getContext('2d')
  const zeroX = (canvasCurve.width - CURVE_SIZE) / 2
  const zeroY = canvasCurve.height / 2 + CURVE_SIZE / 2

  contextCurve.strokeStyle = '#fff'
  contextCurve.beginPath()
  contextCurve.moveTo(zeroX, zeroY)
  contextCurve.lineTo(zeroX, zeroY - CURVE_SIZE)
  contextCurve.moveTo(zeroX, zeroY)
  contextCurve.lineTo(zeroX + CURVE_SIZE, zeroY)
  contextCurve.stroke()

  contextCurve.strokeStyle = '#0ff'
  contextCurve.lineWidth = 2
  contextCurve.beginPath()
  for (let i = 0; i < CURVE_SAMPLE; i++) {
    const ratio = i / CURVE_SAMPLE
    contextCurve.lineTo(zeroX + ratio * CURVE_SIZE, zeroY - ease[key](ratio) * CURVE_SIZE)
  }
  contextCurve.stroke()

  const canvas = document.getElementById(animId)
  const context = canvas.getContext('2d')
  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight
  const canvasHalfHeight = canvas.height / 2
  const circle = new animator.shapes.Circle(context, 0, canvasHalfHeight, CIRCLE_R, '#3ff', 0)

  circle
  .addTween({
    duration: DURATION,
    target: {
      x: canvas.width
    },
    ease: key
  })
  .addTween({
    duration: DURATION,
    target: {
      x: 0
    },
    ease: key
  })
  circle.loop = true
  const myAnimator = new animator.Animator(circle)
  myAnimator.play()
}
