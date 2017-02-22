# 组合图形

当你需要把基本图形组合成更复杂的图形时，你可以使用 ShapeContainer  
ShapeContainer 继承于 Shape，也可以传递给 animator.Animator 的构造函数，绘制到 canvas 上

## animator.base.ShapeContainer
* 方法
    * `add (shape)`: 将 shape 添加到 contianer。添加以后子图形的坐标系将相对于 container 的坐标系进行计算
        * `shape`: 要添加到 container 的子图形
        * 返回值: 所添加的子图形的索引值
    * `remove (index)`: 将 shape 从 contianer 移除。
        * `index`: shape 添加时返回的索引值
