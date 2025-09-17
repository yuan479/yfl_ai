import { useDrag } from 'react-dnd'

export interface MaterialItemProps {
    name: string
    defaultProps?: Record<string, any>
}

export function MaterialItem(props: MaterialItemProps) {
    const { name } = props
    const [_, drag] = useDrag({
        type: 'name',
        //数据项
        item: {
           type: name,
            
        }
    })

   /*  const getDescription = (componentName: string) => {
        switch (componentName) {
            case 'Button': return '按钮组件'
            case 'Container': return '容器组件'
            case 'Page': return '页面组件'
            default: return '组件'
        }
    } */

    return (
        <div 
            ref={drag as any}
            className="
                group
                p-3 
                bg-gray-50 
                border 
                border-gray-200 
                rounded-lg 
                cursor-move 
                transition-all 
                duration-200
                hover:bg-blue-50 
                hover:border-blue-300 
                hover:shadow-sm
                active:scale-95
            "
        >
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
                    {name}
                </span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {/*   {getDescription(name)} */}
            </div>
        </div>
    )
}