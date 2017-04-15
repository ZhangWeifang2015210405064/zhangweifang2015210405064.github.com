
 $('#img.min').click(function() {
 	$(".ui-main").css({
 		'width' : "100%",
 		'height' : "100%"
 	});	
 });

 $('#img.min').click(function() {
 	var txt = $(this).attr('src');
 	$("#img-0").attr({
 		'src' : txt,
 		'width' : "800px",
 		'height' : "600px"
 	});	
 });

 $(".ui-main").click(function() {
 	$("#img-0").attr({
 		'src' : '',
 		'width' : "",
 		'height' : ""
 	});
 });

 $('.ui-main').click(function() {
 	$(".ui-main").css({
 		'width' : "0",
 		'height' : "0"
 	});
 });

$(".ui-main-second-part div").hide();
$(".ui-main-second-item").each(function(index){
    $(this).click(function(){
	     $(".ui-main-second-item").removeClass("current");
	     $(this).addClass("current");
	     $(".ui-main-second-part > div:visible").hide();
	     $(".ui-main-second-part div:eq(" +index+ ")").show();
    });
});



$(".button").click(function(){
	var a;
	if(isNaN(parseInt($(".empty").prev().children(".addbox-1").text())))
		a=1;
	else
		a=parseInt($(".empty").prev().children(".addbox-1").text())+1;
	$(".empty").before("<div class='addbox'><div class='addbox-1'></div><div class='addbox-2'></div><div class='addbox-3'>Delete</div></div>");
	$(".empty").prev().children(".addbox-1").text(a);
	$(".addbox-3").click(function(){
		var a=parseInt($(this).parent().children('.addbox-1').text())-1;
		$(this).parent().nextAll().children('.addbox-1').text(function(){
			a++;
			return a;
		});
		$(this).parent().remove();
	});
});




