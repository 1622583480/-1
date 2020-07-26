var commodity_pic = document.querySelector('.commodity_pic');
var mark = document.querySelector('.mark');
var big_commodity_pic = document.querySelector('.big_commodity_pic>img');


var price_D = document.querySelector('.Product_money');
var title_D = document.querySelector('.Product_Overview>h2');
var supplier_D = document.querySelector('.Product_desciption');
var img_url_D = document.querySelector('.big_commodity_pic>img');
var imgs_D = document.querySelector('.Product_Thumbnail');
var img_list_url_D = document.querySelector('.product_picture>img');
var Products_Featured = document.querySelector('.Products_Featured')


// commodity_pic.onmousemove = function (e) {
//     mark.style.display = 'block'
//     big_commodity_pic.style.display = 'block'

//     var moveX = e.pageX - (mark.clientWidth / 2) - commodity_pic.offsetTop
//     var moveY = e.pageY - (mark.clientHeight/ 2) - commodity_pic.offsetLeft
//     console.log(commodity_pic.offsetLeft,commodity_pic.offsetTop)
//     // console.log(e.pageX, mark.clientWidth, commodity_pic.offsetLeft, moveX)
//     // console.log(e.pageY, mark.clientHeight, commodity_pic.offsetTop, moveY)
//     var maxX = commodity_pic.clientWidth - mark.clientWidth
//     var maxY = commodity_pic.clientHeight - mark.clientHeight
//     if (moveX < 0) {
//         moveX = 0
//         mark.style.left = moveX + 'px';
//     }
//     if (moveY < 0) {
//         moveY = 0
//         mark.style.top = moveY + 'px';
//     }
//     if (moveX > maxX) {
//         moveX = maxX
//         mark.style.left = moveX + 'px';
//     }
//     if (moveY > maxY) {
//         moveY = maxY
//         mark.style.top = moveY + 'px';
//     }
//     mark.style.left = moveX + 'px';
//     mark.style.top = moveY + 'px';

//     big_commodity_pic.style.left = -moveX * 2 + 'px'
//     big_commodity_pic.style.top = -moveY * 2 + 'px'

// }
// commodity_pic.onmouseout = function (e) {
//     mark.style.display = 'none'
//     big_commodity_pic.style.display = 'none'
// }
$(".product_picture").on("mousemove", function (e) {
    console.log('在移动');

    var moveX = e.pageX - $(this).offset().left - $(".mark").width() / 2;
    var moveY = e.pageY - $(this).offset().top - $(".mark").height() / 2;
    $(".mark").css({    //让 mark 随着movex 随时变化
        left: moveX + "px",
        top: moveY + "px",
    });
    if (moveX < 0) {  //如果move出现了负值 
        moveX = 0 //把movex归零
        $(".mark").css({
            left: moveX + "px",    //然后把x轴归0 
        });
    }
    if (moveY < 0) {
        moveY = 0;
        $(".mark").css({
            top: moveY + "px",
        });
    }
    var maxX = $(this).width() - $(".mark").width();
    if (moveX > maxX) {
        moveX = maxX;
        $(".mark").css({
            left: moveX + "px",
        });
    }
    var maxY = $(this).height() - $(".mark").height();
    if (moveY > maxY) {
        moveY = maxY;
        $(".mark").css({
            top: moveY + "px"
        });
    }
    var glassX = 2 * moveX;
    var glassY = 2 * moveY;
    $(`.big_commodity_pic>img`).css({
        right: glassX + "px",
        bottom: glassY + "px",
    });


});
$(".product_picture").on("mouseout", function (e) {
    console.log('消失');
    $('.mark').css({ display: 'none' });
    $('.big_commodity_pic').css({ display: 'none' });
});
$('.product_picture').on('mouseover', function () {
    $('.mark').css({ display: 'block' });
    $('.big_commodity_pic').css({ display: 'block' });
})
var btn_return = document.querySelector('.btn_return');
btn_return.onmousedown = function () {
    btn_return.style.borderColor = "#800080";
}
btn_return.onmouseup = function () {
    btn_return.style.borderColor = "";
    window.parent.ifr.style.height = 3000  +"px"
    window.parent.Product.style.display = 'flex'

    window.history.back()

}
window.onload = function () {
    window.parent.Product.style.display = 'none'
    // var ifr_height = document.documentElement.offsetHeight + 137;
    // console.log(ifr_height)
    // // console.log(Centered.offsetHeight)
    // window.parent.ifr.style.height = ifr_height  +"px";

    var ULR_T = `http://vebcoder.cn:9527/api/detail?goodId=${sessionStorage.getItem('Preducts')}`
    var type_oneUrl = 'http://vebcoder.cn:9527/api/goodList'
    $.ajax({
        url: ULR_T,
        method: 'get',
        data: {
        },
        success: function (data) {
            console.log(data);
            var { type_one, imgs, price, title, supplier, img_url, img_list_url } = data[0]
            /*  price 代表价格 
                imgs代表tab缩略图
                supplier代表提供商
                title代表商品标题
                img_list_url 商品图片
                img_url 商品图片2倍
                */
            type_oneUrl += `?type_one=${type_one}`
            console.log(type_oneUrl)
            price_D.innerHTML = "￥" + price;
            // imgs_D.innerHTML =   imgs;
            title_D.innerHTML = title;
            supplier_D.innerHTML = supplier;
            img_url_D.src = img_url;
            img_list_url_D.src = img_list_url;
            // for(var x = 0;)
            imgs = JSON.parse(imgs);
            
            var imgs_img = document.createElement('img');
            for (var x = 0; x < imgs.length; x++) {
                console.log(imgs[x])
                imgs_img.src = imgs[x]
                imgs_D.appendChild(imgs_img)
                imgs_img = document.createElement('img')
            }

            // console.log(price, title, supplier, img_list_url, img_url, imgs)
            // var imgs_D = document.querySelector('.Product_Thumbnail');

        },
        error: function (err) {
            console.log(err)
        }

    });
    setTimeout(function(){
        $.ajax({
            url: type_oneUrl,
            method: 'get',
            data: {
            },
            success: function (data) {

                console.log(data);
                var ul = document.createElement('ul');
                ul.className = 'open_flex all_products'
                for (var x = 0; x < 11; x++) {
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
                        console.log('添加了一次')
                        Products_Featured.appendChild(ul);
                        ul = document.createElement('ul');
                        ul.className = 'open_flex all_products'
                        ul.innerHTML = '';
                    }
                    ul.appendChild(txt);
                }
            },
            error: function (err) {
                console.log(err)
            }
        });
    },200)
    var getScrollHeight = function () {
        return document.querySelector('.Centered').offsetHeight
    }
    setTimeout(function(){
        window.parent.ifr_height = 1137
        console.log(getScrollHeight())
    },200)
    
}
setTimeout(function () {
    // console.log(getScrollHeight())
    var imgs_tabimg = document.querySelectorAll('.Product_Thumbnail>img');
    for (var i = 0; i < imgs_tabimg.length; i++) {
        imgs_tabimg[i].onclick = function () {
            for (var x = 0; x < imgs_tabimg.length; x++) {
                console.log('删除类名')
                imgs_tabimg[x].className = ''
            }
            this.className = 'Product_Thumbnail_borderColor'
            console.log(this.getAttribute('src'))
            img_list_url_D.src = this.getAttribute('src')
            img_url_D.src = this.getAttribute('src')
            document.createElement('img');
            
        }
    }

}, 200)
// var getScrollHeight = function () {
//     return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
// }
// setTimeout(function () {
//     console.log(getScrollHeight())
//     window.parent.ifr_height = getScrollHeight() - 200;
// }, 200)
