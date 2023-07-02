window.onload = function () {
    // var AdBarCloseButton = document.querySelector('#CloseAdBar');
    // var Adbar = document.querySelector('#Ad-bar');
    // AdBarCloseButton.addEventListener('click', function () {
    //     alert('已记住您的选择，只有在您清除您的浏览器的 Cookies 后，才会继续弹这个框')
    //     AdBarCloseButton.style.marginTop = '-72' + 'px';
    //     Adbar.style.marginTop = '-72' + 'px';
    // })
    // 购买此物品
    //  var ByThisItem = document.querySelector('#ByThisItem');
    //  ByThisItem.addEventListener('click',function () {
    //      window.location.href='LingGanPlantItemDetails.html';
    //  });
    //推荐大图自动切换
    var current_index = 0;
    var timer = window.setInterval(autoChange, 2000);
    //获取所有轮播按钮
    var banner = document.querySelector('.banner');
    var button_li = document.getElementById("button").getElementsByTagName("li");
    var pic_div = document.getElementById("banner_pic").getElementsByTagName("div");
    for (var i = 0; i < button_li.length; i++) {
        button_li[i].setAttribute('index', i);
        button_li[i].onclick = function() {
            for (var i = 0; i < button_li.length; i++) {
                button_li[i].className = 'but';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            for (var j = 0; j < pic_div.length; j++) {
                pic_div[j].className = "pic";
            }
            pic_div[index].className = 'current';
        }
    }

    function autoChange() {
        //自增索引
        ++current_index;
        //当索引自增达到上限时，索引归0
        if (current_index == button_li.length) {
            current_index = 0;
        }
        for (var i = 0; i < button_li.length; i++) {
            if (i == current_index) {
                button_li[i].className = "current";
                pic_div[i].className = "current";
            } else {
                button_li[i].className = "but";
                pic_div[i].className = "pic";
            }
        }
    }

    //秒杀倒计时
    // 目标时间的时间戳
    // 商品 1
    var endDate = new Date('2022-12-31 23:59:59');
    var end = endDate.getTime();
    var spanDay = document.querySelector('#day');
    var spanHour = document.querySelector('#hour');
    var spanMinute = document.querySelector('#minute');
    var spanSecond = document.querySelector('#second');
    // 商品 2
    var secondspanDay = document.querySelector('#day-2');
    var secondspanHour = document.querySelector('#hour-2');
    var secondspanMinute = document.querySelector('#minute-2');
    var secondspanSecond = document.querySelector('#second-2');
    // 商品 3
    var thirdspanDay = document.querySelector('#day-3');
    var thirdspanHour = document.querySelector('#hour-3');
    var thirdspanMinute = document.querySelector('#minute-3');
    var thirdspanSecond = document.querySelector('#second-3');

    // 开启定时器
    setInterval(countdown, 1000);

    countdown();
    // 倒计时
    function countdown() {
        // 当前时间的时间戳
        var nowDate = new Date();
        var now = nowDate.getTime();

        // 计算时间差（毫秒）
        var leftTime = end - now;
        // 相差的秒数
        leftTime /= 1000;

        // 求 相差的天数/小时数/分钟数/秒数
        var day, hour, minute, second;

        day = Math.floor(leftTime / 60 / 60 / 24);
        hour = Math.floor(leftTime / 60 / 60 % 24);
        minute = Math.floor(leftTime / 60 % 60);
        second = Math.floor(leftTime % 60);

        // 设置盒子的内容
        spanDay.innerText = day;
        spanHour.innerText = hour;
        spanMinute.innerText = minute;
        spanSecond.innerText = second;
        secondspanDay.innerText = day;
        secondspanHour.innerText = hour;
        secondspanMinute.innerText = minute;
        secondspanSecond.innerText = second;
        thirdspanDay.innerText = day;
        thirdspanHour.innerText = hour;
        thirdspanMinute.innerText = minute;
        thirdspanSecond.innerText = second;
    }
}
