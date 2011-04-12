steal.plugins("jquery/model", "jquery/model/list/local")
	.then(function(){
		$.Model('Contacts.Models.Contact', {
			name: function(){
				return this.first+" "+this.last;
			},
			getRelated: function(name, id){
				return this.Class.namespace[$.String.capitalize(name)].list.get(this[name+"Id"])[0]
			},
			category: function(){
				return this.getRelated("category")
			},
			location: function(){
				return this.getRelated("location")
			},
			company: function(){
				return this.getRelated("company")
			}
		})
		
		$.fixture.make('contact', 1000, function(i){
			var names = ["monkey", "cheeta", "bear", "dog", "cat", "hippo", "pony"],
				types = ["audio", "video", "image", "flash"],
				firsts = ["Brian", "Bob", "Ken", "Julia", "Mike"],
				lasts = ["Jones", "Bonds", "Austin", "Park", "Kim"];
			return {
				id: i,
				first: firsts[i%5],
				last: lasts[i%5],
				categoryId: (i%7)+1,
				companyId: (i%5)+1,
				locationId: (i%10)+1
			}
		},
		function(item, settings){
			if(settings.data.categoryId){
				return item.categoryId == settings.data.categoryId;
			}
			if(settings.data.locationId){
				return item.locationId == settings.data.locationId;
			}
			if(settings.data.companyId){
				return item.companyId == settings.data.companyId;
			}
			return true;
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