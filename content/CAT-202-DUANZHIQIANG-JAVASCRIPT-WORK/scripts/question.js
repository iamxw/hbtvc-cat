window.addEventListener('load', function () {
    // 获取元素对象
    var goto = document.querySelector(".slider-bar");
    var goBack = document.querySelector('.goBack');
    //定时器变量
    var timer=null;
    //验证
    console.log(goto);
    //绑定点击事件
    goto.onclick=function (){
        // 获取元素顶部被卷起的长度  支持dtd方式
        var s=document.documentElement.scrollTop;
        // 定时器 每10ms执行一次
        timer=window.setInterval(function (){
            // 每次走50

            s-=25;
            //  到顶部后清除定时器  必须清定时器  不然就死循环了
            if (s<0){
                window.clearInterval(timer);
            }
            window.scrollTo(0,s);
        },10);
    }
    goto.addEventListener('mouseover',function (){
        goBack.innerHTML = '回到顶部'
    })
    goto.addEventListener('mouseleave',function (){
        goBack.innerHTML = '▲'
    })


//    模态框
    // 1. 获取元素
    var login = document.querySelector('.login');
    // var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    // var closeBtn = document.querySelector('#closeBtn');
    var closeBtn = document.querySelector('#login-button-submit')
    var title = document.querySelector('#title');
    // 2.点击弹出层这个链接 link 让 mask 和 login显示出来
    link.addEventListener('click', function() {
        // mask.style.display = 'block';
        login.style.display = 'block';
    })
    closeBtn.addEventListener('click', function() {
        // mask.style.display = 'none';
        login.style.display = 'none';
    })
    // 4.开始拖拽
    // (1) 当我们鼠标按下，就获得鼠标在盒子内的坐标
    title.addEventListener('mousedown', function(e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        // (2) 鼠标移动的时候，把鼠标在页面中的坐标 减去鼠标在盒子内的坐标就是模态框的left和top值
        document.addEventListener('mousemove', move)

        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        // (3) 鼠标弹起，就让鼠标移动事件解除
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move);
        })
    })
})