function navResponsive() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

function () {
function validateForm() {
		
		var nameField = document.forms["signup-form"]["fname"].value;
		var nameField = document.forms["signup-form"]["lname"].value;
		var emailField = document.forms["signup-form"]["email"].value;
		var phoneField = document.forms["signup-form"]["phone"].value;

		if (nameField === "") {
            alert("All information must be filled out");
            return false;
        }
		
		if (nameField === "") {
            alert("All information must be filled out");
            return false;
        }

        if (emailField === "") {
            alert("All information must be filled out");
            return false;
        }

        if (phoneField === "") {
            alert("All information must be filled out");
            return false;
        }
	}
	
	document.forms["signup-form"].addEventListener('submit', validateForm);

})();

function resetform() {
document.getElementById("myform").reset();
}