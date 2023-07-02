window.addEventListener('load',function (){
    var registerImg = document.querySelector('#reg-img');
    var usrName = document.querySelector('#username');
    var pasWd = document.querySelector('#password');
    var login = document.querySelector('#login')
    var reg = document.querySelector('#reg')
    var regImg = 0;
    var userName = document.querySelector('#usrName');
    var usrPswd = document.querySelector('#usrPswd');
    registerImg.addEventListener('mouseover',function (){
        this.style.borderRadius = '4' + 'px';
        this.style.boxShadow = '1px ' + '1px ' + '10px ' + '#505050';
        // if (regImg == 0) {
        //     alert('这个图的效果使用JavaScript实现，并且鼠标再次放置到这个元素时，在刷新之前不会再弹出这个框');
        //     regImg = 1;
        // }
    });
    registerImg.addEventListener('mouseleave',function (){
        this.style.borderRadius = '50%';
        this.style.boxShadow = '0 ' + '0 ' + '0 ';
    });
    login.addEventListener('click',function (){
        if (usrName.value === ''){
            userName.style.color = '#F44336'
            userName.innerHTML = '用户名不能是空的'
            username.style.borderColor = '#F44336';
        }

        if (pasWd.value === '') {
            usrPswd.style.color = '#F44336'
            usrPswd.innerHTML = '你没有填写密码'
            pasWd.style.borderColor = '#F44336';
        }else {

        }
    })

    reg.addEventListener('click',function (){
        if (usrName.value === ''){
            alert('别忘了输入用户名~~');
        }
        if (pasWd.value === '') {
            alert('不输入密码怎么注册账号鸭~~');
        }
    })
})