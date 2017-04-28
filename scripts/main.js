$(function() {


	$(".btn-phone").click(function(event) {
		event.preventDefault();
		var country = $(this).attr("data-country");
		var phone = $(this).attr("data-phone");
		//$(".countries").hide();
		//$("#"+country+"-"+phone).show();
		$(".modal").modal("show");
		$(".modal").find(".modal-body").html($("#"+country+"-"+phone).clone().show());
	});

	// $(".modal").on("bs.modal.hide", function() {
	// 	$(this)
	// });
});