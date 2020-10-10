//ch4 assignment

/*
1. Alter the stylesheet to hide the contents of the page initially. When the page 
is loaded, fade in the contents slowly. 

2. Give each paragraph a yellow background only when the mouse is over it. 

3. Make a click of the title (<h2>) and simultaneously fade it to 25 percent 
opacity and grow its left-hand margin to 20 px. Then, when this animation is 
complete, fade the speech text to 50 percent opacity. 

4. Challenge: React to presses of the arrow keys by smoothly moving the 
switcher box 20 pixels in the corresponding direction. The key codes for the 
arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).
*/

$(window).on("load", function () {
    
    //#1  
    $("body").hide(0).fadeIn(2000);
    
    
    //#2
    $("p").mouseover(function(){
        $(this).css("background-color", "yellow");
    }); 
//change back to default background as cursor leaves p fields
    $("p").mouseout(function(){
        $(this).css("background-color", "white");
    });
    
    
    //#3
	$('h2').click(function(){
	    $(this).animate({
	        opacity: "0.25", marginLeft: "20px"}, '2000'), 
	        // h2 animations ended, using .promise() to continue onto our p fields
	        $(this).promise().done(function(){
                $('p').fadeTo('slow', 0.50);
	        });
	   // Is it alright if we use "out of the book" methods? .queue(function(next) would have been simpler but the promise method seemed interesting and I wanted to try it out.
	});
	
	
	//#4
    $(document).keydown(function(e){
    switch(e.which) {
        //give each key event a value to change
        
        //left
        case 37: $("#switcher").animate({left: "-=20px"}, 'slow'); break;
        
        //top
        case 38: $("#switcher").animate({top: "-=20px"}, 'slow'); break;
        
        //right
        case 39: $("#switcher").animate({left: "+=20px"}, 'slow'); break;
        
        //bottom  
        case 40: $("#switcher").animate({top: "+=20px"}, 'slow'); break;
    }
    //stop our key event default function so we won't scroll our page while moving our switcher box
    e.preventDefault(); 
    });
});




