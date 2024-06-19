const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//Start Contact Form//
$(document).ready(function(){
	$("#contactForm").validate({
		rules:{
			fname:{
				required:true,
				minlength:4,			
	         },
			 email:{
				required:true,
				email:true
			 },
			 number:{
				required:true,
				number:true,
				minlength:10
			 }

		}
		
	})
})

// send mail
$("#contactForm").submit((e)=>{
	e.preventDefault()
	$.ajax({
		url:"https://script.google.com/macros/s/AKfycbyBl2jtKHB2eQv1SpBArVOlkB8CB4jGY9BhwhNo31p6Gk3h4NY-6GImgwkcDwJj7zLCNw/exec",
		data:$("#contactForm").serialize(),
		method:"post",
		success:function (response){
			alert("Form submitted successfully")
		location.reload()
			window.location.href=""
		},
		error:function (err){
			alert("Something Error")

		}
	})
})