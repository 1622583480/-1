var btn = document.querySelector('.login');
var error_text = document.querySelectorAll('.Error_text');
var user_name = document.querySelector('.user_name>input');
var user_password = document.querySelector('.user_password>input');
var prompt = document.querySelector('.prompt');


btn.onclick = function (event) {
    event.preventDefault();
    var reg = /^[0-9a-zA-Z]{5,12}$/
    var u_name = user_name.value;
    var u_pass = user_password.value;
    console.log(u_name, u_pass);
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
    localStorage.setItem("username", u_name);
    localStorage.setItem("password", u_pass);
    localStorage.setItem("status", false);
    prompt.innerHTML = `<span class="iconfont icon-gouhao"></span>注册成功,欢迎${u_name}注册`;
    prompt.style.top = "40" + 'px'
    setTimeout(function () {
        prompt.style.top = "-" + "40" + 'px'
    }, 2000);
    setTimeout(function () {
        location.href = "../view/login.html"
    }, 2400)
}