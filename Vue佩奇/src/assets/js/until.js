
// import Swiper from 'swiper'
//打开轮播
const startSwiper = ()=> {
	  //轮播图
	// 
	    var mySwiper = new Swiper('.swiper-container', {
		grabCursor : true,
			// direction: 'vertical', // 垂直切换选项
			autoplay: {
			// true,
				delay:3000,
			},//可选选项，自动滑动
			loop: true, // 循环模式选项
			speed:300,
		// 如果需要分页器
			pagination: {
			  el: '.swiper-pagination',
		  },
	  })
}
function setNum(num) {
	num += '';
	num = num.replace(/[^0-9|\.]/g, '');
	if (/^0+/) { num = num.replace(/^0+/, '') }
	if (!/\./.test(num)) { num += '.00' }
	if (/^\./.test(num)) { num = '0' + num }
	num += '00';
	num = num.match(/\d+\.\d{2}/)[0];
	return num
}
//rem
function rem(designWidth, maxWidth) {
	var doc = document,
	win = window,
	docEl = doc.documentElement,
	remStyle = document.createElement("style"),
	tid;

	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;
		maxWidth = maxWidth || 540;
		width>maxWidth && (width=maxWidth);
		var rem = width * 100 / designWidth;
		remStyle.innerHTML = 'html{font-size:' + rem + 'px!important;}';
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

	win.addEventListener("resize", function() {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 300);
	}, false);

	win.addEventListener("pageshow", function(e) {
		if (e.persisted) {
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);

	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}
}
rem(375, 1024);
module.exports = {
	startSwiper,
}


