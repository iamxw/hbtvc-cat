window.addEventListener('load', function() {
    // ====================筋斗云开始===================
    var cloud = this.document.querySelector('.cloud');
    var lis = this.document.querySelector('.c-nav').querySelectorAll('li');
    var current = 0;
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function() {
            animate(cloud, this.offsetLeft);
        })
        lis[i].addEventListener('mouseleave', function() {
            animate(cloud, current);
        })
        lis[i].addEventListener('click', function() {
            current = this.offsetLeft
        })
    }


    // ====================筋斗云结束===================
    // var preview_img = this.document.querySelector('.xdd');
    // var mask = this.document.querySelector('.massk');
    // var big = this.document.querySelector('.biig');
    // 1.当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子

    var preview_img = this.document.querySelector('.xdd');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
    var bigImg = this.document.querySelector('.bigImg');


    // 1.当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        // 2.鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        var x = e.pageX - preview_img.offsetLeft;
        var y = e.pageY - preview_img.offsetTop;
        // maskX黄盒子在盒子内坐标
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 黄盒子最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;

        };
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        };
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 黄盒子移动距离*大图片最大移动距离
        // 大图片的移动距离=---------------------------------
        // 黄盒子最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';

    });



    // 轮播开始 
    var focus = document.querySelector('.focus');
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer_timer);
        timer_timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer_timer = setInterval(function() {
                arrow_r.click();
            }, 5000)
        })
        //动态生成小圆圈
    var ul_ul = focus.querySelector('ul');
    var ol_ol = focus.querySelector('ol');
    for (var i = 0; i < ul_ul.children.length; i++) {
        var li_li = document.createElement('li');
        li_li.ind = i;
        ol_ol.appendChild(li_li);
        // ol_ol.children[i];
        //点击小点移动
        li_li.addEventListener('mouseenter', function() {
            for (var j = 0; j < ol_ol.children.length; j++) {
                ol_ol.children[j].className = '';
            }
            this.className = 'current';

            var index = this.ind;
            num_num = index;
            circle = index;
            animate(ul_ul, -index * focusWidth);

        });
    };
    //第一个li变为白色
    ol_ol.children[0].className = 'current';
    // 克隆
    var first = ul_ul.children[0].cloneNode(true);
    ul_ul.appendChild(first);
    //点击右耳朵 图片滚动（移动）
    var num_num = 0;
    var circle = 0;
    var flag = true; //节流阀
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num_num == ul_ul.children.length - 1) {
                num_num = 0;
                ul_ul.style.left = 0;
            };
            num_num++;
            animate(ul_ul, -num_num * focusWidth, function() {
                flag = true;
            });
            //点击右侧按钮，小圆圈变白

            circle++;
            if (circle == ol_ol.children.length) {
                circle = 0;
            };
            for (var i = 0; i < ol_ol.children.length; i++) {
                ol_ol.children[i].className = '';
            }
            ol_ol.children[circle].className = 'current';

        }
    });
    //点击左耳朵 图片滚动（移动）
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num_num == 0) {
                num_num = ul_ul.children.length - 1;
                ul_ul.style.left = -num_num * focusWidth + 'px';
            }
            num_num--;
            animate(ul_ul, -num_num * focusWidth, function() {
                flag = true;
            });
            //点击右侧按钮，小圆圈变白

            circle--;
            if (circle < 0) {
                circle = ol_ol.children.length - 1;
            }
            for (var i = 0; i < ol_ol.children.length; i++) {
                ol_ol.children[i].className = '';
            }
            ol_ol.children[circle].className = 'current';
        }
    })

    //自动播放 
    var timer_timer = setInterval(function() {
        arrow_r.click();
    }, 3000)








})