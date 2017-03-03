# 基本图形

## animator.base.Shape

* 所有图形和 ShapeContainer 的基类
* 构造函数：`constructor (context: null, x: 0, y: 0)`
    * `context`: [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
    * `x`, `y`: 起始坐标
* 属性
    * `context`: [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
    * `x`: 水平坐标
    * `y`: 垂直坐标
    * `loop`: 动画是否循环，默认 `false`
    * `autoRemoveWhenStopped`: 是否在结束时自动移除，默认 `true`。仅在设置了 `period` 且 `loop` 为假时有效。
    * `rotation`: 旋转角度，以弧度记
    * `rotationVel`: 旋转速度，单位：弧度/秒
    * `scale`: 缩放比例，`{ x, y }` 或 `number`。为 `{ x, y }` 时表示水平和垂直方向的缩放，为 `number` 时则将同时在水平和垂直方向上应用同样的缩放
    * `alpha`: 透明度
    * `compositeOperation`: 合成操作，见 [globalCompositeOperation](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
* 方法
    * `reset ()`: 重置到初始状态
    * `addAnim ({ duration, init, update })`: 见 [创建缓动动画](use-ease.md)  
    * `addTween ({ duration, target, ease, update })`: 见 [创建缓动动画](use-ease.md)  

## animator.shapes.Bitmap

* 位图
* 构造函数与属性：`(context = null, x = 0, y = 0, width = 100, height = 100, image, sourceRect = null)`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `width`: 要绘制的宽
    * `height`: 要绘制的高
    * `image`: 要绘制的位图，可以使任一 Canvas 图形绘制源，见 [CanvasImageSource](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasImageSource)
    * `sourceRect`: `{ x, y, width, height }`，表示从源图像裁剪的矩形范围，不设置时不裁剪

## animator.shapes.Circle

* 圆
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, r = 100, fillStyle = '#000', strokeStyle = '#000')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `r`: 半径
    * `fillStyle`: 填充颜色和样式，可以为表示 CSS 色彩的字符串、CanvasGradient 或 CanvasPattern
    * `strokeStyle`: 描边颜色和样式，可以为表示 CSS 色彩的字符串、CanvasGradient 或 CanvasPattern
    * `lineWidth`: 描边宽，默认 `1.0`。为 0 时不描边

## animator.shapes.Pattern

* 图案
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, width = 100, height = 100, image, repeat = 'repeat')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `width`: 同 Bitmap
    * `height`: 同 Bitmap
    * `image`: 同 Bitmap
    * `repeat`: `'repeat'` | `'repeat-x'` | `'repeat-y'` | `'no-repeat'`

## animator.shapes.Rect

* 矩形
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, width = 100, height = 100, fillStyle = '#000', strokeStyle = '#000')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `width`: 矩形宽
    * `height`: 矩形高
    * `fillStyle`: 同 Circle
    * `strokeStyle`: 同 Circle
    * `lineWidth`: 同 Circle
    * `lineCap`: 线末端的类型。允许的值：`'butt'` (默认), `'round'`, `'square'`。见 [globalCompositeOperation](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
    * `lineJoin`: 定义两线相交拐点的类型。允许的值：`'round'`, `'bevel'`, `'miter'` (默认)。见 [globalCompositeOperation](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
    * `miterLimit`: 斜接面限制比例。默认 10。见 [miterLimit](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/miterLimit)

## animator.shapes.Ring

* 环形
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, R = 100, r = 50, fillStyle = '#000')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `R`: 外圈半径
    * `r`: 内圈半径
    * `fillStyle`: 同 Circle

## animator.shapes.Star

* 星
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, R = 100, r = 50, angleNum = 5, fillStyle = '#000', strokeStyle = '#000')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `R`: 外圈半径
    * `r`: 内圈半径
    * `angleNum`: 角数，默认 5 即 五角星。
    * `fillStyle`: 同 Circle
    * `strokeStyle`: 同 Circle
    * `lineWidth`: 同 Circle
    * `lineCap`: 同 Rect
    * `lineJoin`: 同 Rect
    * `miterLimit`: 同 Rect

## animator.shapes.Polygon

* 正多边形
* 构造函数与属性：`constructor (context = null, x = 0, y = 0, r = 100, angleNum = 5, fillStyle = '#000', strokeStyle = '#000')`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `r`: 半径（中心到顶点的距离）
    * `angleNum`: 角数，默认 5 即 正五边形。
    * `fillStyle`: 同 Circle
    * `strokeStyle`: 同 Circle
    * `lineWidth`: 同 Circle
    * `lineCap`: 同 Rect
    * `lineJoin`: 同 Rect
    * `miterLimit`: 同 Rect

## animator.shapes.Text

* 文本
* 构造函数与属性：`context = null, x = 0, y = 0, text = '', maxWidth`
    * `context`: 同 Shape
    * `x`, `y`: 同 Shape
    * `text`: 文本内容
    * `maxWidth`: （可选）文本的最大宽度。超过将进行缩放。
    * `font`: 字体，默认 `'10px sans-serif'`
    * `textAlign`: 文本对齐设置。允许的值：`'start'`, `'end'`, `'left'`, `'right'` 或 `'center'` (默认)
    * `textBaseline`: 基线对齐设置。允许的值：`'top'`, `'hanging'`, `'middle'`, `'alphabetic'` (默认), `'ideographic'`, `'bottom'`。见 [textBaseline](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/textBaseline)
    * `direction`: 文本的方向。允许的值：`'ltr'`, `'rtl'`, `'inherit'` (默认)。见 [direction](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/direction)
