SPA
==========

SPA 소개

## 자바스크립트 다시 배우기

#####변수 선언
```
	var spa = "Hello world"
```
#####변수 선언 블록
```
	var book, shopping_cart, spa = "Hello World", purchase_book = true;
```
#####객체리터럴
객체 리터럴은 콤마로 구분된 속성 목록을 중괄호로 감싼 객체다. 각 속성은 등호 대신 콜론으로 정의한다. 배열도 포함 할 수 있다.메서드는 속성값을 함수로 설정함으로 써 정의할 수 있다. 

```
	var spa = {
		title : "Single Page Web Application",    // 속성
		authors : ["Mike Miko", "Josh Powell"],   // 배열
		buy_now : function(){                     // 함수 
			console.log("Book is purchased");
		}
	}
```
#####변수에 함수 담기
```
	var prison = function () {};
	prison();
```

#####자기실행익명함수
선언과 동시에 실행되면서 외부에서 접근이 어렵다.
```
(function(){ var spa = "hello world"; })();
```
파라미터 전달
```
(function(what_to_eat){
	var sentens = "I am going to eat a " + what_to_eat;
	console.log(sentens);
})('sandwich');
```
jQuery와 프로토타입의 $로 인한 충돌 방지
```
(function($){}(jQuery));
```
#####모듈화
```
var prison = (function(){
	var prisoner_name = 'TACO',
		jail_year = '2777';
	return {
		prisoner : function() {
			return prisoner_name + ' - ' + jail_year;
		},
		setJailNum : function(year){
			jail_year = year;	
		}
	};
})();

console.log(prison.prisoner());
//출력 TACO - 2777  
prison.setJailNum('9999');
console.log(prison.prisoner());
//출력 TACO - 9999

```



기본

```
var spa = (function($){}(jQuery));
```

DOM이 준비되면 SPA를 실행
```
jQuery(document).ready(
	function(){spa.initModule(jQuery('#spa'))};
);
```

전체 틀
```
var spa = (function($){
	// 모듈 변수 스코프 선언
	var 
	// 상수 설정
	configMap = { },
	// 그 외 나머지 모듈 스코프 변수 선언
	$chatSlider,
	toggleSlider, onClickSlider, initModule;
	
	// 슬라이더 높이를 조정
	toggleSlider = function () {};
	
	// 이벤트 헨들러
	// 클릭 이벤트를 받아서 toggleSlider를 호출
	onClickSlider = function ( event ) {};
	
	// Public 메서드 
	// 초기 상태 설정 및 기능을 제공 
	initModule = function ($container) {
		// HTMl 랜더링
		// 슬라이더 높이 및 제목 초기화
		// 클릭 이벤트와 이벤트 핸들러 바인딩
	};
	
	return{initModule : initModule}
}(jQuery));
```