steal('jquery').then(function($){
	var style$ = jQuery.sub();
	style$.extend(style$.fn,{
		box : function(){
			return this.addClass('ui-widget ui-widget-content ui-corner-all')
		},
		header : function(){
			return this.addClass('ui-helper-reset ui-state-active')
		},
		$ : function(){
			return $(this);
		}
	});
	$.fn.style$ = function(){
		return style$(this)
	}
})
