// *************************
// AJAX Code

function createRequestObject() {
    var tmpXmlHttpObject;

    //depending on what the browser supports, use the right way to create the XMLHttpRequest object
    if (window.XMLHttpRequest) {
        // Mozilla, Safari would use this method ...
        tmpXmlHttpObject = new XMLHttpRequest();

    } else if (window.ActiveXObject) {
        // IE would use this method ...
        tmpXmlHttpObject = new ActiveXObject("Microsoft.XMLHTTP");
    }

    return tmpXmlHttpObject;
}

var http = createRequestObject();

function makeGetRequest(name, email, number) {
    //make a connection to the server
    var url = 'http://localhost:8888/validate.php?name=' + name + '&email=' + email + '&number=' + number;
    http.open('get', url);

    //assign a handler for the response
    http.onreadystatechange = processResponse;

    //actually send the request to the server
    http.send(null);
}

function processResponse() {
    //check if the response has been received from the server
    if(http.readyState == 4){

        // DO THE JAVASCRIPT THANG
        alert(http.responseText);
    }
}

var validateEmail = function(input) {
    var $email = $('form input[name="email');
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
    if ($email.val() == '' || !re.test($email.val())) {
        alert('Please enter a valid email address.');
        return false;
    } else {
        return true;
    }
};

var validateNumber = function(input) {
    if ((input >= 1) && (input <= 9999)) {
        return true;
    } else {
        return false;
    }
};

var validateName = function(input) {
    var name1 = input.search("Beethoven");
    var name2 = input.search("Josh Grobin");
    var name3 = input.search("Nickelback");
    if (name1 > -1 || name2 > -1 || name3 > -1) {
        return true;
    } else {
        return false;
    }
};

$(document).ready(function() {
    $(".lyrics").hide();
    $("form#validate").submit(function(event) {

        var email = $("input#email").val();
        var number = $("input#number").val();
        var name = $("input#name").val();

        var email_result = validateEmail(email);
        var number_result = validateNumber(number);
        var name_result = validateName(name);

        if (email_result && number_result && name_result)
        {
            // send AJAX
            makeGetRequest(name, email, number);
        }
        else {
            alert("invalid");
        }

        //display lyrics
        $(".lyrics").show();
        setTimeout(function() { $(".lyrics").hide(); }, 5000);
        //display js validation
        $(".email_result").text(email_result);
        $(".number_result").text(number_result);
        $(".name_result").text(name_result);
        //reset inputs
        $("input#email").val("");
        $("input#number").val("");
        $("input#name").val("");

        event.preventDefault();
    });
});
