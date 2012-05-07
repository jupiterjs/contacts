steal("can/model", "can/observe/attributes")
	.then(function(){
		can.Model('Contacts.Models.Company', {
			findAll : 'GET companies',
			create : 'POST companies'
		}, {})
	})
