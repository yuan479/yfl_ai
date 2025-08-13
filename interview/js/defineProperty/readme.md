# 响应式业务底层原理

- DOM Api -> 响应式业务
- Object.defineProperty(obj,'value',{
    get,
    set
})
- 对象上的某个属性的某些行为（get,set）进行定义,在完成本来的职责同时，去做dom更新，这就是响应式
- 拦截行为
- 缺点：麻烦，每次只能定义一个属性 
- obj.value
