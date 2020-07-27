var container = document.querySelector('.container');

// console.log(fixed_pro)

window.onload = function () {
    shopping_list();
    function shopping_list() {
        var url_typeone = `http://vebcoder.cn:9527/api/goodList?type_one=${sessionStorage.getItem("title_list")}`
        // console.log(url_typeone);
        var Product_title = localStorage.getItem(sessionStorage.getItem("title_list"))
        if (Product_title) {
            Product_title = JSON.parse(Product_title);
            // console.log(Product_title);
            var ul = document.createElement('ul');
            ul.className = 'open_flex all_products'

            var fixed_pro = document.createElement('li');
            window.parent.fixed.innerHTML = null
            for (var i = 0; i < Product_title.length; i++) { 

                var { title, newArr } = Product_title[i];

                fixed_pro = document.createElement('li'); //创建li
                fixed_pro.className = 'scroll'; //li添加类名
                // console.log(fixed_pro) 
                fixed_pro.innerHTML = title; //li添加内容
                var fixed = window.parent.fixed //获取index里面的ul
                fixed.appendChild(fixed_pro) //添加内容

                var pro_title = `<h2 class="Category_title">${title}</h2>`
                // console.log(fixed_pro)
                var div = document.createElement('div');
                div.innerHTML = pro_title

                container.appendChild(div);

                for (var j = 0; j < newArr.length; j++) {
                    // console.log(title, j)
                    var list_item = `
                <a href="" value="${newArr[j].Id}">
                    <img class="item_imgs" src="${newArr[j].img_list_url}" alt="">
                    <h3 class="item_title">${newArr[j].title}</h3>
                    <div class="item_money open_flex">
                        <span class="specific_price">$${newArr[j].price}</span>
                        <div class="Hot_item">${newArr[j].mack}</div>
                    </div>
                </a>
                `
                    // console.log(pro_title);
                    var txt = document.createElement('li');
                    txt.innerHTML = list_item;
                    txt.className = 'item'

                    ul.appendChild(txt);
                }
                container.appendChild(ul);
                ul = document.createElement('ul');
                ul.className = 'open_flex all_products'
                ul.innerHTML = '';
                // console.log('============================')
            }
            var Category_title = document.querySelectorAll('.Category_title')
            window.parent.fixed_pro_click(Category_title); //这里在全部li添加完成之后调用
            

            //fixed_pro_click() 是index里面封装的函数
            // console.log('走了for循环')
        } else {
            console.log('走服务器了 请检查问题');
            $.ajax({
                url: url_typeone,
                method: 'get',
                data: {},
                success: function (data) {
                    // console.log(data);
                    var res = []; // 数组去重
                    var arr = [];  // 最终组好的数据结构
                    var obj = {};  // 数组里面每一个对象
                    var newArr = []; // 数组每一个对象下面的 一堆商品
                    for (var i = 0; i < data.length; i++) {
                        if (res.indexOf(data[i].type_two) == -1) {
                            res.push(data[i].type_two)
                        }
                    }
                    // console.log(res)
                    for (var j = 0; j < res.length; j++) {
                        obj = {};
                        newArr = []
                        obj.title = res[j];
                        /* [
                            {title:咖啡粉,newarr = [{}{}{}{}]
                            {}

                        ]*/ 
                        for (var x = 0; x < data.length; x++) {
                            if (obj.title == data[x].type_two) {
                                // console.log('加入', data[x])
                                newArr.push(data[x])
                            }
                        }
                        obj.newArr = newArr
                        // console.log(obj)
                        arr.push(obj)
                    }
                    // console.log(arr)
                    arr = JSON.stringify(arr);
                    localStorage.setItem(`${sessionStorage.getItem('title_list')}`, arr)
                },
                error: function (err) {
                    console.log(err)
                }

            })
            shopping_list()
        }
    }
    var getScrollHeight = function () {
        // return document.querySelector('.setScrollHeight').scrollTop
        return document.querySelector('main').clientHeight
    }
    // setTimeout(function () {
    //     console.log(getScrollHeight())
    //     window.parent.ifr_height = getScrollHeight();
    //     window.parent.ifr.style.height = 1100 + 'px'
    // }, 200)

    setTimeout(function () {
        window.parent.ifr_height = getScrollHeight()
        console.log(getScrollHeight())
    }, 200)

}

