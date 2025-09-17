import type { CommonComponentProps } from '../../interface';
import { useDrop } from "react-dnd";
import {
  useComponentsStore  
} from '../../stores/components'
import {
  useComponentConfigStore
} from '../../stores/component-config';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';

function Page({id, children}: CommonComponentProps) {
  const { addComponent } = useComponentsStore();
  const { componentConfig } = useComponentConfigStore();
  const { canDrop, drop } = useMaterialDrop(['Button', 'Container'], id)
 
  return (
    <div 
      ref={drop as any}
      className="p-[20px] h-[100%] box-border">
      {children}
    </div>
  )
}
export default Page;