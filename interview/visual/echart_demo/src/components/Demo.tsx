import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Demo :React.FC= () => {
    //useRef 可变对象
    //ts类型约束，让代码更严谨
    const chartRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        if(chartRef.current){
            //初始化echarts实例
            const myChart = echarts.init(chartRef.current)
            const option ={
                title:{
                    text:'ECharts 入门示例'
                },
                tooltip:{},
                legend:{
                    data:['销量']
                },
                series:[
                    {
                        name:'销量',
                        type:'pie',//饼图
                        data:[
                            {value:1048,name:'搜索引擎',itemStyle:{color:'red'}},
                            {value:735,name:'直接访问',itemStyle:{color:'yellow'}},
                            {value:580,name:'邮件营销',itemStyle:{color:'green'}},
                            {value:484,name:'联盟广告',itemStyle:{color:'blue'}},
                            {value:300,name:'视频广告',itemStyle:{color:'purple'}}
                        ]
                    }
                ]
            }
            myChart.setOption(option)
            // 监听窗口大小变化，自动调整图表大小
            window.addEventListener('resize',()=>{
                myChart.resize()
            })
        }
    },[])

    return (
      <div ref={chartRef} style={{width: '600px', height: '400px'}}></div>
    )
}

export default Demo

