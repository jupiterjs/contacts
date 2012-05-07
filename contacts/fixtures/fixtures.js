steal('can/util/fixture').then(function() {
	var contacts = can.fixture.make(1000, function (i) {
			var firsts = ["Brian", "Bob", "Ken", "Julia", "Mike", "Deb", "Rory", "Micky"],
				lasts = ["Jones", "Bonds", "Austin", "Park", "Kim", "Johnson"];
			return {
				id : i,
				first : firsts[i % 8],
				last : lasts[i % 6],
				categoryId : (i % 7) + 1,
				companyId : (i % 5) + 1,
				locationId : (i % 9) + 1
			}
		}),
		categories = can.fixture.make(0, function() {
			return {}
		}),
		locations = can.fixture.make(0, function() {
			return {}
		}),
		companies = can.fixture.make(0, function() {
			return {}
		});

	can.fixture('GET contacts', contacts.findAll);
	can.fixture('POST contacts', contacts.create);

	can.fixture('GET categories', 'contacts/fixtures/categories.json');
	can.fixture('POST categories', categories.create);

	can.fixture('GET locations', 'contacts/fixtures/locations.json');
	can.fixture('POST locations', locations.create);

	can.fixture('GET companies', 'contacts/fixtures/companies.json');
	can.fixture('POST companies', companies.create);
})