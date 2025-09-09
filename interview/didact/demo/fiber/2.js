//全局任务对象，一个要处理的任务单元（一个fiber节点）
let nextUnitOfWork = null

function performUnitOfWork(fiber) {
    //创建当前fiber节点对应的dom节点
    if (!fiber.dom) {
        fiber.dom = createDomForFiber(fiber)
    }
    const elements = fiber.props.children // 当前fiber节点的子元素
    let index = 0
    let prevSibling = null
    while (index < elements.length) {
        const element = elements[index]; // 获取当前子元素（虚拟DOM节点）
        const newFiber = {
            type: element.type, // 节点类型（如 'div'、'span' 或组件函数）
            props: element.props, // 节点属性（如 className、onClick 等）
            parent: fiber, // 父 Fiber 节点（当前正在处理的父节点）
            dom: null, // 关联的真实 DOM 节点（初始为 null，后续会创建或复用）
            child: null, // 第一个子 Fiber 节点（初始为 null）
            sibling: null, // 下一个兄弟 Fiber 节点（初始为 null）
        };

        if (index === 0) {
            // 第一个子元素：作为父 Fiber 的第一个子节点
            fiber.child = newFiber;
          } else {
            // 非第一个子元素：作为上一个 Fiber 节点的兄弟节点
            prevSibling.sibling = newFiber;
          }
        prevSibling = newFiber
        index++
    }
    if (fiber.child) {
        return fiber.child
    }
    let next = fiber
    while (next) {
        if (next.sibling) {
            return next.sibling
        }
        next = next.parent
    }
    return null
}

function workLoop(deadline) {
    let shouldYield = false//不中断
    while (nextUnitOfWork && !shouldYield) {
        //指针的操作
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork)
        //如果任务时间小于1ms，停止执行，避免阻塞渲染
        shouldYield = deadline.timeRemaining() < 1
    }


}

requestIdleCallback(workLoop)