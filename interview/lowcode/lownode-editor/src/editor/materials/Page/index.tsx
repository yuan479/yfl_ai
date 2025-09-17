import { isUnBorderedButtonVariant } from 'antd/es/button'
import type {PropsWithChildren} from 'react'

function Page({children}:PropsWithChildren){
    return (
        <div className='p-[20px] h-[100%] box-border'>
            {children}
        </div>
    )
}

export default Page