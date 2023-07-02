window.addEventListener('load', function() {
    var preview_img = this.document.querySelector('.preview_img');
    var mask = this.document.querySelector('.mask');
    var big = this.document.querySelector('.big');
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
        // (1)先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2)减去盒子宽度 300 的一半 是 150 就是我们 mask 的最终 left 和 top 值
        // (3)我们mask移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4)如果x坐标小于了0 就让他停在0的位置
        // 遮挡层最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3.大图片移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
        // 大图
        var bigImg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigImg.offsetWidth - big.offsetWidth;
        // 大图片移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
    var addtochart = document.querySelector('#add-to-chart');
    var counts = document.querySelector('#counts');
    var j = 80;
    addtochart.addEventListener('click',function (){
        this.innerHTML = '已加购物车';
        var counts2 = j ++;
        counts.innerHTML = j;
    })

    //tab切换
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('.lis')
    var items = document.querySelectorAll('.item');
    // for 循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号
        lis[i].setAttribute('index', i);
        lis[i].onclick = function() {
            // 1、上面的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变(排他思想) 修改类名的方式
            // 干掉所有人 其余的li清除 class 这个类
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            // 留下我自己
            this.className = 'current';
            // 2、下面的显示内容模块
            var index = this.getAttribute('index');
            console.log(index);
            // 干掉所有人 让其余的item 这些div 隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            items[index].style.display = 'block';
        }
    }

    // tab 切换
    var tab_list = document.querySelector('.tab_list');
    var lis = tab_list.querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    // for 循环绑定点击事件
    for (var i = 0; i < lis.length; i++) {
        // 开始给5个小li 设置索引号
        lis[i].setAttribute('index', i);
        lis[i].onclick = function() {
            // 1、上面的模块选项卡，点击某一个，当前这一个底色会是红色，其余不变(排他思想) 修改类名的方式
            // 干掉所有人 其余的li清除 class 这个类
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            // 留下我自己
            this.className = 'current';
            // 2、下面的显示内容模块
            var index = this.getAttribute('index');
            console.log(index);
            // 干掉所有人 让其余的item 这些div 隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            // 留下我自己 让对应的item 显示出来
            items[index].style.display = 'block';
        }
    }
})