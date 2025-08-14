import { Component } from "react";
import Child from "./Child.jsx";

class LifecycleDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    doIncrement() {
        //console.log('doIncrement', this)
        this.setState({
            count: this.state.count + 1
        })
    }
    componentDidMount() {
        console.log('组件挂载了')
    }
    componentDidUpdate(){
        console.log('组件更新了')
    }
    componentWillUnmount(){
        console.log('组件卸载了')
    }

    render() {
        return (
            <>
                <h1>LifecycleDemo</h1>
                <p>Count:{this.state.count}</p>
                <button onClick={
                    /* ()=>doIncrement() */
                    /* this.doIncrement */
                    this.doIncrement.bind(this)
                }>
                    点我+1
                </button>
                <Child title={'hello'} />
            </>
        )
    }
}

export default LifecycleDemo;