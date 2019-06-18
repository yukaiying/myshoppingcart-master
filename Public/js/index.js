/*
1.写死数据
    多个店铺（店铺名称）
        一个店铺里面有多个商品（商品名称，图片，型号，颜色，数量，单价，总价）
     new Array(
        店铺1，
        店铺2，
     );
     function 店铺（name,购买的商品List）{

     }
     new Array(){
        商品1，
        商品2
     }
     function 商品（商品名称，图片，型号，颜色，数量，单价，总价）{

     }
2.循环数据，动态生成string类型的html代码
3.将string放入html中展示出来
 */

//模仿后台获取的数据
//店铺列表
const storeList = [
    new Store("eastpak旗舰店",
        [
            new Product("EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包","../Public/images/eastpak2.jpg","EK043363","灰色",1,268.00,268.00),
            new Product("EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包","../Public/images/eastpak2.jpg","EK043363","灰色",1,267.00,267.00),
            new Product("EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包","../Public/images/eastpak2.jpg","EK043363","灰色",1,269.00,269.00)]),
    new Store("迪曼斯家纺直销店",
        [
            new Product("EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包","../Public/images/eastpak2.jpg","EK043363","灰色",1,264.00,264.00),
            new Product("EASTPAK2016依斯柏新品背包 迷你时尚儿童双肩包 潮流小学生书包","../Public/images/eastpak2.jpg","EK043363","灰色",1,265.00,265.00)])
    ];

function Store(name,productList) {
    this.name = name;
    this.productList = productList;
}
function Product(name,img,model,color,num,price,total) {
    this.name = name;
    this.img = img;
    this.model = model;
    this.color = color;
    this.num = num;
    this.price = price;
    this.total = total;
}

//通过js插入html数据
/**
 * for-in
 * for-of
 */
/**
 * 更优写法，es6
 * map
 * foreach
 * join
 * push
 * sort
 *
 * @type {string}
 */
var showHtml = storeList.map(val =>
    `
   <div class="cart-box">
			<div class="shop-info">
				<div class="all-check">
					<input type="checkbox" id="shop0" class="shop-check" />
					<label for="shop0">
						<img src="../Public/images/tianmao-icon.png" />
						店铺：
					</label>
					<a href="#">${val.name}</a>
				</div>
				<div class="shop-name"></div>
			</div>
			<div class="cart-content">
				${val.productList.map(product => `
				    <ul class="cart-list">
					<li class="list-chk">
						<input type="checkbox" id="checkBox0" class="goods-check" style="display: inline-block;" />
					</li>
					<li class="list-msg">
						<div class="list-img">
							<a href="javascript:;">
								<img src=${product.img} alt="" />
							</a>
						</div>
						<div class="list-des">
							<p class="p-info">
								<a href="javascript:;">${product.name}</a>
							</p>
							<p class="p-type">型号：${product.model}</p>
							<p class="p-color">颜色：${product.color}</p>
						</div>
					</li>
					<li class="list-amount">
						<div class="amount-box">
							<a href="javascript:;" class="reduce reSty">-</a>
							<input type="text" value=${product.num} class="sum">
							<a href="javascript:;" class="add">+</a>
						</div>						 
					</li>
					<li class="list-price">
						<p class="non-discount">￥430.00</p>
						<p class="price">￥${product.price}</p>
					</li>
					<li class="list-sum"><p class="sum-price">￥${product.total}</p></li>
					<li class="list-operation">
						<div class="btn-operation">
							<a href="javascript:;" class="btn-del">删除</a>
							<a href="javascript:;" class="btn-col">收藏</a>
						</div>
					</li>
				</ul>
				`).join("")}
			</div>
		</div>
    `
).join("");

// var showHtml = "";
// for(var store of storeList){
//     var showProduct = "";
//     for(var product of store.productList){
//         showProduct += "<ul class=\"cart-list\">\n" +
//             "\t\t\t\t\t<li class=\"list-chk\">\n" +
//             "\t\t\t\t\t\t<input type=\"checkbox\" id=\"checkBox0\" class=\"goods-check\" style=\"display: inline-block;\" />\n" +
//             "\t\t\t\t\t</li>\n" +
//             "\t\t\t\t\t<li class=\"list-msg\">\n" +
//             "\t\t\t\t\t\t<div class=\"list-img\">\n" +
//             "\t\t\t\t\t\t\t<a href=\"javascript:;\">\n" +
//             "\t\t\t\t\t\t\t\t<img src=\""+product.img+"\" alt=\"\" />\n" +
//             "\t\t\t\t\t\t\t</a>\n" +
//             "\t\t\t\t\t\t</div>\n" +
//             "\t\t\t\t\t\t<div class=\"list-des\">\n" +
//             "\t\t\t\t\t\t\t<p class=\"p-info\">\n" +
//             "\t\t\t\t\t\t\t\t<a href=\"javascript:;\">"+product.name+"</a>\n" +
//             "\t\t\t\t\t\t\t</p>\n" +
//             "\t\t\t\t\t\t\t<p class=\"p-type\">型号："+product.model+"</p>\n" +
//             "\t\t\t\t\t\t\t<p class=\"p-color\">颜色："+product.color+"</p>\n" +
//             "\t\t\t\t\t\t</div>\n" +
//             "\t\t\t\t\t</li>\n" +
//             "\t\t\t\t\t<li class=\"list-amount\">\n" +
//             "\t\t\t\t\t\t<div class=\"amount-box\">\n" +
//             "\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"reduce reSty\">-</a>\n" +
//             "\t\t\t\t\t\t\t<input type=\"text\" value=\""+product.num+"\" class=\"sum\">\n" +
//             "\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"add\">+</a>\n" +
//             "\t\t\t\t\t\t</div>\t\t\t\t\t\t \n" +
//             "\t\t\t\t\t</li>\n" +
//             "\t\t\t\t\t<li class=\"list-price\">\n" +
//             "\t\t\t\t\t\t<p class=\"non-discount\">￥430.00</p>\n" +
//             "\t\t\t\t\t\t<p class=\"price\">￥"+product.price+"</p>\n" +
//             "\t\t\t\t\t</li>\n" +
//             "\t\t\t\t\t<li class=\"list-sum\"><p class=\"sum-price\">￥"+product.total+"</p></li>\n" +
//             "\t\t\t\t\t<li class=\"list-operation\">\n" +
//             "\t\t\t\t\t\t<div class=\"btn-operation\">\n" +
//             "\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn-del\">删除</a>\n" +
//             "\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn-col\">收藏</a>\n" +
//             "\t\t\t\t\t\t</div>\n" +
//             "\t\t\t\t\t</li>\n" +
//             "\t\t\t\t</ul>";
//     }
//     showHtml += "<div class=\"cart-box\">\n" +
//         "\t\t\t<div class=\"shop-info\">\n" +
//         "\t\t\t\t<div class=\"all-check\">\n" +
//         "\t\t\t\t\t<input type=\"checkbox\" id=\"shop0\" class=\"shop-check\" />\n" +
//         "\t\t\t\t\t<label for=\"shop0\">\n" +
//         "\t\t\t\t\t\t<img src=\"../Public/images/tianmao-icon.png\" />\n" +
//         "\t\t\t\t\t\t店铺：\n" +
//         "\t\t\t\t\t</label>\n" +
//         "\t\t\t\t\t<a href=\"#\">"+store.name+"</a>\n" +
//         "\t\t\t\t</div>\n" +
//         "\t\t\t\t<div class=\"shop-name\"></div>\n" +
//         "\t\t\t</div>\n" +
//         "\t\t\t<div class=\"cart-content\">\n" +showProduct+
//         "\t\t\t</div>\n" +
//         "\t\t</div>";
// }

var showStore = document.getElementById("show-store");
showStore.innerHTML = showHtml;

// document.getElementsByClassName("add").onclick = function () {
//     alert(1);
// };
/*var addClass = document.getElementsByClassName("add");
for(var add of addClass){
    add.onclick = function () {
        alert(1);
    }
}*/
new Array(...document.getElementsByClassName("add"))
    .forEach(val => val.onclick = function () {
        //通过上一个兄弟节点获取num;
        var num = Number.parseInt(this.previousElementSibling.value);
        this.previousElementSibling.value = num + 1;
        // this.parentNode.parentNode.parentNode.childNodes
        var price = Number.parseFloat(this.parentElement.parentElement.parentElement.children.item(3).lastElementChild.innerHTML.substring(1));
        this.parentElement.parentElement.parentElement.children.item(4).firstElementChild.innerHTML = "￥" + price * (num+1);
        //获取对应的复选框
        var checkedBoxIsChecked = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.checked;
        if(checkedBoxIsChecked){
            //把变更加入到总数当中
            let totalNum = document.getElementById("total-num");
            let totalPrice = document.getElementById("total-price");
            let selfTotalNum = Number.parseInt(totalNum.innerText);
            let selfTotalPrice = Number.parseFloat(totalPrice.innerText.substring(1));
            totalNum.innerText = selfTotalNum + 1 + "";
            totalPrice.innerText = "￥" + (selfTotalPrice + price);
        }
    });

new Array(...document.getElementsByClassName("reduce reSty"))
    .forEach(val => val.onclick = function () {
        //通过上一个兄弟节点获取num;
        var num = Number.parseInt(this.nextElementSibling.value);
        this.nextElementSibling.value = num - 1;
        // this.parentNode.parentNode.parentNode.childNodes
        var price = Number.parseFloat(this.parentElement.parentElement.parentElement.children.item(3).lastElementChild.innerHTML.substring(1));
        this.parentElement.parentElement.parentElement.children.item(4).firstElementChild.innerHTML = "￥" + price * (num-1);
        //获取对应的复选框
        var checkedBoxIsChecked = this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.checked;
        if(checkedBoxIsChecked){
            //把变更加入到总数当中
            let totalNum = document.getElementById("total-num");
            let totalPrice = document.getElementById("total-price");
            let selfTotalNum = Number.parseInt(totalNum.innerText);
            let selfTotalPrice = Number.parseFloat(totalPrice.innerText.substring(1));
            totalNum.innerText = selfTotalNum - 1 + "";
            totalPrice.innerText = "￥" + (selfTotalPrice - price);
        }
    });
Array.of(...document.getElementsByClassName("btn-del")).forEach(val =>
    val.onclick = function () {
        this.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode);
    })
;
Array.of(...document.getElementsByClassName("goods-check")).forEach(val => {
    val.onchange = function () {
        let totalNum = document.getElementById("total-num");
        let totalPrice = document.getElementById("total-price");
        let num = Number.parseInt(this.parentElement.parentElement.children.item(2).firstElementChild.children.item(1).value);
        let price = Number.parseFloat((this.parentElement.parentElement.children.item(4).firstElementChild.innerHTML).substring(1));
        let selfTotalNum = Number.parseInt(totalNum.innerText);
        let selfTotalPrice = Number.parseFloat(totalPrice.innerText.substring(1));
        totalNum.innerHTML = this.checked ? (num + selfTotalNum) + "" : (selfTotalNum - num) + "";
        totalPrice.innerHTML = this.checked ? "￥" + (price + selfTotalPrice) : "￥" + (selfTotalPrice - price);
        // if(this.checked){
        //     //选中
        //     totalNum.innerHTML = (num + selfTotalNum)+"";
        //     totalPrice.innerHTML = "￥" + (price + selfTotalPrice);
        // }else{
        //     //不选中
        //     totalNum.innerHTML = (num + selfTotalNum)+"";
        //     totalPrice.innerHTML = "￥" + (selfTotalPrice - price);
        // }
    }
});
