# 大数相加
  - 高精度 
    js 五种简单数据类型 String Number Boolean Null Undefined
    js计算只有 Number 类型，不分整数、浮点数、高精度...
    js 不太适合计算  python 适合 
    js 表现力强，适合做界面、前端、后端
  - 大数字 内存溢出
    会有边界问题
    Infinity 无穷大
    -Infinity 无穷小
    Number.MAX_VALUE 最大值 1.7976931348623157e+308
    Number.MIN_VALUE 最小值 5e-324
    Number.MAX_SAFE_INTEGER 安全最大值 9007199254740991
    Number.MIN_SAFE_INTEGER 安全最小值 -9007199254740991
  - 字符串化
    从



  - es6 bigInt 大数类型
## BigInt
js安全数为 2^53-1 9007199254740991 

es6 新增的第六种简单数据类型
后面加 n 表示是 BigInt 类型
BigInt (), 不能new,因为是简单数据类型
无限大 ， 无溢出问题
不能用Number 类型和 BigInt 类型混合运算
让 js 适合大型项目开发