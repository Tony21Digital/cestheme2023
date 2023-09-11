/* Add class to body when page loads (for animation purposes) */
/* Main Search toggle */
require([
	'jquery',
	'slick'
], function ($) {
	$(window).on('load', function () {
		$('body').addClass('page-loaded');
	});

	/* Search Slide */
	$(".header-search a").on("click", function (e) {
		$(".header-search").toggleClass("search--show");
		e.preventDefault();
	});

	/* Overlay on menu hover */
	$(function () {
		$('.subdynamic').on('mouseover', function () {
			$('.menu-overlay').show();  //show overlay when menu hovered
		});
		$('.subdynamic').on('mouseout', function () {
			$('.menu-overlay').hide();   //hide overlay when cursor leaves menu
		});
	});

	/* Key Messages */
	$('.key-messages ul').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 7000,
		dots: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: false,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	/* Homepage Hero Slider */
	$('.homepage-hero ul').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 7000,
		dots: false,
		fade: false,
		rows: 0,
	});

	/* Homepage Product Listing */
	$('.custom-product--slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 7000,
		dots: false,
		rows: 0,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});

	/* Brands Carousel */
	$('.brands-list--carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		autoplaySpeed: 7000,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					arrows: true,
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	/* Committed to Excellence */
	$('.commited-excellence ul').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false,
		autoplaySpeed: 7000,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}
		]
	});

	/* Layered Navigation Expand */
	$(document).ready(function () {
		$(".filter-options-title").click(function () {
			$(this).toggleClass("active");
			$(this).next(".filter-options-content").toggleClass("layered-close");
			return false;
		});

		/* Mobile & iPad Filter Products toggle */
		$('.filter-toggle').click(function (e) {
			$('.sidebar').toggleClass('filters-active');
			$('body').toggleClass('filters-opened');
			e.preventDefault();
		});

		$('.close-filters').on('click', function () {
			$('.sidebar').removeClass('filters-active');
			$('body').removeClass('filters-opened');
		});
	});

	/* Product Page Accordion */
	$(".detail-item").find(".detail-title").click(function () {
		$(this).toggleClass("active-tab").find("span").toggleClass("icon-minus icon-plus");
		$(this).next().toggleClass("open").slideToggle("fast")
	});
});

/* Menu Patch */

window.addEventListener('DOMContentLoaded', () => {

	const _isMobile = window.matchMedia('(max-width:768px)').matches;

	if (_isMobile) {
		const _tgt = document.querySelector('.ves-mdrilldown');
		if (_tgt) {

			const _anchors = _tgt.querySelectorAll('.nav-anchor');
			[..._anchors].map((a) => {
				const _spans = a.children;
				const _title = _spans[0].textContent;

				if (_spans.length === 2) {

					const _sib = a.nextElementSibling;
					if (_sib) {
						const _o = _sib.querySelectorAll('.hidden-lg');
						if (_o) {
							const _back = `<div class="drilldown-back">
						<a href="#">
						<span class="drill-opener" style="display:block"></span>
						<span class="current-cat">${_title}</span>
						</a>
						</div>`;
							[..._o].map((b) => {
								b.insertAdjacentHTML('afterbegin', _back);
							});

						}
					}
				}
			});

			/* set the click action */

			const _db = document.querySelectorAll('.drilldown-back');
			if (_db) {

				_db.forEach(d => {

					d.onclick = (e) => {

						const _n = (e.target).closest('.nav-item');
						const _l = _n.querySelector('.nav-anchor > .opener.item-active')
						_l.click();
					}

				});

			}

		}
	}

	/* sliding filter */

	const _bodyClassName = "filteractive";
	const _triggers = document.querySelectorAll('.filter-toggle-desktop, .hide-filter-block');
	if (_triggers.length) {

		_triggers.forEach(t => {
			t.onclick = () => {
				document.querySelector('body').classList.toggle(_bodyClassName);
				const _b = document.querySelector(`.${_bodyClassName}`);
				if (_b) {
					_b.querySelector('.page-wrapper').onclick = (e) => {
						if (e.target.classList.contains('page-wrapper')) {
						document.querySelector('body').classList.toggle(_bodyClassName);
						}
					}
				}
			};
		});
	}
});