
var search = document.querySelector(".top_right_input");
var search_input = document.querySelector(".top_right_input>input");
var tab_list = document.querySelectorAll(".tab_list>li");
var prompt_T = document.querySelector('.prompt');
var loading = document.querySelector('.loading')
var tab_list_jump = document.querySelectorAll(".tab_list>li>a");
var ifr = document.querySelector('#iframepage');
var container = document.querySelector('.container');
var Product_list = document.querySelectorAll('.Product_list>li>a')

tab_list[4].style.display = "none";
tab_list[3].style.display = "none";
var resgiter_status = 0;
var resgiter_status_test = '';
var State_val = null;
var ifr_height = null;
// ifr_height = 1000

for (var i = 0; i < Product_list.length; i++) {
    Product_list[i].onclick = function (e) {
        // e.preventDefault()
        sessionStorage.setItem('title_list',this.innerHTML)
        for(var j = 0;j<Product_list.length;j++){
            Product_list[j].className = ''
        }
        this.className = 'Product_list_color'
        
    }

}
setInterval(function () {
    var flag = localStorage.getItem("status")
    if (flag == "false") {
        flag = false
    }
    // console.log(flag,'---------------------');

    if (flag) {
        tab_list[1].style.display = "none"
        tab_list[2].style.display = "none"
        tab_list[3].style.display = "block"
        tab_list[4].style.display = "block"
    } else {
        tab_list[1].style.display = "block"
        tab_list[2].style.display = "block"
        tab_list[3].style.display = "none"
        tab_list[4].style.display = "none"
    }
    if (resgiter_status == 1) {
        prompt_T.innerHTML = `<span class="iconfont icon-gouhao"></span>${resgiter_status_test}`
        prompt_T.style.top = "40" + 'px'
        setTimeout(function () {
            prompt_T.style.top = "-" + "40" + 'px'
        }, 2000);
        resgiter_status = 0
    }
    if (State_val == 1) {
        for (var i = 0; i < tab_list.length; i++) {
            tab_list[i].className = '';
        }
        tab_list[1].className = 'tab_list_color'
        State_val = null
    } else if (State_val == 0) {
        for (var i = 0; i < tab_list.length; i++) {
            tab_list[i].className = '';
        }
        tab_list[0].className = 'tab_list_color'
        State_val = null
    }
    if (ifr_height > 1000) {
        container.style.display = 'block';
        console.log('block');
    } else {
        container.style.display = 'none';
        console.log('none');
    }
}, 500)

tab_list[4].onclick = function (e) {
    // e.preventDefault(); 
    console.log('asdasdasdasdasdasdadasdasdasdasdasd')
    localStorage.setItem("status", false);
    localStorage.clear()
}
search_input.onfocus = function () {
    search.style.borderColor = '#800080'
}
search_input.onblur = function () {
    search.style.borderColor = ''
}


for (var i = 0; i < tab_list.length; i++) {
    tab_list_jump[i].onclick = function () {

        for (var x = 0; x < tab_list.length; x++) {
            tab_list[x].className = '';
        }
        console.log(this.parentElement)
        this.parentElement.className = 'tab_list_color'
        loading.style.display = 'block';
        setTimeout(function () {
            loading.style.display = 'none';
        }, 800)

        // setTimeout(function () {
        //     if (ifr_height) {
        //         console.log(ifr_height);
        //         $('#iframepage').height(1000)
        //     }
        //     ifr_height = null
        // }, 1000)
    }
}
// function calcPageHeight(doc) {
//     var cHeight = Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
//     var sHeight = Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight)
//     var height = Math.max(cHeight, sHeight)
//     console.log(doc.body.scrollHeight)
//     return height;
// }
// var ifr = document.getElementById('content');
// ifr.onload = function () {
//     var iDoc = ifr.contentDocument || ifr.document || ifr.contentWindow;
//     var height = calcPageHeight(iDoc);
//     console.log(iDoc,height)
//     ifr.style.height = height + 'px';
// }




// ifr.style.height = reg.offsetHeight + 'px';
// ifr.
// window.onscroll = function (){
//     // console.log(document.documentElement.scrollTop)
// }
window.onload = function () {
    $('#iframepage').height(1000) //初始化操作 让iframe高度设置3000
    document.documentElement.scrollTop = 0
    window.onscroll = function () {
        if ($('#iframepage').height() > ifr_height) {
            console.log(ifr_height)
        } else {
            var scrollDom = document.documentElement.scrollTop;
            //页面滚动条高度 
            var clientHDom = document.documentElement.clientHeight;
            //页面可视高度 
            var allHeight = scrollDom + clientHDom
            var Actual_height = document.documentElement.scrollHeight;
            // 页面实际高度 (总个滚动条高度)
            // 如果 scrollTop + clientHeight >= allHeight 代表已经触底 
            // 所以 Actual_height - (scrollTop + clientHHeight) 的值
            // 就是滚动条小黑条距离底部的高度 
            // console.log(scrollDom);
            // console.log(clientHDom);
            // 所以这里判断 
            if (Actual_height - allHeight <= 100) {
                //判断用户滚动条距离底部 是否小于300px 
                setTimeout(function () { //只是美观处理
                    // ifr_height是用于保存 iframe高度的一个变量
                    console.log('增加高度')
                    $('#iframepage').height($('#iframepage').height() + 100);
                    // 让iframe高度增加400
                    // 同时由于 页面内元素高度变大 
                    // 所以 页面实际高度 也会
                }, 500)
            }
        }
    }



}


