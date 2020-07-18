var search = document.querySelector(".top_right_input");
var search_input = document.querySelector(".top_right_input>input");

search_input.onclick = function(){
    search.style.borderColor = ''
    search.style.borderColor = '#800080'
}
search.onmouseover = function(){  //导航栏搜索框的移入事件
    search.style.borderColor = 'blue'
}
search.onmouseout = function(){
    search.style.borderColor = ''
}
