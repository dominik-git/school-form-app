var Helper = {
	/*collect values from inputs and insert to object Person, then the object will pushed to Persons array, also show table and reset form
            The function also check if there are no errors in form and is not allowed to create new user
        */
	addNewPerson: function() {
		if (!Validation.validateForm()) {
			this.pushPersonToArray();
			this.showTable();
			this.renderTable();
			this.ShowHideAge();
			this.resetForm();
			$('#firstNameError').text('');
			$('#surnameError').text('');
			$('#dobError').text('');
			$('#SaveBttn').prop('disabled', false);
			$('#LoadBttn').prop('disabled', true);
		}
	},
	pushPersonToArray() {
		var Person = {};
		Person.name = firstName.val();
		Person.surName = surName.val();
		Person.gender = gender;
		Person.dob = dateOfBirth.val();
		Person.age = this.convertDateToAge(dateOfBirth.val());
		Person.id = idOfUser;
		Persons.push(Person);
		this.increaseID();
	},

	renderTable: function() {
		$('#myTable tbody').empty();
		for (i = 0; i < Persons.length; i++) {
			this.addRow(Persons[i]);
		}
	},

	// Create new row in table with filled values from form
	addRow: function(Person) {
		var cell_name = $('<td class="td_1"></td>').text(Person.name);
		var cell_lastName = $('<td class="td_2"></td>').text(Person.surName);
		var cell_gender = $('<td class="td_3"></td>').text(Person.gender);
		var cell_dob = $('<td class="td_4"></td>').text(Person.dob);
		var cell_age = $('<td class="td_5"></td>').text(Person.age);
		$('#myTable tbody')
			.append('<tr id="row_id_' + Person.id + '"></tr>')
			.append(cell_name)
			.append(cell_lastName)
			.append(cell_gender)
			.append(cell_dob)
			.append(cell_age);
	},
	deleteRow: function(idOfUser) {
		var index = Persons.indexOf(idOfUser);
		Persons.splice(index, 1);
		$('#row_id_' + idOfUser).remove();
		console.log('delete', idOfUser);
	},

	// Reset form values after successful submit
	resetForm: function() {
		firstName.val('');
		surName.val('');
		$('#dob').val('');
	},

	// Function will check which radio button is selected and add appreciate value to gender
	addGender: function() {
		if (gender_man.is(':checked')) {
			gender = 'man';
			console.log(gender);
		}
		if (gender_woman.is(':checked')) {
			gender = 'woman';
			console.log(gender);
		}
	},

	// show table
	showTable: function() {
		$('#myTable').show();
	},
	// Hide table if Persons array is empty
	hideTable: function() {
		if (Persons.length <= 0) {
			$('#myTable').hide();
			$('#SaveBttn').prop('disabled', true);
		}
	},

	//convert date of birth to years
	convertDateToAge: function(dateString) {
		var birthday = +new Date(dateString);
		return ~~((Date.now() - birthday) / 31557600000);
	},
	ShowHideAge: function() {
		var isChecked = document.getElementById('convertDob').checked;
		var column = $('.td_5');
		if (isChecked) {
			$('#textOfDobInput').text('Hide Age');
			$(column).show();
		} else {
			$('#textOfDobInput').text('Show Age');
			$(column).hide();
		}
	},

	// set current date as max value for DatePicker, It prevets to select value from future
	setMaxValueForDatePicker: function() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}
		if (mm < 10) {
			mm = '0' + mm;
		}
		today = yyyy + '-' + mm + '-' + dd;
		document.getElementById('dob').setAttribute('max', today);
	},
	increaseID: function() {
		idOfUser = idOfUser + 1;
	},
	LoadFromLocalStorage: function() {
		Persons = [];
		Persons = JSON.parse(localStorage.getItem('Persons'));
		$('#SaveBttn').prop('disabled', false);
		$('#LoadBttn').prop('disabled', true);
		this.showTable();
		this.renderTable();
	},
	SaveToLocalStorage: function() {
		localStorage.setItem('Persons', JSON.stringify(Persons));
	},

	handleDisabledButtons: function() {}
};
