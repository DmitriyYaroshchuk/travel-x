function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#modalNavOpen');
	const navBtnClose = document.querySelector('#modalNavClose');
	const navOverlay = document.querySelector('#modalNavOverlay');
	const nav = document.querySelector('#mobileNav');

	navBtnOpen.addEventListener('click', toggleMobileNav);
	navBtnClose.addEventListener('click', toggleMobileNav);
	navOverlay.addEventListener('click', toggleMobileNav);

	function toggleMobileNav() {
		navOverlay.classList.toggle('mobile-nav-overlay--open');
		nav.classList.toggle('mobile-nav--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;