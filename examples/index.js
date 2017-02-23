import animator from '../src/index.js'
import Bang from './animations/Bang'
import Bangs from './animations/Bangs'
import Circles from './animations/Circles'
import ImageTest from './animations/ImageTest'
import Squares from './animations/Squares'
import TweenTest from './animations/TweenTest'
import DisplayTest from './animations/DisplayTest'
import TransformTest from './animations/TransformTest'

const initExample = (canvasId, animationCreate, onDone) => {
  const canvas = document.getElementById(canvasId)
  if (canvas) {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    const context = canvas.getContext('2d')
    const animation = animationCreate(context, canvas)
    const myAnimator = new animator.Animator(animation)
    myAnimator.play()
    if (onDone) {
      onDone(canvas, animation, myAnimator)
    }
  }
}

const examples = [{
  canvasId: 'js-canvas-bang',
  animationCreate (context, canvas) {
    const bang = new Bang(context, canvas.width / 2, canvas.height / 2)
    const clickMe = new animator.shapes.Text(context, 0, 0, 'Click me!')
    clickMe.font = '32px sans-serif'
    clickMe.fillStyle = '#fff'
    bang.add(clickMe)
    return bang
  },
  onDone (canvas, animation, myAnimator) {
    canvas.onclick = event => {
      animation.x = event.offsetX
      animation.y = event.offsetY
      myAnimator.replay()
    }
  }
}, {
  canvasId: 'js-canvas-bangs',
  animationCreate (context, canvas) {
    return new Bangs(context, canvas.width / 2, canvas.height / 2)
  }
}, {
  canvasId: 'js-canvas-circles',
  animationCreate (context, canvas) {
    return new Circles(context, canvas.width / 2, canvas.height / 2)
  }
}, {
  canvasId: 'js-canvas-image-test',
  animationCreate (context, canvas) {
    return new ImageTest(context, canvas.width / 2, canvas.height / 2, document.getElementById('test-img'))
  }
}, {
  canvasId: 'js-canvas-squares',
  animationCreate (context, canvas) {
    return new Squares(context, canvas.width / 2, canvas.height / 2)
  }
}, {
  canvasId: 'js-canvas-tween-test',
  animationCreate (context, canvas) {
    return new TweenTest(context, canvas.width / 2, canvas.height / 2)
  }
}, {
  canvasId: 'js-canvas-display-test',
  animationCreate (context, canvas) {
    return new DisplayTest(context, canvas.width / 2, canvas.height / 2)
  }
}, {
  canvasId: 'js-canvas-transform-test',
  animationCreate (context, canvas) {
    return new TransformTest(context, canvas.width / 2, canvas.height / 2)
  }
}]

examples.forEach(({ canvasId, animationCreate, onDone }) => {
  initExample(canvasId, animationCreate, onDone)
})

// standalone
if (document.getElementById('js-canvas-use-ease')) {
  require('./standalone/useEase')
}
if (document.getElementById('js-canvas-background')) {
  require('./standalone/background')
}
