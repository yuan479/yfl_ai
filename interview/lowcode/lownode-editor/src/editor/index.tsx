import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import { Header } from './components/Header'
import { Material } from './components/Material'
import { Setting } from './components/Setting'
import { EditorArea } from './components/EditorArea'

export default function LowcodeEditor() {
    return (
        <div className='h-[100vh] flex flex-col '>
            <Header />
            <div className='flex-1'>
                <Allotment>
                    <Allotment.Pane preferredSize={280} minSize={200} maxSize={350}>
                        <Material />
                    </Allotment.Pane>
                    <Allotment.Pane preferredSize={800} minSize={400}>
                        <EditorArea />
                    </Allotment.Pane>
                    <Allotment.Pane preferredSize={320} minSize={250} maxSize={400}>
                        <Setting />
                    </Allotment.Pane>
                </Allotment>
            </div>
        </div>
    )
}