# html5 王者对象Blob

- 图片转成base64 字符串编码
- atob (base64) 二进制的字符串编码
- for 每一个字符
  charCodeAt(i)  0-255 8byte 的整数
  Uint8Array()  8byte 的数组

- 组成二进制的文件对象描述 new Blob ([unit8Array],类型)
- 二进制层面上去压缩，切割，修改
- URL.createObjectURL(blob)  二进制文件对象描述 浏览器将会未二进制提供一个临时访问的地址


