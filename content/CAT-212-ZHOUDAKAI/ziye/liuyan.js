window.addEventListener('load', function() {
    // =-=============1自动关横条==============
    var box = document.querySelector('.guanggao');
    var ul_lix4 = document.querySelector('.ul_lix4');
    setTimeout(function() {
        box.style.display = 'none';
        ul_lix4.style.top = -117 + 'px';

    }, 3000);
    var btn = document.querySelector('.img_1');
    btn.onclick = function() {
            box.style.display = 'none';
            ul_lix4.style.top = -117 + 'px';

        }
        //===================2闭眼睛开始============
    var eye = document.querySelector('#eye');
    var pwd = document.querySelector('#password');
    var flag = 1;
    eye.onclick = function() {
            // 点击一次之后flag一定要变化
            if (flag == 1) {
                eye.src = '../images/open.png';
                pwd.type = 'text';
                flag = 0;
            } else {
                eye.src = '../images/close.png';
                pwd.type = 'password';
                flag = 1;
            }
        }
        //===================2闭眼睛结束============

    // 3发送信息五秒倒计时_开始===================
    var btn2 = document.querySelector('button');

    btn2.addEventListener('click', function() {
        var time = 3; //定义剩下的秒数
        this.disabled = true;
        var timer = setInterval(function() {
            if (time == 0) {
                // 清除定时器和复原按钮
                clearInterval(timer);
                btn2.disabled = false;
                btn2.innerHTML = '发送';
                btn2.style.background = '#f500f5a4';

            } else {
                btn2.innerHTML = '还剩' + time + '秒';
                btn2.style.background = '#f500f533';
                time--;
            }
        }, 1000)

    })

    // 3发送信息五秒倒计时_结束===================

    // 4留言板开始===========
    // 留言案例
    let input = document.querySelector('.message').querySelector('input')
    let btn3 = document.querySelector('.message').querySelector('button')
    let text = document.querySelector('.message').querySelector('textarea')
    let ul = document.querySelector('.message').querySelector('ul')

    function fun() {
        if (text.value == '' || input.value == '') {
            alert('您邮箱地址或留言输入不能为空')
        } else {
            let li = document.createElement('li')
            let p = document.createElement('p')
            p.innerHTML = input.value
            li.innerHTML = text.value + "<a href='javascript:;'>删除</a>"
            ul.insertBefore(li, ul.children[0])
            li.insertBefore(p, li.firstChild)
            let as = document.querySelectorAll('a')
            for (let i = 1; i < as.length; i++) {
                as[i].addEventListener('click', function() {
                    ul.removeChild(this.parentNode)
                })
            }
            input.value = text.value = ''
        }
    }
    btn3.addEventListener('click', function() {
        if (text.value == '') {
            alert('您没有输入内容')
        } else {
            let li = document.createElement('li')
            let p = document.createElement('p')
            p.innerHTML = input.value
            li.innerHTML = text.value + "<a href='javascript:;'>删除</a>"
            ul.insertBefore(li, ul.children[0])
            li.insertBefore(p, li.firstChild)
            let as = document.querySelectorAll('a')
            for (let i = 1; i < as.length; i++) {
                as[i].addEventListener('click', function() {
                        ul.removeChild(this.parentNode)
                    })
                    // as[i].onclick = function () {
                    //     ul.removeChild(this.parentNode)
                    // }
            }
            input.value = text.value = ''
        }
    })
    document.addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
                fun()
            }
        })
        // 4留言板结束===========

});