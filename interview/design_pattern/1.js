// 设计模式是针对接口的编程，而不是实现
// 当有一系列相关对象需要创建，但不知道在运行时会创建哪一个。
// 工厂模式是一种创建型设计模式，它提供了一个创建对象的接口，
// 但由子类决定要实例化的类是哪一个，从而**将对象的创建过程**封装起来，
// 使代码更灵活、可扩展。
// 圆形
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area(){
        return this.width * this.height;
    }
}

class ShapeFactory {
    static createShape(type, option){
        switch(type){
            case 'circle':
                return new Circle(option.radius);
            case 'rectangle':
                return new Rectangle(option.width, option.height);
            default:
                throw new Error('未发现该图形类型');
        }
    }
}

const circle = ShapeFactory.createShape('circle', {radius: 10});
console.log(circle.area());
const rectangle = ShapeFactory.createShape('rectangle', {width: 10, height: 20});
console.log(rectangle.area());