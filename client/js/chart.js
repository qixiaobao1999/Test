export default function chart() {
    
    let ws = new WebSocket("ws://10.31.160.49:8000")
    
    
    const bt = document.getElementById('bt')   //发送按钮
    const contentEl = document.getElementById('center') //内容区
    bt.onclick = function () {
        // console.log(1)
        let obj= {
            type:'chart',  //发送的类型
            name:document.getElementById('inp').value,  //用户的名称
            msg: document.getElementById('ipt').value //输入的内容
        }
        // console.log(name)
        // console.log(obj)
        ws.send(JSON.stringify(obj))
        creatItem('right',name,document.getElementById('ipt').value)
        document.getElementById('ipt').value = ''
    }

    ws.onmessage = ( res )=>{
        console.log('来自服务器的消息',res)
        let {type,name,msg} = JSON.parse(res.data)
        switch(type){
            case 'welcome':
                console.log(msg.name)
                break;
            case 'chart' :
                //接受到了聊天信息
                creatItem('left',name,msg)
                break;
                default:
                    break;
        }
    }


    function creatItem(dir,name,msg) {
        let div = document.createElement('div')
            div.className = 'item' + dir
            div.innerHTML = `
            <div class='msgBox'>
                <span>${name}:</span>
                <span>${msg}</span>
            </div>
            `
            contentEl.appendChild(div)
    }
}