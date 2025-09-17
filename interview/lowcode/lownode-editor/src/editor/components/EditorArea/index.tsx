import React from 'react';
  import { useDrop } from 'react-dnd';
  import { type Component, useComponentsStore } from '../../stores/components';
  import { useComponentConfigStore } from '../../stores/component-config';
  
  export  function EditorArea() {
    const { components, addComponent } = useComponentsStore();
    const { componentConfig } = useComponentConfigStore();
    
    // 添加拖拽接收区域
  const [, drop] = useDrop(() => ({
      accept: ['Button', 'Container', 'Page'],
      drop: (item: { type: string }, monitor) => {
        // 如果子容器已处理 drop，则根容器不再处理，避免重复添加
        if (monitor.didDrop()) return;
        console.log('拖拽到EditorArea:', item);
        const config = componentConfig[item.type];
        if (config) {
          addComponent({
            id: new Date().getTime(),
            name: item.type,
            props: config.defaultProps || {},
            children: []
          }, 0); // 添加到根级别
        }
      }
    }));
    // useEffect(() => {
    //   addComponent({
    //     id: 222,
    //     name: 'Container',
    //     props: {},
    //     children: []
    //   }, 1);
    //    addComponent({
    //     id: 333,
    //     name: 'Button',
    //     props: {},
    //     children: []
    //   }, 222)
    //   // setTimeout(() => {
    //   //   deleteComponent(333);
    //   // }, 3000)
    // }, [])
  
    function renderComponents(components: Component[]):React.ReactNode {
      return components.map((component: Component)=>{
        const config = componentConfig?.[component.name];
        if (!config?.component) {
          return null;
        }
        return React.createElement(
          config.component,
          {
            key: component.id,
            id: component.id,
            ...config.defaultProps,
            ...component.props
          },
          renderComponents(component.children || [])
        )
      })
    }
  
    return (
      <div 
        ref={drop as any}
        className="h-full w-full min-h-[400px] border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 overflow-auto"
      >
        {components.length === 0 ? (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            拖拽组件到这里开始设计
          </div>
        ) : (
          renderComponents(components)
        )}
      </div>
    )
  }