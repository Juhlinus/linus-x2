$(function() {
    
    // console.log("Hello world");
    
    var myArray = ["boll2", "boll2", 
                "boll3", "boll3", 
                "boll4", "boll4", 
                "boll5", "boll5"];
                
    myArray = shuffle(myArray);
    
    // console.log(myArray);
    
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
            
            $("td").last().addClass("bakgrund " + myArray[j]);
            //tempElement.addClass("bakgrund " + myArray[i]);    
        
            //$("td").last().addClass(myArray[j]);
        
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
    
    var onTimeout = false;
    
    /*
    setTimeout(function() {
        
        $("td").each(function() {
            
            $(this).toggleClass("flip");
        });
        
        onTimeout = false;
        
    }, 500);
    */
    // On click remove background
    $(".bakgrund").click(function() {
        
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
                        childElement.addClass("done");
                        parentElement.addClass("done");
                        
                        childElement.css("border", "5px solid green");
                        parentElement.css("border", "5px solid green");
                    }
                    else
                    {
                        childElement.css("border", "5px solid red");
                        parentElement.css("border", "5px solid red");
                        
                        onTimeout = true;
                        
                        setTimeout(function() {
                            childElement.addClass("bakgrund");
                            parentElement.addClass("bakgrund");
                            
                            childElement.css("border", "1px solid black");
                            parentElement.css("border", "1px solid black");
                            
                            onTimeout = false;
                        }, 1000);
                    }
                }
            }
        });
        
        $(this).removeAttr("value");
        // $(this).attr("value", "1");
    });
                
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