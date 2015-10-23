$(function() {
    
    // console.log("Hello world");
    
    var myArray = ["boll2", "boll2", 
                "boll3", "boll3", 
                "boll4", "boll4", 
                "boll5", "boll5"];
                
    // myArray = shuffle(myArray);
    
    // console.log(myArray);
    
    function doABarrelRoll(myArray, bakgrund) {
    
        var temp = 0;
        
        for (var i = 0; i < 2; i++) {
            
            // <tr>
            $("tbody").append("<tr>");
            
            // console.log("<tr>");
            
            for (var j = temp; j < myArray.length; j += 1) {
                // <td class="stuff"></td>
            
                //var tempElement = $("tr").append("td");
                
                $("tbody").append("<td>");
                
                // console.log("<td>");
                
                // $("td").last().addClass("bakgrund " + myArray[j]);
                //tempElement.addClass("bakgrund " + myArray[i]);    
            
                if (bakgrund)
                    $("td").last().addClass("bakgrund " + myArray[j]);
                else
                    $("td").last().addClass(myArray[j]);
            
                // console.log("</td>");
            
                $("tbody").append("</td>");
            
                if (j === 3)
                    break;
                    
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
    
    setTimeout(function() {
        
        $("td").each(function() {
            
            $(this).addClass("bakgrund");
        });
        
        console.log("timeout is false");
        
        doNext();
        
    }, 1500);
    
    function doNext() {
    
        myArray = shuffle(myArray);
        
        $("tbody").html("");
        
        doABarrelRoll(myArray, true);
        
        onTimeout = false;
        
        // On click remove background
        $("td").click(function() {
            
            console.log("click");
            
            if (onTimeout || $(this).hasClass("done"))
            {
                event.preventDefault();
                return;
            }
            
            $(this).removeClass("bakgrund");
            
            $(this).attr("value", "1");
            
            var parentElement = $(this);
            
            $("td").each(function() {
                
                var childElement = $(this);
                
                if (childElement.hasClass("done"))
                    return true;
                
                // If it does not contain class
                if (!childElement.hasClass("bakgrund")) {
                    
                    if (childElement.attr("value") === undefined)
                    {
                        
                        if (childElement.attr("class") === parentElement.attr("class"))
                        {
                            wins += 1;
                            
                            childElement.addClass("done");
                            parentElement.addClass("done");
                            
                            childElement.removeClass("invalid");
                            parentElement.removeClass("invalid");
                            
                            childElement.addClass("valid");
                            parentElement.addClass("valid");
                            
                            if (wins === 4)
                                var audioRight = new Audio('sound/win.mp3');
                            else
                                var audioRight = new Audio('sound/right.mp3');
                                
                            audioRight.play();
                            
                        }
                        else
                        {
                            childElement.removeClass("valid");
                            parentElement.removeClass("valid");
                            
                            childElement.addClass("invalid");
                            parentElement.addClass("invalid");
                            
                            var audioLose = new Audio('sound/fail.mp3');
                            audioLose.play();
                            
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
        
        var currIndex = array.length, tempValue, rand ;
        
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