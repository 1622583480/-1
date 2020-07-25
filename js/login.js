var btn = document.querySelector('.login');
var error_text = document.querySelectorAll('.Error_text');
var user_name = document.querySelector('.user_name>input');
var user_password = document.querySelector('.user_password>input');
var prompt = document.querySelector('.prompt');
var prompt = document.querySelector('.prompt');
var user = document.querySelectorAll('.user')

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
    var u_name = user_name.value;
    var u_pass = user_password.value;
    var ULR_T = `http://vebcoder.cn:9527/api/login?userName=${u_name}&password=${u_pass}`
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

    $.ajax({
        url: ULR_T,
        method: 'get',
        data: {
        },
        success: function (data) {
            if (data.code == 1) {
                console.log('登录成功');
                for (var x in data) {
                    localStorage.setItem(x, data[x])
                }
            } else {
                error_text[1].style.display = 'block';
                return;
            }
        },
        error: function (err) {
            console.log(err)
        }
    });
    localStorage.setItem("status", true);

    // prompt.innerHTML = `<span class="iconfont icon-gouhao"></span>登录成功,欢迎${u_name}登录`;
    // prompt.style.top = "40" + 'px'
    // setTimeout(function () {
    //     prompt.style.top = "-" + "40" + 'px'
    // }, 2000);
    window.parent.resgiter_status = 1
    window.parent.resgiter_status_test = `登录成功,欢迎${u_name}`
    setTimeout(function () {
        location.href = "../view/home.html"
        window.parent.State_val = '0'
    }, 2400)
}
var getScrollHeight = function () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}
setTimeout(function () {
    console.log(getScrollHeight())
    window.parent.ifr_height = 1;
    window.parent.ifr.style.height = 400 + 'px'
}, 200)
