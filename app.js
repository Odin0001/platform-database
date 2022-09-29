const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})



//tenders search function

function search() {
	let input = document.getElementById('search').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('card');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="inline";
		}
	}
}


//employees search function
function search2() {
	let input = document.getElementById('search').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('row');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";
		}
	}
}