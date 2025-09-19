function compareVersion(v1, v2) {
    //Number 是隐式转化类型的函数
    const v1arr = v1.split('.').map(Number)
    const v2arr = v2.split('.').map(Number)
    const maxlength = Math.max(v1arr.length, v2arr.length)
    for (let i = 0; i < maxlength; i++) {
        const ver1 = v1arr[i] || 0
        const ver2 = v2arr[i] || 0
        if (ver1 > ver2) {
            return 1
        } else if (ver1 < ver2) {
            return -1
        }
    }
    return 0

}

console.log(compareVersion('1.0.6', '1.0.500'))