steal.plugins('mxui/data/list', 'jquery/controller/view').then(function($){

/**
 * @class Jupiter.List
 */
$.Controller('Jupiter.List',
/* @Static */
{
	defaults : {
		model: null,
		show: null,
		title: null
	}
},
/* @Prototype */
{
	init : function(){
		this.element.html(this.view());
		this.find(".list_wrapper").mxui_data_list(this.options)
	}
})

});