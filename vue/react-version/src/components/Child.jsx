//子组件负责纯UI ，StatelessComponent 负责性能优化
//无状态
const Child = (props) => {
    return (
        <>
            {props.title}
        </>
    )
}

export default Child;