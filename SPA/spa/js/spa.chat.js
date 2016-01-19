/*
 * spa.chat.js 
 * SPA용 채팅 기능 모듈 
 */

/*jslint           browser : true, continue : true,
	devel  : true, indent  : 2,    maxerr   : 50,
    newcap : true, nomen   : true, plusplus : true,
    regexp : true, sloppy  : true, vars     : false,
    white  : true
*/

/* global $, spa */
spa.chat = (function(){
	// 모듈 스코프 변수 시작
	var
		configMap = {
			main_html : String()
			+ '<div style="padding:1em; color:#fff;">'
				+ 'Say hello to chat'
			+ '</div>',
			settable_map : {}
		},
		stateMap = {$container : null},
		jqueryMap = {},
		setJqueryMap, configModule, initModule;

	//유틸리티 메서드 시작

	// DOM 메서드 시작 
	// DOM 메서드 /setJqueryMap/ 시작
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jqueryMap = {$container : $container};
	};

	// public 메서드 시작 /configModule/
	// 목적 : 허용된 키의 설정 조정
	// 인자 : 설정 가능한 키와 값으로 구성된 맵
	// * color_name - 사용할 색상
	// 설정 : 
	// * configMap.settable_map은 허용된 키를 모두 선언
	// 반환값 : true
	// 예의 : 없음
	configModule = function(input_map){
		spa.util.setConfigMap({
			input_map : input_map,
			settable_map : configMap.settable_map,
			config_map : configMap
		});
		return true;
	};

	// public 메서드 /initModule/
	// 목적 : 모듈 초기화
	// 인자 : 
	// * $container 이 기능에서 사용되는 컨테이너
	// 반환값 : true
	// 예외 : 없음
	initModule = function($container){
		$container.html(configMap.main_html);
		stateMap.$container = $container;
		setJqueryMap();
		return true;
	};

	// public 메서드를 반환
	return {  // 모듈 메서드인 configModule과 initModule을 외부로 노출한다. 두 메서드는 거의 모든 모듈에 사용하는 표준 메서드다. 
		configModule : configModule,
		initModule : initModule
	};
}());























