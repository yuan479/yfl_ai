//电影接口地址
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
//DOM 编程 原生js
//命名为什么要加o 代表DOM节点对象
const oForm = document.querySelector("#form")
const oInput = document.querySelector("#input")
/* Object.prototype.toString.call(oForm) */
console.log(oForm)
//获取电影
const getMovies = (keyword) => {
    // console.log(keyword)
    let reqUrl = '';
    if (keyword) {
        // 搜索
        reqUrl = SEARCH_API + keyword;
    } else {
        reqUrl = API_URL;
    }
    fetch(reqUrl)
        // 二进制流
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            showMovies(data.results);
        })
}
// movie list render
const showMovies = (movies) => {
    //es6解构
    //右侧{}解给左侧{}，es6 的优雅快捷
    //立马成为常量或变量
    main.innerHTML = '';
    main.innerHTML = movies.map(movie =>{ 
        const {poster_path,title,vote_average,overview }=movie
        
        return`
      <div class="movie">
        <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <span>${movie.vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${movie.overview}
        </div>
      </div>  
    `}).join("")
}

window.onload = function () {
    getMovies()
}

oForm.addEventListener("submit", function (event) {
    //e->事件对象 event
    console.log(event, '/////')  //target->事件源 value->表单的值
    event.preventDefault()
    const search = oInput.value.trim()
    if (search) {
        //搜索电影
        getMovies(search)
    }
    /*   console.log(search)
                if (search.trim()) {
                    //trim()去掉所有空格 
                    console.log(search)

                }
                else {
                    console.log("输入不能为空")
                } */
})