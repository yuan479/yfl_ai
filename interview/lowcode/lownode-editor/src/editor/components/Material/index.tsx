import { useMemo } from 'react'
import { useComponentConfigStore } from '../../stores/component-config'
import { MaterialItem } from '../MaterialItem/index'

export function Material() {
    const { componentConfig } = useComponentConfigStore()
    const components = useMemo(()=>{
        return Object.values(componentConfig)
    },[componentConfig])
    return (
        <div className="h-full bg-white p-4">
            <div className="mb-4">
                <h2 className="text-sm font-medium text-gray-700 mb-2">组件库</h2>
                <div className="text-xs text-gray-500">拖拽组件到画布区域</div>
            </div>
            
            <div className="space-y-3">
                {components.map(item => {
                    return (
                        <MaterialItem 
                            key={item.name} 
                            name={item.name} 
                            defaultProps={item.defaultProps}
                        />
                    )
                })}
            </div>
            
            <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-xs text-blue-600 font-medium mb-1">💡 使用提示</div>
                <div className="text-xs text-blue-500">
                    拖拽组件到画布区域开始设计
                </div>
            </div>
        </div>
    )
}