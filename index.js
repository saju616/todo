$(document).ready(function(){
	var $input = $('input'),
		$btn = $('#addBtn'),
		$ul = $('#myList'),
		$rmvBtn = $('.rmvBtn');

	$('#addBtn').on('click', function(e) {
	  e.preventDefault();
	  if ($('#add-todo').val() == '') {
	    alert('Add new task please..');
	  } else {
	    $('#myList').prepend('<div class="col-md-8 offset-md-2 mt-3 todo-item"><i class="fa fa-bars drag-icon" aria-hidden="true"></i><div class="card"><div class="card-body"><div class="card-text"><input type="checkbox" class="check"><span class="ml-3 todo-text">' + $input.val() + '</span><button class="btn btn-danger remove-btn rmvBtn">x</button></div></div></div></div>');
	    $('#add-todo').val('');
	  }
	});

	function removeItem() {
	  $(this).closest('.todo-item').remove();
	}

	function markThis() {
	  if (this.checked) {
	    $(this).closest('.todo-item').addClass('done');
	  } else {
	    $(this).closest('.todo-item').removeClass('done');
	  }
	}

	$(document).on('click', '.check', markThis);

	$(document).on('click', '.rmvBtn', removeItem);
	

    function signOut() {
    	var auth2 = gapi.auth2.getAuthInstance();
    	auth2.signOut().then(function () {
      		$(".g-signin2").css("display","block");
      		$('#before-signin').css("display","block");
			$(".data").css("display","none");
			$("#signout").css("display","none");
    	});
  	} 

	$('#signout').click(function(){
   		signOut();
	});
});
	
