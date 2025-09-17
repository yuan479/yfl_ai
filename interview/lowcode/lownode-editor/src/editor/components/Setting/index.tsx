import {useComponentsStore} from '../../stores/components'

export function Setting() {
    const {components} = useComponentsStore()
    return (
        <div className="h-full overflow-auto p-3">
            <pre className="text-xs leading-5 whitespace-pre-wrap break-words">
           {JSON.stringify(components,null,2)}
           </pre>
        </div>
    )
}