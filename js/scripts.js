var validateEmail = function(input) {
    var validarray = input.search("@");
    if (validarray === -1) {
        return "Fail";
    } else {
        return "Valid";
    }
};

var validateNumber = function(input) {
    if ((input >= 1) && (input <= 9999)) {
        return "Valid";
    } else {
        return "Fail";
    }
};

var validateName = function(input) {
    var name1 = input.search("Beethoven");
    var name2 = input.search("Josh Grobin");
    var name3 = input.search("Nickelback");
    if (name1 > -1 || name2 > -1 || name3 > -1) {
        return "Valid";
    } else {
        return "Fail";
    }
};

$(document).ready(function() {
    $("form#validate").submit(function(event) {

        var email = $("input#email").val();
        var number = $("input#number").val();
        var name = $("input#name").val();

        var email_result = validateEmail(email);
        var number_result = validateNumber(number);
        var name_result = validateName(name);

        $(".email_result").text(email_result);
        $(".number_result").text(number_result);
        $(".name_result").text(name_result);

        event.preventDefault();
    });
});
