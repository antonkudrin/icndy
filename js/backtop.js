function up() {  
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
if(top > 0) {  
  window.scrollBy(0,((top+100)/-15));  
  t = setTimeout('up()',30);  
} else clearTimeout(t);  
return false;  
} 

// +100 - это высота на которой скрипт начинает замедлятся вверху.
// -10 - это количество пикселей, которое прокручивается при движении на верх.
// 20 - это 0,02 секунды за которые прокручиваются те 10 пикселей что указаны как (-10)

// Добавление кнопки.

// <div id="back-top">
// <a href="#" onclick="return up()">ВВЕРХ</a>  
// </div>

