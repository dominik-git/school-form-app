var Sorting = {
	orderFirstNamebyAsc: function() {
		Persons.sort(function(a, b) {
			if (a.name > b.name) return 1;
			return 0;
		});
		Helper.renderTable();
	},
	orderFirstNamebyDesc: function() {
		Persons.sort(function(b, a) {
			if (a.name > b.name) return 1;
			return 0;
		});
		Helper.renderTable();
	},
	orderLastNamebyAsc: function() {
		Persons.sort(function(a, b) {
			if (a.surName > b.surName) return 1;
			return 0;
		});
		Helper.renderTable();
	},
	orderLastNamebyDesc: function() {
		Persons.sort(function(b, a) {
			if (a.surName > b.surName) return 1;
			return 0;
		});
		Helper.renderTable();
	}
};
