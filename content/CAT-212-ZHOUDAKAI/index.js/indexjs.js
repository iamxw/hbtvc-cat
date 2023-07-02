window.addEventListener('load', function() {
    // =================1、搜索开始=======================

    var text = document.querySelector('.input_1');
    text.onfocus = function() {
        if (this.value == '请输入关键字搜索') {
            this.value = '';
        }
        this.style.color = '#fefef'
    }
    text.onblur = function() {
        if (this.value == '') {
            this.value = '请输入关键字搜索';
        }
        this.style.color = 'aqua'
    };

    // =================搜索结束======================= 
    // =================2、点击显示隐藏开始=======================
    var box = document.querySelector('.img_2_doc');
    var btn = document.querySelector('.img2');
    var flag = 1;
    btn.onclick = function() {
            //点击一次之后，flag要变化
            if (flag == 1) {
                box.style.display = 'none';
                flag = 0;
            } else {
                box.style.display = 'block';
                flag = 1;
            }
        }
        // =================点击显示隐藏结束=======================
        // =================3、轮播开始=======================


    var lis = document.querySelector("#button").querySelectorAll("li");
    var pic_divs = document.querySelector(".banner_img").querySelectorAll("div");
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var index = 0;
    //遍历元素
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            for (var j = 0; j < lis.length; j++) {
                // 将当前索引对应的元素设为显示
                if (lis[j] == this) {
                    lis[j].className = "current";
                    pic_divs[j].className = "current";
                    index = j;
                } else {
                    // 将其他所有元素改变样式
                    lis[j].className = "but";
                    pic_divs[j].className = "pic";
                }
            }
        }
    }
    left.onclick = function() {
        index--;
        if (index < 0) {
            index = lis.length - 1;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = 'but';
            pic_divs[i].className = 'pic';
        }
        lis[index].className = 'current';
        pic_divs[index].className = "current";
    }
    right.onclick = function() {
        index++;
        if (index > lis.length - 1) {
            index = 0;
        }
        for (var i = 0; i < lis.length; i++) {
            lis[i].className = 'but';
            pic_divs[i].className = 'pic';
        }
        lis[index].className = 'current';
        pic_divs[index].className = "current";
    }

    // =================轮播结束=======================
    // =================4、小轮播开始=======================
    var lissq = document.querySelector("#buttons").querySelectorAll("li");
    var pic_divss = document.querySelector(".lb_img").querySelectorAll("div");

    var index = 0;
    //遍历元素
    for (var i = 0; i < lis.length; i++) {
        lissq[i].onclick = function() {
            for (var j = 0; j < lis.length; j++) {
                // 将当前索引对应的元素设为显示
                if (lissq[j] == this) {
                    lissq[j].className = "current";
                    pic_divss[j].className = "current";
                    index = j;
                } else {
                    // 将其他所有元素改变样式
                    lissq[j].className = "but";
                    pic_divss[j].className = "pic";
                }
            }
        }
    }

    // =================小轮播结束=======================


    // ==================6、专题专栏手风琴 开始================================

    var liis = document.querySelector('.over_2_ul').querySelectorAll('li');
    for (var i = 0; i < liis.length; i++) {
        liis[i].addEventListener('mouseenter', function() {
            //排他思想 干掉所有人留下我自己
            for (var j = 0; j < liis.length; j++) {
                liis[j].style.width = '142.5px'
            }
            this.style.width = '242px';
        });
        liis[i].addEventListener('mouseleave', function() {
            for (var j = 0; j < liis.length; j++) {
                liis[j].style.width = '142.5px'
            }

        });
    }
    // ==================专题专栏手风琴 结束===============
    // ================7、拖动的模糊框点击登录弹框开始=================
    var link = document.querySelector('#yvan_3');
    var login = document.querySelector('#login');
    var bg = document.querySelector('#bg');
    var closeBtn = document.querySelector('#closeBtn');
    link.addEventListener('click', function() {
        login.style.display = 'block';
        bg.style.display = 'block';
    });
    closeBtn.addEventListener('click', function() {
        login.style.display = 'none';
        bg.style.display = 'none';
    });
    // 2、拖拽
    //鼠标按下，要得到鼠标在盒子内的坐标；
    var title = document.querySelector('#title');
    title.addEventListener('mousedown', function(e) {
        var x = e.pageX - login.offsetLeft;
        var y = e.pageY - login.offsetTop;
        //鼠标移动，鼠标坐标，减去鼠标在盒子内坐标即可；
        document.addEventListener('mousemove', move);

        function move(e) {
            login.style.left = e.pageX - x + 'px';
            login.style.top = e.pageY - y + 'px';
        }
        //鼠标松开，让鼠标移动解除
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', move);
        });
    });
    // ================拖动的模糊框点击登录弹框开始=================
    // =============跟随鼠标的小紫权开始================
    // var ziyvanqvan = document.querySelector('.ziyvanqvan');
    // document.addEventListener('mousemove', function(e) {
    //     var xx = e.pageX;
    //     var yy = e.pageY;
    //     console.log('x坐标是' + xx, 'y坐标是' + yy);
    //     ziyvanqvan.style.left = xx - 15 + 'px';
    //     ziyvanqvan.style.top = yy - 15 + 'px';

    // })

    // =============跟随鼠标的小紫权开始================
    // =============8、缩回的信息 头发—开始================
    var sk = document.querySelector('.nav2');
    var header = document.querySelector('.nav');
    var tiao = document.querySelector('.tiao');
    // 页面滚动事件
    window.addEventListener('scroll', function() {
        // 要检测滚动的距离 >= 秒杀模块的offsetTop 则滑入
        if (window.pageYOffset >= tiao.offsetTop) {
            header.style.top = -50 + 'px';
            sk.style.top = -50 + 'px';
        } else {
            header.style.top = 0 + 'px';
            sk.style.top = 0 + 'px';

        }
    });
    // =============缩回的信息 头发—结束================


    // ==============9、信息左右侧滑开始=================

    var ul_1 = document.querySelector('.ul_1');
    var ul_2 = document.querySelector('.ul_2');
    var jiantou = document.querySelector('.yc_yc');

    // 页面滚动事件
    window.addEventListener('scroll', function() {
        // 要检测滚动的距离 >= 秒杀模块的offsetTop 则滑入
        if (window.pageYOffset >= jiantou.offsetTop) {
            ul_2.style.left = -10 + 'px';
            ul_1.style.left = 0 + 'px';
            // ul_1.style.display = 'block';
            // ul_2.style.display = 'block';
        } else {
            ul_2.style.left = 420 + 'px';


            ul_1.style.left = -800 + 'px';
            // ul_2.style.display = 'none';
            // ul_1.style.display = 'none';

        }

    });

    // ==============信息左右侧滑结束=================



    // =============10、放假倒计时_开始================
    // 目标时间的时间戳
    var endDate = new Date('2022-12-5 00:00:00');
    var end = endDate.getTime();

    // 获取天时分秒的盒子
    var spanDay = document.getElementById('day');
    var spanHour = document.getElementById('hour');
    var spanMinute = document.getElementById('minute');
    var spanSecond = document.getElementById('second');

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

    }
    // =============放假倒计时_结束================










    // ================11、登入您好开始=============
    var params = location.search.substr(1); //uname=andy
    // console.log(params);
    // 2.利用=把字符串分割为数组 split('=');
    var arr = params.split('=');
    // console.log(arr); //["uname", "andy"]
    var denglu_nh = document.querySelector('.denglu_nh');
    // 3.把数据写入div中
    if (arr[1] !== undefined) {
        denglu_nh.innerHTML = '欢迎' + arr[1] + '登入';
    } else { denglu_nh.innerHTML = '欢迎登入'; }


    // ================登入您好结束=============

    var con = document.querySelector('.con');
    // var jd_input = document.querySelector('#jd');
    text.addEventListener('keyup', function() {
            // console.log('输入内容啦');
            if (this.value === '') {
                con.style.display = 'none';
            } else {
                con.style.display = 'block';
                con.innerHTML = this.value;
            }
        })
        // 当我们失去焦点，就隐藏这个con盒子
    text.addEventListener('blur', function() {
            con.style.display = 'none';
        })
        // 当我们获得焦点，就显示这个con盒子
    text.addEventListener('focus', function() {
        if (this.value !== '') {
            con.style.display = 'block';
        }
    })








    // =================5、回到顶部_跟走小块块开始=======================
    var bottom_top = document.querySelector('.bottom_top');
    var banner = document.querySelector('.tiao');
    var goBack = document.querySelector('.goBack');
    var slider_bar_top = bottom_top.offsetTop - banner.offsetTop;
    //window.pageYOffset 页面卷头事件
    window.addEventListener('scroll', function() {
            if (window.pageYOffset >= banner.offsetTop) {
                bottom_top.style.position = 'fixed';
                bottom_top.style.top = slider_bar_top + 'px';

            } else {
                bottom_top.style.position = 'absolute';
                bottom_top.style.top = '1100px';

            }

        })
        // 3.当我们点击了返回顶部模块，就让窗口滚动到页面的最上方
    goBack.addEventListener('click', function() {
        // alert(1);
        // 里面的x和y 不跟单位的 直接写数值即可
        // window.scroll(0, 0);
        // 因为是窗口滚动 所以对象是window
        animateq(window, 0);
    });
    // 动画函数
    function animateq(obj, target, callback) {
        // console.log(callback); callback=function(){} 调用的时候 callback()

        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                if (callback) {
                    // 回调函数
                    callback();
                }
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：（目标值-现在的位置）/10
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    // =================回到顶部_跟走小块块结束=======================








});