/* 
*
* @param {string} num1
* @param {string} num2
* @return {string}  太大了，Number 类型无法表示，需要使用 BigInt 类型
*/

function addLargeNumbers(num1, num2) {
    let result = ''; // 存储结果的字符串
    let carry = 0;//存储进位
    let i = num1.length - 1; //从后往前遍历num1
    let j = num2.length - 1; //从后往前遍历num2

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i]) : 0
        const digit2 = j >= 0 ? parseInt(num2[j]) : 0
        const sum = digit1 + digit2 + carry; // 计算当前位的和
        result = (sum % 10) + result; // 将当前位的和添加到结果字符串的前面
        carry = Math.floor(sum / 10); // 计算进位
        i--; // 移动到下一位
        j--; // 移动到下一位
  
  
    }
    return result;
}