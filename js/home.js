var Carousel_pic = document.querySelector('.Carousel')
var all_products = document.querySelector('.all_products')
var all_products_box = document.querySelector('.all_products_box')
var parentWindow = window.parent;
var current = 0;
var Product_list = document.querySelectorAll('.Product_list>li>a')

function f1() {
    if (current == -1200 || current == -2400 || current == -3600 || current == -4800 || current == -6000 || current == 0) {
        clearInterval(timer);
        setTimeout(() => {
            clearInterval(timer)
            timer = setInterval(f1, 1)
        }, 1000);
    }
    current -= 3;
    if (current <= -6000) {
        Carousel_pic.style.left = 0 + "px"
        current = 0
    } else {
        Carousel_pic.style.left = current + 'px'
    }
}

var timer = setInterval(f1, 1)
window.onload = function () {
    if (localStorage.getItem('commodity')) {
        console.log('从localStorage里面获取数据')
        var ul = document.createElement('ul');
        ul.className = 'open_flex all_products'
        var date = JSON.parse(localStorage.getItem('commodity'));
        for (var x = 0; x < date.length; x++) {
            // console.log(data[100])
            var list_item = `
            <a href="" value="${date[x].Id}">
                <img class="item_imgs" src="${date[x].img_list_url}" alt="">
                <h3 class="item_title">${date[x].title}</h3>
                <div class="item_money open_flex">
                    <span class="specific_price">$${date[x].price}</span>
                    <div class="Hot_item">${date[x].mack}</div>
                </div>
            </a>
            `
            var txt = document.createElement('li');
            txt.innerHTML = list_item;
            txt.className = 'item'
            if (x % 5 == 0 && x > 0) {
                all_products_box.appendChild(ul);
                ul = document.createElement('ul');
                ul.className = 'open_flex all_products'
                ul.innerHTML = '';
            }
            ul.appendChild(txt);

        }
        var all_products_a = document.querySelectorAll('.item>a')
        for (var i = 0; i < all_products_a.length; i++) {
            all_products_a[i].onclick = function (e) {
                e.preventDefault();
                window.parent.ifr.style.height = 1000 + 'px'

                console.log(this.getAttribute("value"))
                sessionStorage.setItem("Preducts", this.getAttribute("value"));
                location.href = '../view/product_details.html'
                // location.href = './';
                // console.log(all_products_a[i].getAttribute("value"))
            }
        }
    } else {
        var url = "http://vebcoder.cn:9527/api/goodList"
        // return
        $.ajax({
            url: url,
            method: 'get',
            data: {
            },
            success: function (data) {
                // console.log(data[5])
                var commodity = JSON.stringify(data)
                localStorage.setItem('commodity', commodity)

                var ul = document.createElement('ul');
                ul.className = 'open_flex all_products'
                for (var x = 0; x < data.length; x++) {
                    // console.log(data[100]);
                    var list_item = `
                    <a href="" value="${data[x].Id}">
                        <img class="item_imgs" src="${data[x].img_list_url}" alt="">
                        <h3 class="item_title">${data[x].title}</h3>
                        <div class="item_money open_flex">
                            <span class="specific_price">$${data[x].price}</span>
                            <div class="Hot_item">${data[x].mack}</div>
                        </div>
                    </a>
                    `
                    var txt = document.createElement('li');
                    txt.innerHTML = list_item;
                    txt.className = 'item'
                    if (x % 5 == 0 && x > 0) {
                        all_products_box.appendChild(ul);
                        ul = document.createElement('ul');
                        ul.className = 'open_flex all_products'
                        ul.innerHTML = '';
                    }
                    ul.appendChild(txt);
                }
                // console.log(ul)
                var all_products_a = document.querySelectorAll('.all_products>li>a')
                for (var i = 0; i < all_products_a.length; i++) {
                    all_products[i].onclick = function (e) {
                        e.preventDefault()
                        // location.href = './';
                        console.log(all_products_a[i].value)
                    }
                }
            },
            error: function (err) {
                console.log(err)
            }
        });
    }
}
var getScrollHeight = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    //返回一个当前home页面的实际高度 
    //这里home 7w多 
}
setTimeout(function () {
    console.log(getScrollHeight())
    window.parent.ifr_height = getScrollHeight();
    window.parent.ifr.style.height = 3000 + 'px'
    // 设置index里面的变量的高度 
    // ifr_height指的是 ifream的最大高度 
    // 
}, 200)

// $.ajax({
//     url: url,
//     method: 'get',
//     data: {
//     },
//     success: function (data) {

//     },
//     error: function (err) {
//         console.log(err)
//     }
// })

for (var i = 0; i < Product_list.length; i++) {
    Product_list[i].onclick = function (e) {
        e.preventDefault()
        sessionStorage.setItem('title_list',this.innerHTML)
    }

}