window.addEventListener('load', function() {

    // 1、==========开关灯开始=============

    var btn = document.getElementById('btn');
    flag = 0;
    btn.onclick = function() {

        if (flag == 0) {
            document.body.style.backgroundColor = '#444';
            document.body.style.color = '#fafafa';
            flag = 1;
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#333';
            flag = 0;
        }
    }

    // 1、==========开关灯结束=============

});