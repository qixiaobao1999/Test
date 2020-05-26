import chart from './chart.js'

export default function login (){
    
    let ws = new WebSocket("ws://10.31.160.49:8000")
    // console.log(1)
    //头部的登录功能
    const login = document.getElementById('login') //登录按钮
    let name 
    login.onclick = function () {
        name = document.getElementById('inp').value
        document.getElementById('sp').innerHTML = name
        document.getElementById('inp').value = ''
        ws.send(JSON.stringify({type:'login',name:name,msg:''}))
    } 

   chart()
}