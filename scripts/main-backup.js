$(function() {
	var width = parseInt($(".countries").width())-80;
	$(".pop-over").width(width +"px");

	$(".btn-phone").click(function(event) {
		event.preventDefault();
		var $popover = $(this).siblings(".pop-over");
		var $downloadGroup = $(this).closest(".download-group");
		var index = $downloadGroup.index();
		$downloadGroup.closest(".countries").find(".block").each(function() {
			$(this).children(".download-group").eq(index-1).height($popover.height()+80+"px");
		});
		$popover.slideDown();
	});
});