/*$( document ).ready(function() {
	$( "#burger-png" ).show();
	$( "#croix-png" ).hide();
	$( "#navMob" ).hide();
	$( "#transition" ).hide();
	$( "#burger-png" ).click(function() {
		$( "#navMob" ).slideToggle( "slow", function() {
			$( "#burger-png" ).hide();
			$( "#croix-png" ).show();
			$( "#transition" ).slideToggle( "slow", function() {});
		});
	});
	
	$( "#croix-png" ).click(function() {
		$( "#transition" ).slideToggle( "slow", function() {
			$( "#navMob" ).slideToggle( "slow", function() {});
			$( "#croix-png" ).hide();
			$( "#burger-png" ).show();
		});
	});
	
});*/


function naviconTransition(x) {
	x.classList.toggle("change");
}

