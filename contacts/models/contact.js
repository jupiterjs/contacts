steal("can/model", "can/observe/attributes", "can/model/list", "can/util/string").then(function () {
	can.Model('Contacts.Models.Contact', {
		findAll : 'GET contacts',
		create : 'POST contacts'
	}, {
		name: function(){
			return this.first+" "+this.last;
		},
		getRelated: function(name, id){
			return this.constructor.namespace[can.capitalize(name)].list.get(this[name+"Id"])[0]
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
})
