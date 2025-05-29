/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */
function hongbao(total, num) {
    const arr = [];
    let restAmount = total; // 剩余金额
    let restNum = num; // 剩余个数
  
    for (let i = 0; i < num; i++) {
      // Math 
      // 包装类
      arr[i] = Math.random(restAmount / restNum *2).toFixed(2)
      // console.log(amount);
      restAmount =restAmount - arr[i];
      restNum --;
     if (i==num-1) {
       arr[i] = restAmount.toFixed(2)
     }

    }
    
    // - 公平性
    // 平均值
    // 随机性
    return arr
  }
  
  console.log(hongbao(100, 10));