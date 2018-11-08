/**
 * 
 */
$.ajax({
	dataType:"json",
	xhrFields:{
		withCredentials:true
	}
})

function gone(x){
	window.open(x,"content");
}