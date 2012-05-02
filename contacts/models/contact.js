steal("can/model", "can/util/fixture").then(function () {
	can.Model('Contacts.Models.Contact', {
		name : function () {
			return this.first + " " + this.last;
		},
		getRelated : function (name, id) {
			return this.constructor.namespace[can.String.capitalize(name)].list.get(this[name + "Id"])[0]
		},
		category : function () {
			return this.getRelated("category")
		},
		location : function () {
			return this.getRelated("location")
		},
		company : function () {
			return this.getRelated("company")
		}
	})

	can.fixture.make('contact', 1000, function (i) {
		var names = ["monkey", "cheeta", "bear", "dog", "cat", "hippo", "pony"],
			types = ["audio", "video", "image", "flash"],
			firsts = ["Brian", "Bob", "Ken", "Julia", "Mike", "Deb", "Rory", "Micky"],
			lasts = ["Jones", "Bonds", "Austin", "Park", "Kim", "Johnson"];
		return {
			id : i,
			first : firsts[i % 8],
			last : lasts[i % 6],
			categoryId : (i % 7) + 1,
			companyId : (i % 5) + 1,
			locationId : (i % 9) + 1
		}
	});
})
