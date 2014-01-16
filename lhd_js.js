// JavaScript Document

$(document).ready(function(){
 $( document ).bind("click", function( e ) {
    $( e.target ).closest("a.la"). toggleClass("tdred");
	 $( e.target ).closest("a.ha"). toggleClass("tdblue");
	  $( e.target ).closest("a.pa"). toggleClass("tdgreen");
});
 $("#clr").click(function(){
	 $(".tdred").removeClass("tdred");
	  $(".tdblue").removeClass("tdblue");
	   $(".tdgreen").removeClass("tdgreen");
	 });
});