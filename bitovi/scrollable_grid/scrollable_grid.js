steal('canui/data/grid',
	  "bitovi/create",
	   "bitovi/style",
	   "./grid.css")
	.then(function($){

can.Control('bitovi.ScrollableGrid',
/* @Static */
{
	defaults : {
		model: null,
		params: null,
		// path to EJS of create form
		create: null
	}
},
/* @Prototype */
{
	init : function(){
		this.element.append(this.view())
		var gridOptions = {};
		$.extend(gridOptions, this.options, {newPageClears: false});
		new can.ui.data.Grid(this.element.find(".cluigrid"), gridOptions);
		new bitovi.Create(this.element.find(".create"), {
			model: this.options.model,
			insertInto: this.element.find("tbody"),
			form: this.options.create
		})
		this.element.addClass('ui-widget ui-widget-content ui-corner-all')
		this.on(this.element.find(".scrollBody")[0], "scroll", "gridscroll")
	},
	"{params} updated.attr" : function(params, ev, attr, val){
		if(attr == "count") {
			this.find(".count").html(val)
		}
	},
	gridscroll: function(el, ev){
		if (el[0].scrollHeight - el.scrollTop() == el.outerHeight()) { // we're at the bottom
			this.options.params.attr("offset", this.options.params.offset + 50)
		}
	}
})

});