steal("can/model", "can/observe/attributes")
	.then(function(){
		can.Model('Contacts.Models.Location', {
			findAll : 'GET locations',
			create : 'POST locations'
		}, {})
	})
