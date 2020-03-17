$(document).ready(function() {
  $("body").css('background-color', 'red');


  $("#burger-form").on("submit",function (event) {
  	event.preventDefault(); 

  	let burger = {
  		burger_name : $('#title').val().trim(),
  		devoured: false
  	}

  	let b =  burger.burger_name; 

  	if(b !== undefined && b !== "" && b.length !== 0 && b !== null){
  		$.ajax("/api/burger",{
  			type: "POST",
  			data: burger
  		}).then(function(event){
  			location.reload();
  		})
  	 
  	}else{
  		alert("Invalid Name")
  	}
  })

  $(".devour").on("click",function(event){
    let burger_id = this.id;
   
    $.ajax("/api/burger", {
      type: "PUT",
      data: {id: burger_id}
    }).then(function(event){
      location.reload();
    })
  })

  $(".delete").on("click",function(event){
    let burger_id = this.id;
    $.ajax("/api/burger", {
      type: "DELETE",
      data: {id: burger_id}
    }).then(function(event){
      location.reload();
    })
  })

});
