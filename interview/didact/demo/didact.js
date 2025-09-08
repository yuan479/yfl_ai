//VNode VDOM
function createElement(type, props, ...children) {
    //有参数的抽象 VDOM 树状结构定义的
    //递归思想
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
                typeof child === "object"
                    ? child
                    //文本节点是叶子节点
                    : createTextElement(child)

            )
        }
    }
}
//文本节点略显复杂？
//为了一致性
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: []
        }
    }
}

function render(element, container) {
    const dom = element.type === "TEXT_ELEMENT"
        ? document.createTextNode('')
        : document.createElement(element.type)

    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name]//setAttribute 简写
        })
    element.props.children.forEach(child =>
        render(child, dom)
    )
    container.appendChild(dom)
}
//namespace
const Didact = {
    createElement,//生成VDOM，一次生成，运行在内存中
    render //真实的DOM并挂载
}

const element = Didact.createElement(
    'div',
    {
        id: 'app'
    },
    Didact.createElement('h1', null, 'hi~'),//第一个子元素
    Didact.createElement('p')//第二个子元素
)
console.log(element)

Didact.render(element, document.getElementById('root'))
