steal.plugins('jquery/controller').then(function($){

/**
 * @class Jupiter.List
 */
$.Controller('Jupiter.List',
/* @Static */
{
	defaults : {
	
	}
},
/* @Prototype */
{
	init : function(){
		this.element.html("Hello World!");
	}
})

});