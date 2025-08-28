function merge(intervals) {
    if (intervals.length <= 1) return intervals;
    //start 按第一项排序
    // 快速排序 O(n logn)
    intervals.sort((a, b) => a[0] - b[0])

    const merged = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const cuttentInterval = intervals[i]//当前区间  
        const lastMergedInterval = merged[merged.length - 1]//已合并的最后一个区间
        if (cuttentInterval[0] <= lastMergedInterval[1]) {//当前区间起点 <= 已合并的最后一个区间终点
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], cuttentInterval[1])//合并
        } else {
            merged.push(cuttentInterval)//不合并，直接添加
        }
    }
    return merged
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))