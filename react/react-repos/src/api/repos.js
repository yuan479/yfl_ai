import axios from 'axios' //引入http请求库
//http 请求的时候，所有接口地址的公共部分
const BASE_URL = 'https://api.github.com/' //基础地址
//标准http请求库
//axios method url
//返回promise现代
//之所以模块化，因为api模块往外是应用之外 接口搞外交
export const getRepos = (username) => {
    return axios.get(`${BASE_URL}users/${username}/repos`)
}


export const getRepoDetail = async (username, repoName) => {
    return await axios.get(`${BASE_URL}repos/${username}/${repoName}`)
}
