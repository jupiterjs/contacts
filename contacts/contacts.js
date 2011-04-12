steal.plugins(	
	'jupiter/grid',
	'jquery/dom/fixture', 
	'jupiter/list')
	.css('contacts')	// loads styles
	.models('location', 'contact', 'company', 'category')
	.then(function(){
		$("#category").jupiter_list({
			model : Contacts.Models.Category,
			show : "//contacts/views/categoryList",
			title: 'Category',
			create: "//contacts/views/categoryCreate"
		})
		
		$("#location").jupiter_list({
			model : Contacts.Models.Location,
			show : "//contacts/views/categoryList",
			title: 'Location',
			create: "//contacts/views/locationCreate"
		})
		
		$("#company").jupiter_list({
			model : Contacts.Models.Company,
			show : "//contacts/views/categoryList",
			title: 'Company',
			create: "//contacts/views/companyCreate"
		})
	})
