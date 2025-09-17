import {create} from 'zustand'
import Container from '../materials/Container'
import Button from '../materials/Button'
import Page from '../materials/Page'

interface ComponentConfig {
    name:string;
    component:any;
    defaultProps:Record<string,any>;
}

interface State {
    componentConfig:{[key:string]:ComponentConfig}
}

interface Action {
    registerComponent: (name:string,
       componentConfig:ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set)=>({
    componentConfig:{
        Container:{
            name:'Container',
            defaultProps:{},
            component:Container
        },
        Button:{
            name:'Button',
            defaultProps:{
                type:'primary',
                text:'按钮1',
            },
            component:Button
        },
        Page:{
            name:'Page',
            defaultProps:{},
            component:Page
        }
    },
    registerComponent:(name,componentConfig)=>set((state)=>{
        return {
            ...state,
            componentConfig:{
                ...state.componentConfig,
                [name]:componentConfig
            }
        }
    })
}))