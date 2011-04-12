steal.css("../../mxui/data/grid/grid", "grid").plugins('mxui/data/grid').then(function($){

/**
 * @class Clui.Grid
 */
$.Controller('Jupiter.Grid',
/* @Static */
{
	defaults : {
		model: null,
		params: null
	}
},
/* @Prototype */
{
	init : function(){
		this.element.append(this.view())
		var gridOptions = {};
		$.extend(gridOptions, this.options, {newPageClears: false});
		this.find(".cluigrid").mxui_data_grid(gridOptions);
		this.bind(this.find(".scrollBody")[0], "scroll", "gridscroll")
	},
	gridscroll: function(el, ev){
		if (el[0].scrollHeight - el.scrollTop() == el.outerHeight()) { // we're at the bottom
			this.options.params.attr("offset", this.options.params.offset + 50)
		}
	}
})

});