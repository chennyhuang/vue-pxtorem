(function(window, document) {
	function resize() {
		var ww = window.innerWidth;
		//设计稿以750为宽度，我们把页面宽度设计为 7.5rem
		//baseSize就是postcss.config.js 里面设置的 rootValue 值，这个是设计稿中1rem转换成px的大小
		const baseSize = 100;
		//实际设备页面宽度和设计稿的比值
		const scale = ww / 750;
		//计算实际的rem值并赋予给html的font-size
		document.documentElement.style.fontSize = (baseSize * scale) + 'px';
	}
	if (document.readyState !== 'loading') {
		resize();
	} else {
		document.addEventListener('DOMContentLoaded', resize);
	}
	window.addEventListener('resize', resize);
})(window, document);
