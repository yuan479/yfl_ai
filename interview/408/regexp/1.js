const str = '我的手机号是13888888888，我的邮箱是1234567890@qq.com，我的密码是123456'

const reg = /1[3-9][0-9]{9}/g//1开头，3-9，0-9的数字9次，g是全局匹配

console.log(reg.test(str))//true
console.log(str.match(reg))//用于匹配符合reg的字符串，返回一个数组[ '13888888888' ]

const str3 = "我是{name}"
console.log(str3.replace(/\{name\}/, '奶龙'))//将str3中的{name}替换为张三

