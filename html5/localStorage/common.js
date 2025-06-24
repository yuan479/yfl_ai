const addItems = document.querySelector('.add-items'); // 添加项目的表单
const itemsList = document.querySelector('.plates'); // 存储已添加的项目列表

function addItem(e){
    e.preventDefault(); // 阻止表单提交时的默认行为

}

addItems.addEventListener('submit',addItem)