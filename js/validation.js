var Validation = {
	validateFirstName: function() {
		if (firstName.val().trim().length === 0) {
			$('#firstNameError').text('Name is required');
			return true;
		} else if (firstName.val().trim().length <= 2) {
			$('#firstNameError').text('First name must be longer than 2 characters');
			return true;
		} else {
			$('#firstNameError').text('');
			return false;
		}
	},
	validateLastName: function() {
		if (surName.val().trim().length === 0) {
			$('#surnameError').text('Name is required');
			return true;
		} else if (surName.val().trim().length <= 2) {
			$('#surnameError').text('Sur name must be longer than 2 characters');
			return true;
		} else {
			$('#surnameError').text('');
			return false;
		}
	},
	validateDOB: function() {
		console.log($('#dob').val());
		if (dateOfBirth.val() === '') {
			$('#dobError').text('Date is required');
			return true;
		} else {
			$('#dobError').text('');
			return false;
		}
	},
	validateForm: function() {
		this.validateLastName();
		this.validateFirstName();
		this.validateDOB();

		if (this.validateLastName() || this.validateFirstName() || this.validateDOB()) {
			return true;
		} else return false;
	}
};
