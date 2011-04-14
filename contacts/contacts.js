steal.plugins(	
	'jupiter/scrollable_grid',
	'jquery/dom/fixture', 
	'jupiter/style', 
	'mxui/data/list')
	.css('contacts')
	.models('location', 'contact', 'company', 'category')
	.then(function(){
		
		var params = new Mxui.Data();
		
		$("#category .list_wrapper").mxui_data_list({
			model : Contacts.Models.Category,
			show : "//contacts/views/categoryList",
			create: "//contacts/views/categoryCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("categoryId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("categoryId", null)
		})
		
		$("#location .list_wrapper").mxui_data_list({
			model : Contacts.Models.Location,
			show : "//contacts/views/categoryList",
			create: "//contacts/views/categoryCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("locationId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("locationId", null)
		})
		
		$("#company .list_wrapper").mxui_data_list({
			model : Contacts.Models.Company,
			show : "//contacts/views/companyList",
			create: "//contacts/views/companyCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("companyId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("companyId", null)
		})
		
		$("#category .create").jupiter_create({
			model: Contacts.Models.Category,
			form: "//contacts/views/categoryCreate",
			insertInto: $("#category .list_wrapper")
		})
		
		$("#company .create").jupiter_create({
			model: Contacts.Models.Company,
			form: "//contacts/views/companyCreate",
			insertInto: $("#company .list_wrapper")
		})
		
		$("#location .create").jupiter_create({
			model: Contacts.Models.Category,
			form: "//contacts/views/categoryCreate",
			insertInto: $("#location .list_wrapper")
		})
		
		$("#contacts").jupiter_scrollable_grid({
			model : Contacts.Models.Contact,
			params : params,
			columns: {
				last: "Name",
				category: "Category",
				company: "Company",
				location: "Location"
			},
			row : "//contacts/views/contactRow",
			create: "//contacts/views/contactCreate"
		})
		.find(".wrapper").mxui_layout_fill()
		
		$(window).resize(function(){
			$("#contacts").trigger("resize")
		})
		
		$("h3").style$().header()
		$(".lists > div").style$().box()
	})
