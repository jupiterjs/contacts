steal('can/util', 'can/control',
	'bitovi/scrollable_grid',
	'bitovi/style',
	'bitovi/create',
	'canui/data/list',
	'./contacts.css',
	'./models/location.js',
	'./models/contact.js',
	'./models/company.js',
	'./models/category.js')
	.then('contacts/fixtures').then(function(){
		can.Control("Contacts.Control", {
			init: function(){
				this.params = new can.ui.Data();
				new can.ui.data.List("#category .list_wrapper", {
					model : Contacts.Models.Category,
					show : "//contacts/views/categoryList.ejs",
					create: "//contacts/views/categoryCreate.ejs"
				})

				new can.ui.data.List("#location .list_wrapper", {
					model : Contacts.Models.Location,
					show : "//contacts/views/categoryList",
					create: "//contacts/views/categoryCreate"
				})

				new can.ui.data.List("#company .list_wrapper", {
					model : Contacts.Models.Company,
					show : "//contacts/views/companyList",
					create: "//contacts/views/companyCreate"
				})

				new bitovi.Create("#category .create", {
					model: Contacts.Models.Category,
					form: "//contacts/views/categoryCreate",
					insertInto: $("#category .list_wrapper")
				})

				new bitovi.Create("#company .create", {
					model: Contacts.Models.Company,
					form: "//contacts/views/companyCreate",
					insertInto: $("#company .list_wrapper")
				})

				new bitovi.Create("#location .create", {
					model: Contacts.Models.Location,
					form: "//contacts/views/categoryCreate",
					insertInto: $("#location .list_wrapper")
				})

				new bitovi.ScrollableGrid("#contacts", {
					model : Contacts.Models.Contact,
					params : this.params,
					columns: {
						last: "Name",
						category: "Category",
						company: "Company",
						location: "Location"
					},
					row : "//contacts/views/contactRow",
					create: "//contacts/views/contactCreate"
				})
				$('#contacts').find(".wrapper").can_ui_layout_fill()

				$("h3").style$().header()
				$(".lists > div").style$().box()
			},

			"#category .list_wrapper activate": function(el, ev, item){
				this.params.attr("categoryId", item.id);
			},
			"#category .list_wrapper deactivate": function(el, ev, item){
				this.params.attr("categoryId", null);
			},
			"#location .list_wrapper activate": function(el, ev, item){
				this.params.attr("locationId", item.id);
			},
			"#location .list_wrapper deactivate": function(el, ev, item){
				this.params.attr("locationId", null);
			},
			"#company .list_wrapper activate": function(el, ev, item){
				this.params.attr("companyId", item.id);
			},
			"#company .list_wrapper deactivate": function(el, ev, item){
				this.params.attr("companyId", null);
			},
			"windowresize": function(el, ev){
				$("#contacts").trigger("resize")
			}
		});

		new Contacts.Control(document.body);
	})
