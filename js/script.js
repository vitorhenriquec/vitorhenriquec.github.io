
$(document).ready(function(){
	$("#link-home").click(function(){
		$(".contact").hide(200);
		$(".resume").hide(200);
		$(".home").show(200);
	});
	$("#link-contact").click(function(){
		$(".home").hide(200);
		$(".resume").hide(200);
		$(".contact").show(200);
	});
	$("#link-resume").click(function(){
		$(".contact").hide(200);
		$(".home").hide(200);
		$(".resume").show(200);
	});
});