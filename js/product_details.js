var commodity_pic = document.querySelector('.commodity_pic');
var mark = document.querySelector('.mark');
var big_commodity_pic = document.querySelector('.big_commodity_pic>img');


commodity_pic.onmousemove = function (e) {
    mark.style.display = 'block'
    big_commodity_pic.style.display = 'block'

    var moveX = e.pageX - (mark.clientWidth / 2) - commodity_pic.offsetTop
    var moveY = e.pageY - (mark.clientHeight/ 2) - commodity_pic.offsetLeft
    console.log(e.pageX, mark.clientWidth, commodity_pic.offsetLeft, moveX)
    console.log(e.pageY, mark.clientHeight, commodity_pic.offsetTop, moveY)
    if (moveX < 0) {
        moveX = 0
        mark.style.left = moveX + 'px';
    }
    if (moveY < 0) {
        moveY = 0
        mark.style.top = moveY + 'px';
    }
    if (moveX > 200) {
        moveX = 200
        mark.style.left = moveX + 'px';
    }
    if (moveY > 200) {
        moveY = 200
        mark.style.top = moveY + 'px';
    }
    mark.style.left = moveX + 'px';
    mark.style.top = moveY + 'px';

    big_commodity_pic.style.left = -moveX * 2 + 'px'
    big_commodity_pic.style.top = -moveY * 2 + 'px'

}
commodity_pic.onmouseout = function (e) {
    mark.style.display = 'none'
    big_commodity_pic.style.display = 'none'
}
