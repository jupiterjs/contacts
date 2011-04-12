steal.plugins("jquery/model")
	.then(function(){
		$.Model('Contacts.Models.Contact')
		
		$.fixture.make('contact', 1000, function(i){
			var names = ["monkey", "cheeta", "bear", "dog", "cat", "hippo", "pony"],
				types = ["audio", "video", "image", "flash"];
			return {
				id: i,
				first: names[i%7]+" "+i
			}
		})
	})

	
	/**
	 * [{
  "id" : 0,
  "first" : "Justin",
  "last" : "Meyer",
  "categoryId" : 284,
  "companyId" : 1,
  "locationId" : 1
}]
	 */