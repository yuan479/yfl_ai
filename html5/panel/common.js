const panels = document.querySelectorAll('.qq-panel');
panels.forEach(panel => {
 //js 是一个事件机制的语言
 panel.addEventListener('click', () => {
    console.log('click');
    removeActiveClasses();//模块化
   panel.classList.add("qq-panel_active");

 });
});
function removeActiveClasses() {
 panels.forEach(panel => {
   panel.classList.remove('qq-panel_active');
 });
}