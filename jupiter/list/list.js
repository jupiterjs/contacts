steal.plugins('mxui/data/list', 'jquery/controller/view', 'jupiter/create')
	.css('list')
	.then(function($){

/**
 * @class Jupiter.List
 */
$.Controller('Jupiter.List',
/* @Static */
{
	defaults : {
		model: null,
		show: null,
		title: null,
		// path to ejs file that renders create form
		create: null
	}
},
/* @Prototype */
{
	init : function(){
		this.element.html(this.view());
		var list_wrapper = this.find(".list_wrapper");
		list_wrapper.mxui_data_list(this.options)
		this.find(".create").jupiter_create({
			model: this.options.model,
			form: this.options.create,
			insertInto: list_wrapper
		})
	}
})

});