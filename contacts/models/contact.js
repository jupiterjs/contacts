steal("can/model", "can/model/list", "can/util/string").then(function () {
	can.Model('Contacts.Models.Contact', {
		findAll : 'GET contacts',
		create : 'POST contacts'
	}, {
		name : function () {
			return this.first + " " + this.last;
		},

		category : function () {
			return {};
		},

		location : function () {
			return {};
		},

		company : function () {
			return {};
		}
	})
})
