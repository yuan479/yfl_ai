// 递归 自顶向下 计算方程 退出条件
// 自底向上思考：f(1)=1f(2)=2f(3)=f(1)+f(2)
// 迭代的方式 （入栈不需要）
// 也不需要额外空间
//dp动态规划
//最值问题用递归
const climbStairs = function(n) {
  // dp数组
  const dp = [];
  // 初始化
  dp[1] = 1;
  dp[2] = 2;
  // 状态转移方程
  for(let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}