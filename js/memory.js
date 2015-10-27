$(function() {

    // console.log("Hello world");
    var result = prompt("Skriv in hur många par du vill ha");
while(true){
    if(result < 2 || result > 100)
    result = prompt("Fel! skriv in igen");
    else if (result % 1 !== 0)
    result = prompt("Fel! skriv in igen");
    else
    break;
}
result = result*2;
console.log(result);




    var myArray = ["boll1", "boll1",
"boll2", "boll2",
"boll3", "boll3",
"boll4", "boll4",
"boll5", "boll5",
"boll6", "boll6",
"boll7", "boll7",
"boll8", "boll8",
"boll9", "boll9",
"boll10", "boll10",
"boll11", "boll11",
"boll12", "boll12",
"boll13", "boll13",
"boll14", "boll14",
"boll15", "boll15",
"boll16", "boll16",
"boll17", "boll17",
"boll18", "boll18",
"boll19", "boll19",
"boll20", "boll20",
"boll21", "boll21",
"boll22", "boll22",
"boll23", "boll23",
"boll24", "boll24",
"boll25", "boll25",
"boll26", "boll26",
"boll27", "boll27",
"boll28", "boll28",
"boll29", "boll29",
"boll30", "boll30",
"boll31", "boll31",
"boll32", "boll32",
"boll33", "boll33",
"boll34", "boll34",
"boll35", "boll35",
"boll36", "boll36",
"boll37", "boll37",
"boll38", "boll38",
"boll39", "boll39",
"boll40", "boll40",
"boll41", "boll41",
"boll42", "boll42",
"boll43", "boll43",
"boll44", "boll44",
"boll45", "boll45",
"boll46", "boll46",
"boll47", "boll47",
"boll48", "boll48",
"boll49", "boll49",
"boll50", "boll50",
"boll51", "boll51",
"boll52", "boll52",
"boll53", "boll53",
"boll54", "boll54",
"boll55", "boll55",
"boll56", "boll56",
"boll57", "boll57",
"boll58", "boll58",
"boll59", "boll59",
"boll60", "boll60",
"boll61", "boll61",
"boll62", "boll62",
"boll63", "boll63",
"boll64", "boll64",
"boll65", "boll65",
"boll66", "boll66",
"boll67", "boll67",
"boll68", "boll68",
"boll69", "boll69",
"boll70", "boll70",
"boll71", "boll71",
"boll72", "boll72",
"boll73", "boll73",
"boll74", "boll74",
"boll75", "boll75",
"boll76", "boll76",
"boll77", "boll77",
"boll78", "boll78",
"boll79", "boll79",
"boll80", "boll80",
"boll81", "boll81",
"boll82", "boll82",
"boll83", "boll83",
"boll84", "boll84",
"boll85", "boll85",
"boll86", "boll86",
"boll87", "boll87",
"boll88", "boll88",
"boll89", "boll89",
"boll90", "boll90",
"boll91", "boll91",
"boll92", "boll92",
"boll93", "boll93",
"boll94", "boll94",
"boll95", "boll95",
"boll96", "boll96",
"boll97", "boll97",
"boll98", "boll98",
"boll99", "boll99",
"boll100","boll100",
    ];
    
myArray = myArray.slice(0, result);

    // myArray = shuffle(myArray);

    // console.log(myArray);

    function doABarrelRoll(myArray, bakgrund) {

        var temp = 0;

        for (var i = 0; i < 2; i++) {

            // <tr>
            $("tbody").append("<tr>");

            // console.log("<tr>");
            for (var j = temp; j < result; j += 1) {
                // <td class="stuff"></td>

                //var tempElement = $("tr").append("td");

                $("tbody").append("<td>");

                // console.log("<td>");

                // $("td").last().addClass("bakgrund " + myArray[j]);
                //tempElement.addClass("bakgrund " + myArray[i]);    

                if (bakgrund)
                    $("td").last().addClass("bakgrund boll " + myArray[j]);
                else
                    $("td").last().addClass("boll " + myArray[j]);

                // console.log("</td>");

                $("tbody").append("</td>");
                if ((j + 1) % 8 === 0)
                $("tbody").append("<tr></tr>");

                //temp = j;
                temp++;
            }

            $("tbody").append("</tr>");

            // console.log("</tr>");

            // </tr>
            temp++;
        }

    }

    doABarrelRoll(myArray, false);

    var onTimeout = true;

    var wins = 0;

    var myAudio = new Audio();

    $("#knapp").click(function() {

        $("td").each(function() {

            $(this).addClass("bakgrund");
        });

        console.log("timeout is false");

        doNext();

        function doNext() {

            myArray = shuffle(myArray);

            $("tbody").html("");

            doABarrelRoll(myArray, true);

            onTimeout = false;

            // On click remove background
            $("td").click(function() {

                console.log("click");

                if (onTimeout || $(this).hasClass("done")) {
                    event.preventDefault();
                    return;
                }
                
                $(this).addClass("selected");

                $(this).removeClass("bakgrund");

                $(this).attr("value", "1");

                var parentElement = $(this);

                $("td").each(function() {

                    var childElement = $(this);

                    if (childElement.hasClass("done"))
                        return true;

                    // If it does not contain class
                    if (!childElement.hasClass("bakgrund")) {
                        
                        if (childElement.attr("value") === undefined) {
                            
                            if (childElement.attr("class") === parentElement.attr("class")) {
                                wins += 1;

                                childElement.removeClass("selected");
                                parentElement.removeClass("selected");

                                childElement.addClass("done");
                                parentElement.addClass("done");

                                childElement.removeClass("invalid");
                                parentElement.removeClass("invalid");

                                childElement.addClass("valid");
                                parentElement.addClass("valid");

                                myAudio.pause();
                                myAudio.currentTime = 0;

                                if (wins === result / 2) {
                                    // var audioRight = new Audio('sound/win.mp3');
                                    myAudio.src = "sound/win.mp3";
                                }
                                else {
                                    myAudio.src = "sound/right.mp3";
                                    // var audioRight = new Audio('sound/right.mp3');
                                }

                                myAudio.play();

                            }
                            else {
                                
                                childElement.removeClass("selected");
                                parentElement.removeClass("selected");
                                
                                childElement.removeClass("valid");
                                parentElement.removeClass("valid");

                                childElement.addClass("invalid");
                                parentElement.addClass("invalid");

                                // var audioLose = new Audio('sound/fail.mp3');
                                // audioLose.play();

                                myAudio.pause();
                                myAudio.currentTime = 0;

                                myAudio.src = "sound/fail.mp3";

                                myAudio.play();

                                onTimeout = true;

                                setTimeout(function() {

                                    childElement.removeClass("invalid");
                                    parentElement.removeClass("invalid");

                                    childElement.addClass("bakgrund");
                                    parentElement.addClass("bakgrund");

                                    onTimeout = false;
                                }, 1000);
                            }
                        }
                    }
                });

                $(this).removeAttr("value");
                // $(this).attr("value", "1");
            });

        }

        function shuffle(array) {

            var currIndex = array.length,
                tempValue, rand;

            while (0 !== currIndex) {

                rand = Math.floor(Math.random() * currIndex);
                currIndex -= 1;

                tempValue = array[currIndex];
                array[currIndex] = array[rand];
                array[rand] = tempValue;
            }

            return array;
        }

    });
});