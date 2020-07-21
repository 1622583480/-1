var btn = document.querySelector('.login');
var error_text = document.querySelectorAll('.Error_text');
var user_name = document.querySelector('.user_name>input');
var user_password = document.querySelector('.user_password>input');
var prompt = document.querySelector('.prompt');

btn.onclick = function (event) {
    event.preventDefault();
    var u_name = user_name.value;
    var u_pass = user_password.value;
    var item_name = localStorage.getItem("username");
    var item_pass = localStorage.getItem("password");

    if (u_name == item_name) {
        error_text[0].style.display = 'none';
        
    } else {
        error_text[0].style.display = 'block';
        return;
    }
    if (u_pass == item_pass) {
        error_text[1].style.display = 'none';
        
    } else {
        error_text[1].style.display = 'block';
        return;
    }

    localStorage.setItem("status",true);

    prompt.innerHTML = `<span class="iconfont icon-gouhao"></span>登录成功,欢迎${u_name}登录`;
    prompt.style.top = "40" + 'px'
    setTimeout(function () {
        prompt.style.top = "-" + "40" + 'px'
    }, 2000);
    setTimeout(function () {
        location.href = "../view/home.html"
    }, 2400)
}