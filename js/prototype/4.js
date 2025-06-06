function Person(name, age) {
    // this 指向实例化的对象
    this.name = name;
    this.age = age;

}


/* Person.prototype = {
    sayHello:function(){
        console.log(`hello ${this.name}`);
    }
    }
 */
    Person.prototype.sayHello = function(){
        {
            console.log(`hello ${this.name}`);
        }
        }

    var ikun = new Person('坤坤', 18);
    console.log(ikun.__proto__)
    // 输出 ikun 实例的原型对象，即 Person.prototype（此时是包含 sayHello 方法的对象）
    
    var a ={
        name:'a',
        country:'China'
    }

    ikun.__proto__ = a;
// 修改 ikun 实例的原型指向，现在它不再指向 Person.prototype
// 而是指向我们自定义的对象 a

    console.log(ikun.__proto__)//{name: 'a', country: 'China'}
// 验证原型是否修改成功，输出结果是我们设置的对象 a
    console.log(ikun.country)//China
    
    console.log(Person.prototype)// { sayHello: [Function (anonymous)] }
    console.log(Person.prototype.constructor == Person)//true
    console.log(ikun.eee)//undefined