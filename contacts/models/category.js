steal("can/model", "can/observe/attributes")
	.then(function(){
		can.Model('Contacts.Models.Category', {
			findAll : 'GET categories',
			create : 'POST categories'
		}, {
		});
	})
