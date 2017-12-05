$(document).ready(function() {
	// add event listeners for firstName input
	$('#firstName').on('keypress keyup', function() {
		Validation.validateFirstName();
	});

	$('#surName').on('keypress keyup', function() {
		Validation.validateLastName();
	});
	$('#dob').on('change', function() {
		Validation.validateDOB();
	});

	$('#radio_man').on('change', function() {
		Helper.addGender();
	});

	$('#radio_women').on('change', function() {
		Helper.addGender();
	});
	$('#convertDob').on('change', function() {
		Helper.ShowHideAge();
	});
	$('#send_button').on('click', function() {
		Helper.addNewPerson();
	});
	$('#name_up').on('click', function() {
		Sorting.orderFirstNamebyAsc();
	});
	$('#name_down').on('click', function() {
		Sorting.orderFirstNamebyDesc();
	});
	$('#surname_up').on('click', function() {
		Sorting.orderLastNamebyAsc();
	});
	$('#surname_down').on('click', function() {
		Sorting.orderLastNamebyDesc();
	});
	$('#LoadBttn').on('click', function() {
		Helper.LoadFromLocalStorage();
	});
	$('#SaveBttn').on('click', function() {
		Helper.SaveToLocalStorage();
	});
});
