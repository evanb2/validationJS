<?php

function validateName($n)
{
    $nickelback = strcmp(strtolower($n), "nickelback");
    $beethoven = strcmp(strtolower($n), "beethoven");
    $josh = strcmp(strtolower($n), "josh grobin");

    return ($nickelback == 0 || $beethoven == 0 || $josh == 0);
}

function validateNumber($n)
{
    if (is_null($n)) { return false; }

    return ($n >= 1 || $n <= 9999);
}

$name = $_GET["name"];
$email = $_GET["email"];
$number = $_GET["number"];

$result_name = validateName($name);
$result_email = filter_var($email, FILTER_VALIDATE_EMAIL);
$result_number = validateNumber($number);

// echo $result_name . "\n";
// echo $result_number . "\n";
// echo $result_email . "\n";

if ($result_number && $result_name && $result_email)
{
    # return JSON object with favorite song.
    echo json_encode("Success");
}
else
{
    echo '<html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
            <script src="js/jquery-1.11.2.js"></script>
            <script src="js/scripts.js"></script>
            <title>Validate</title>
        </head>
        <body>
            <h3>Three Inputs to Validate</h3>
            <div class="container">
                <form id="validate">
                    <div class="form-group">
                        <input id="email" type="text" name="email" placeholder="Email Address" required>
                    </div>
                    <div class="form-group">
                        <label for="number">Number: </label>
                        <input id="number" type="number" name="number" required>
                    </div>
                    <div class="form-group">
                        <input id="name" type="text" name="name" placeholder="Name" required>
                    </div>
                    <button type="submit">Validate!</button>
                </form>

                <div id="result_one">
                    <p>Email: <span class="email_result"></span></p>
                </div>
                <div id="result_two">
                    <p>Number: <span class="number_result"></span></p>
                </div>
                <div id="result_three">
                    <p>Name: <span class="name_result"></span></p>
                </div>
                <p><span class="lyrics">"A Song For Our Grandfathers" :

                                        Been a long time, in a low place
                                        Surrounded by what I have made
                                        Need to get away
                                        Get away from what relates
                                        And what was done…

                                        Cuz it’s all over now

                                        Through the woods, I come running to loose leaf
                                        And carve my name
                                        In the lines, there’s not a trace
                                        I hear the ghost whisper, and those old eyes watching me
                                        But I feel safe…
                                        Grandfather looking over me</span></p>
            </div>
        </body>
    </html>';
}

?>
