// Toggle the navigation on small screens when the hamburger (#main_menu) is clicked.
document.addEventListener('DOMContentLoaded', function () {
	const menu = document.getElementById('main_menu');
	const navLinks = document.querySelector('.nav_links'); // querySelector to get the nav_links element

	if (!menu || !navLinks) return;  // Safety check

	menu.addEventListener('click', function () {
		navLinks.classList.toggle('open');    
    });

	// Optional: close menu when a nav link is clicked (common mobile behaviour)
	navLinks.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') {    // Only close if a link (<a>) is clicked
			navLinks.classList.remove('open');
		}
	});
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }   
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

