$(function() {

    $("#form").submit(function(event) {

        var email = $("#emailBox").val();
        var phone = $("#phoneNumber").val();
        var name = $("#firstNameBox").val();

        var emailResult = doRegex(email, /^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$/);
        var phoneResult = doRegex(phone, /^[0-9]{10}$/);
        var nameResult = doRegex(name, /^[a-zA-Z]+$/);

        var error = [];

        if (emailResult === null)
            error.push("Invalid email");

        if (phoneResult === null)
            error.push("Invalid phone");

        if (nameResult === null)
            error.push("Invalid name");

        if (error.length > 0) {
            for (var i = 0; i < error.length; i++) {
                $("#error").html("<p>" + error[i] + "</p>");
            }
        }
        else {
            $("#error").html("<p>Form is valid!</p>");
        }

        event.preventDefault();
    });

    function doRegex(myString, regex) {

        return myString.match(regex);
    }
});


// Mail Regex : ^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$

// Phonenumber Regex : ^[0-9]{10}$

//name regex: ^[a-zA-Z]+$