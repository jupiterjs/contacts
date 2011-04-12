steal.plugins(	
	'jupiter/grid',
	'jquery/dom/fixture', 
	'jupiter/list')
	.css('contacts')	// loads styles
	.models('location', 'contact', 'company', 'category')
	.then(function(){
		var params = new Mxui.Data();
		
		$("#category").jupiter_list({
			model : Contacts.Models.Category,
			show : "//contacts/views/categoryList",
			title: 'Category',
			create: "//contacts/views/categoryCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("categoryId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("categoryId", null)
		})
		
		$("#location").jupiter_list({
			model : Contacts.Models.Location,
			show : "//contacts/views/categoryList",
			title: 'Location',
			create: "//contacts/views/locationCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("locationId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("locationId", null)
		})
		
		$("#company").jupiter_list({
			model : Contacts.Models.Company,
			show : "//contacts/views/companyList",
			title: 'Company',
			create: "//contacts/views/companyCreate"
		})
		.bind("activate", function(ev, item){
			params.attr("companyId", item.id)
		})
		.bind("deactivate", function(ev, item){
			params.attr("companyId", null)
		})
		
		$("#contacts").jupiter_grid({
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
	})
