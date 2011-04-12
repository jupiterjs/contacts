steal.plugins('jquery/controller/view', 'jquery/view/ejs', 'jquery/dom/form_params')
	.css('create')
	.then(function($){

/**
 * @class Jupiter.Create
 */
$.Controller('Jupiter.Create',
/* @Static */
{
	defaults : {
		model : null,
		appendedEl : null,
		form: null
	}
},
/* @Prototype */
{
	init : function(){
		this.element.html(this.view());
		this.forms = $([]);
	},
	'.createbutton click': function(){
		var form = $($.View(this.options.form, {})).appendTo(this.options.appendedEl);
		this.forms = this.forms.add(form);
	},
	"{appendedEl} keyup": function(el, ev){
		if(ev.keyCode == 13 || ev.charCode == 13){ // user hit enter
			this.options.appendedEl.find("form").submit();
		}
	},
	"{appendedEl} form submit": function(el, ev){
		ev.preventDefault()
		var params = el.formParams();
		var item = new this.options.model(params);
		item.save();
		this.forms.remove();
		this.forms = $([]);
	}
})

});