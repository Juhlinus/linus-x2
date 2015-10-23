$(function() {

    $("#form").submit(function(event) {

        var one = $("#one").val();
        var two = $("#two").val();

        var result = inputFunction(one, two);

        $("#result").append("<p>Resultatet är: " + result + "</p>");

        event.preventDefault();
    });

    function inputFunction(one, two) {

        var result;

        one = parseInt(one, 10);
        two = parseInt(two, 10);

        return result = one + two;
    }
});