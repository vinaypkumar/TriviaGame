
$( document ).ready(function() {
var score=0;
var time = 60;
var countdown=0;

$( "#start" ).click(function() {
	$('.question').css('color', '#000000');
countdown = setInterval(function() { 

    $("#time").html(--time+" seconds");

    if (time <= 0){
        $("#main").html("<h1>Out of time!<br><br><p>Final score: </p><p><div id='tally'></div></p></h1>");
        $("#tally").append(score+"/10");

        if(score>10){
        	$("#tally").append("<p>Haha, you cheated. Very funny. Don't do it again.</p>");
        }
        else{
        	var percent=score*10;
        	$("#tally").append("<br><p>That's a "+percent+"%!</p>");
        	$("#tally").append("<p>(That last question didn't count, by the way.)</p>");
        }

    }

}, 1000);


});

$( "#stop" ).click(function() {

	clearInterval(countdown);    

    $("#main").html("<h1>Wow, you finished early?<br><br><p>Final score: </p><p><div id='tally'></div></p></h1>");
    $("#tally").append(score+"/10");
    if(score>10){
    	$("#tally").append("<p>Haha, you cheated. Very funny. Don't do it again.</p>");
    }
    else{
    	var percent=score*10;
    	$("#tally").append("<br><p>That's a "+percent+"%!</p>");
    	$("#tally").append("<p>(That last question didn't count, by the way.)</p>");
    }   

});

  $('input[type="radio"]').click(function() {
	  if($(this).attr('value') === 'correct') {
	       score++;    
	             
	  }
	  
   });



});

