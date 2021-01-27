/*

JAVASCRIPT DOCUMENT 
-------------------

Author: Sahibjot Saggu
Date: August 30, 2014
Filename: script.js

*/

$(document).ready(function(){
	$("#introduction").css("top", (($(window).height() - $("#introduction").height()) / 2) + "px");
	$("#edu_table").css("top", (($(window).height() - $("#edu_table").height()) / 2) + "px");


	$("#menu").click(function(){
		if ($("#main_wrapper").css("left") == "0px") {
			$("#main_wrapper").animate({'left' : '-250px'});
			$("#main_content").animate({'left' : '-250px'});
			$("#main_content2").animate({'left' : '-250px'});
			$("#navbar").animate({'left' : '-250px'});
			$("#sidebar").animate({'right' : '0px'});
		}
		else {
			$("#main_wrapper").animate({'left' : '0px'});
			$("#main_content").animate({'left' : '0px'});
			$("#main_content2").animate({'left' : '0px'});
			$("#navbar").animate({'left' : '0px'});
			$("#sidebar").animate({'right' : '-250px'});
		}
	});

	$("#close_sidebar").click(function(){
		$("#main_wrapper").animate({'left' : '0px'});
		$("#main_content").animate({'left' : '0px'});
		$("#main_content2").animate({'left' : '0px'});
		$("#navbar").animate({'left' : '0px'});
		$("#sidebar").animate({'right' : '-250px'});
	});

	$("#name").click(function() {
		window.location = "http://www.sahibjotsaggu.com/";
	});

	$("#down_arrow").click(function() {
		
		$("html, body").animate({
			scrollTop : $("#main_content").offset().top
		});
		
		return false;
	});

	$("#down_arrow2").click(function() {
		
		$("html, body").animate({
			scrollTop : $("#main_content2").offset().top
		});
		
		return false;
	});

	$(document).scroll(function() {
		/*$("#name").html($(document).scrollTop());
		$("#menu").html($(window).height());*/
		if ($(document).scrollTop() >= $(window).height() - 150) {
			$("#navbar").css("top", "0px");
			$("#navbar").css("background", "#222");
			$("#intro").css("color", "#FFF");
			$("#home").css("color", "#888");
			$("#edu").css("color", "#888");
			$("#exp").css("color", "#888");
			//$("#main_content").css("background-position", "0px 0px");
			//$("#main_content2").css("background-position", "300px 0px");	
		}

		if ($(document).scrollTop() >= $(window).height()*2 - 150) {
			$("#intro").css("color", "#888");
			$("#home").css("color", "#888");			
			$("#edu").css("color", "#FFF");
			$("#exp").css("color", "#888");
			//$("#main_content2").css("background-position", "0px 0px");	
		}

		if ($(document).scrollTop() < $(window).height() - 150) {
			$("#navbar").css("top", "50px");
			$("#navbar").css("background", "transparent");
			$("#home").css("color", "#FFF");
			$("#intro").css("color", "#888");
			$("#edu").css("color", "#888");
			$("#exp").css("color", "#888");
			//$("#main_content").css("background-position", "0px 150px");	
			//$("#main_content2").css("background-position", "300px 0px");	
		}

		if ($(document).scrollTop() >= $(window).height()*3 - 150) {
			$("#intro").css("color", "#888");
			$("#home").css("color", "#888");			
			$("#edu").css("color", "#888");
			$("#exp").css("color", "#FFF");
			//$("#main_content3").css("background-position", "0px -210px");
		}
	})

	$("#home").click(function() {
		$("html, body").animate({
			scrollTop : 0
		});
		return false;
	});

	$("#intro").click(function() {
		$("html, body").animate({
			scrollTop : $("#main_content").offset().top
		});
		return false;
	});

	$("#edu").click(function() {
		$("html, body").animate({
			scrollTop : $("#main_content2").offset().top
		});
		return false;
	});

	$("#exp").click(function() {
		$("html, body").animate({
			scrollTop : $("#main_content3").offset().top
		});
		return false;
	});			


	// do this on window resize

	$(window).resize(function() {
		$("#introduction").css("top", (($(window).height() - $("#introduction").height()) / 2) + "px");
		$("#edu_table").css("top", (($(window).height() - $("#edu_table").height()) / 2) + "px");

	});
});