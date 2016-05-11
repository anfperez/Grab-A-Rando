function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log("This is working");

$('.pure_button').click(function(e) { 
	e.preventDefault()
		console.log("click noticed")
	
	$.ajax({
		
		
		url: "http://api.randomuser.me" + "/?nat=" + $("[name=nationality]").find("option:selected" ).val(),
		type: "GET",
		success: function(data) {
			
			console.log("This works too")
			debugger
			console.log(data)
			$('#intro').text("Presenting...")
			var firstName = data.results[0].name.first
			var lastName = data.results[0].name.last
			var userpic = data.results[0].picture.large
			var gender = data.results[0].gender
			var email = data.results[0].email
			var cell = data.results[0].cell
			$('.rando_facts p').addClass("animated fadeInDown")
			$('#name').text("Name: " + firstName + " " + lastName)
			$('#pic').html("<img src = \"" + userpic + "\" alt= \"pic\" />")
			$('#gender').text("Gender: " + gender)
			$('#email').text("E-mail: " + email)
			$('#cell').text("Cell: " + cell)

		}
	});
});


$(":reset").click(function(e) {
	e.preventDefault()
		$(".zipform")[0].reset()
		console.log("Form reset")
		$(".rando_facts p").empty().removeClass("animated fadeInDown")

	});


