//列表项在数据库中怎么存储？比如省，市，县...
//树状结构，场景题
const sourceList =[
    {
        id:1,
        name:'省',
        parentId:null
    },
    {
        id:2,
        name:'市',
        parentId:1
    },
    {
        id:3,
        name:'县',
        parentId:2
    },
    {
        id:4,
        name:'镇',
        parentId:3
    },
    {
        id:5,
        name:'村',
        parentId:4
    }
]

const tree = listToTree(sourceList,0)
console.log(tree)