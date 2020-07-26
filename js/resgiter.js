var btn = document.querySelector('.login');
var user = document.querySelectorAll('.user');
var error_text = document.querySelectorAll('.Error_text');
var user_name = document.querySelector('.user_name>input');
var user_password = document.querySelector('.user_password>input');
window.parent.fixed_dis = false

user_name.onfocus = function () {
    user[0].style.borderColor = "#800080"
}
user_name.onblur = function () {
    user[0].style.borderColor = ""
}
user_password.onfocus = function () {
    user[1].style.borderColor = "#800080"
}
user_password.onblur = function () {
    user[1].style.borderColor = ""
}
btn.onclick = function (event) {
    event.preventDefault();
    var shoplist = localStorage.getItem('shoplist')
    var reg = /^[0-9a-zA-Z]{5,12}$/
    var u_name = user_name.value;
    var u_pass = user_password.value
    if (!reg.test(u_name)) {
        error_text[0].style.display = 'block'
        return;
    } else {
        error_text[0].style.display = 'none'
    }
    if (!reg.test(u_pass)) {
        error_text[1].style.display = 'block'
        return;
    } else {
        error_text[1].style.display = 'none';
    }

    if (shoplist) {

    } else {
        $.ajax({
            url: "http://vebcoder.cn:9527/api/register",
            method: 'get',
            data: {
                userName: u_name,
                password: u_pass
            },
            dataType: 'JSON',
            success: function (data) {
            },
            error: function (err) {
                console.log(err)
            }
        });
        localStorage.setItem("status", false);

        window.parent.resgiter_status = 1
        window.parent.resgiter_status_test = '注册成功,赶紧去登录吧'


        setTimeout(function () {
            location.href = "../view/login.html"
            window.parent.State_val = '1'
        }, 2400)
    }
}
// var getScrollHeight = function () {
//     return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
// }
// setTimeout(function () {
//     console.log(getScrollHeight())
//     window.parent.ifr_height = 1;
//     window.parent.ifr.style.height = 400 + 'px'
// }, 200)

setTimeout(function(){
    window.parent.ifr_height = 400
},200)