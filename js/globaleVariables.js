var Util = {};
var surName, firstName, dateOfBirth, form, gender_woman, gender_man, gender, table, age;
var Persons = [];
var idOfUser = 0;
var counter = 0;

Util.init = function() {
	saveBttn = $('#SaveBttn');
	loadBttn = $('#LoadBttn');
	surName = $('#surName');
	firstName = $('#firstName');
	gender_man = $('#radio_man');
	gender_woman = $('#radio_women');
	gender = 'man';
	dateOfBirth = $('#dob');
	form = $('#myform');
	table = $('#myTable');
	Helper.hideTable();
	Helper.setMaxValueForDatePicker();
	Helper.ShowHideAge();
	if (localStorage.getItem('Persons') === null) {
		$('#LoadBttn').prop('disabled', true);
	}
};
