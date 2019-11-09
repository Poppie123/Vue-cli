function rem(designWidth, maxWidth) {
	var doc = document,
		win = window,
		docEl = doc.documentElement,
		remStyle = document.createElement("style"),
		tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width > maxWidth && (width = maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
	}

	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	refreshRem();

	win.addEventListener("resize", function () {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function (e) {
		if (e.persisted) {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function (e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
}
rem(750, 1024);

// // 解析url搜索框内的值
// function getQueryString(name) {
// 	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
// 	var r = window.location.search.substr(1).match(reg);
// 	if (r != null) return decodeURI(r[2]); return null;
// 	//unescape(r[2]);
// }

// //封装AJAX
// function reqAjax(reqUrl, data, callback, method) {
// 	$.ajax({
// 		url: reqUrl,
// 		method: method || 'post',
// 		data: data,
// 		success: function (res) {
// 			if (res.msg == "尚未登录！") {
// 				window.location.href = "./login.html"
// 			}
// 			hui.loading(false, true);//关闭loading动画
// 			hui.endLoadMore(true)//上拉加载结束  
// 			callback(res)
// 		},
// 		err: function (err) {
// 			hui.loading(false, true)
// 			alert('服务器出错')
// 		}
// 	})
// }

// // 封装跳转
// $(document).on('click', '.link-to', function () {
// 	var href = $(this).data('href');
// 	if (!href) return
// 	var dt = $(this).data();
// 	var str = "";
// 	for (var key in dt) {
// 		if (dt.hasOwnProperty(key)) {
// 			if (key != 'href') {
// 				str += key.toString() + "=" + dt[key] + '&'
// 			}
// 		}
// 	}
// 	console.log(str)
// 	window.location.href = href + "?" + str
// })

// //判断登录
// function isLogin() {
// 	return localStorage.getItem('uid') ? true : false
// }
// //底部跳转
// $(document).on('click', '.footer-item', function () {
// 	var cindex = $('.footer .active').index()
// 	var index = $(this).index();
// 	if (cindex == index) {
// 		return false
// 	}
// 	console.log(index)
// 	if (index == 0) {
// 		window.location.href = "./index.html"
// 	} else if (index == 1) {
// 		window.location.href = "./classify.html"
// 	} else if (index == 2) {
// 		isLogin() ? window.location.href = "./shopping-trolley.html" : window.location.href = "./login.html"
// 	} else if (index == 3) {
// 		isLogin() ? window.location.href = "./user.html" : window.location.href = "./login.html"
// 	}
// })

