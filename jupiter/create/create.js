steal.plugins('jquery/controller').then(function($){

/**
 * @class Jupiter.Create
 */
$.Controller('Jupiter.Create',
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