$(function() {

    $("#form").submit(function() {
        console.log("hej");

        var myString = $("#table").val();

        if (myString && (myString !== "No input" || myString !== "Error")) {
            $("#table").val("");

            var regex = /^([0-9]+)?(\+|\-|\*|\/)([0-9]+)$/;

            var result = myString.match(regex);

            var one = parseInt(result[1]);
            var operator = result[2];
            var two = parseInt(result[3]);

            var error = 0;

            switch (operator) {
                case '+':
                    result = one + two;
                    break;

                case '-':
                    result = one - two;
                    break;

                case '*':
                    result = one * two;
                    break;

                case '/':
                    result = one / two;
                    result = result.toFixed(2);
                    break;

                default:
                    error = 1;
            }

            if (error === 0)
                $("#table").val("=" + result);
            else
                $("#table").val("Error");
        }
        else {
            $("#table").val("No input");
        }
        event.preventDefault();
    });

    $("input[type=button]").click(function() {
        console.log($(this).val());

        if ($("#table").val().indexOf("=") > -1)
            $("#table").val("");

        $("#table").val($("#table").val() + $(this).val());
    });
});