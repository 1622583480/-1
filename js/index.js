var search = document.querySelector(".top_right_input");
var search_input = document.querySelector(".top_right_input>input");
var tab_list = document.querySelectorAll(".tab_list>li");

tab_list[4].style.display = "none";
tab_list[3].style.display = "none";

setInterval(function () {
    var flag = localStorage.getItem("status")
    console.log(flag);
    if(flag == "false"){
        flag = false
    }
    if (flag) {
        console.log(132323224)
        tab_list[1].style.display = "none"
        tab_list[2].style.display = "none"
        tab_list[3].style.display = "block"
        tab_list[4].style.display = "block"
    } else {
        console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        tab_list[1].style.display = "block"
        tab_list[2].style.display = "block"
        tab_list[3].style.display = "none"
        tab_list[4].style.display = "none"
    }
}, 500)

tab_list[4].onclick = function () {
    localStorage.setItem("status", false);
}
search_input.onfocus = function () {
    search.style.borderColor = '#800080'
}
search_input.onblur = function () {
    search.style.borderColor = ''
}






