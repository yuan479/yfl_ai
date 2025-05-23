//王子对象
const prince = {
    name: "王子",
    
    sendShoe(girl) {
        console.log(`${prince.name} 让 ${girl.name} 试穿水晶鞋`);
        girl.getShoe(prince);
    }
};

//灰姑娘对象
const girl = {
    name: "灰姑娘",
    size:42, // 脚的大小
    

    getShoe(sender) {
        console.log(`${girl.name} 试穿了 ${sender.name} 的水晶鞋`);
        if (girl.size === 36) {
            console.log("王子邪魅一笑：女人，我找到你了。");
        } else {
            console.log("王子单手扶额：哦，该死，女人，我一定要找到你。");
        }
    }
};
const othergirl = {
    name: "其他女孩",
    size:40,
    
    getShoe(sender) {
        console.log("可恶，为什么我们的脚都是40码，看来只能把水晶鞋给下一个女孩了。")
        setTimeout(() => {
            girl.size = 36;
            girl.getShoe(sender);
        }, 1000);
    }
};

prince.sendShoe(othergirl)