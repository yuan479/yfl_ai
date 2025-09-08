//namespace

function createElement(type,props,...children){
    
}

const Didact = {
    createElement,//生成VDOM，一次生成，运行在内存中
    render //真实的DOM并挂载
}

const element = Didact.createElement(
    'div',
    {
        id:'app'
    },
    Didact.createElement('h1',null,'Hello,World'),//第一个子元素
    Didact.createElement('p',null,'This is a paragraph')//第二个子元素
)

Didact.render(element,document.getElementById('root'))

export default Didact;