/* Add class to body when page loads (for animation purposes) */
/* Main Search toggle */
require([
    'jquery',
	'slick'
], function($){
	$(window).on('load', function() {
		$('body').addClass('page-loaded');
	});

	/* Search Slide */
	$(".header-search a").on("click", function (e){
		$(".header-search").toggleClass("search--show");
		e.preventDefault();
	});

	/* Overlay on menu hover */
	$(function() {
	    $('.subdynamic').on('mouseover', function() {
	        $('.menu-overlay').show();  //show overlay when menu hovered
	    });
	    $('.subdynamic').on('mouseout', function() {
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
		arrows: false,
		autoplaySpeed: 7000,
		dots: false,
		fade: true,
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
				breakpoint:768,
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
	$(document).ready(function() {
		$(".filter-options-title").click(function() {
			$(this).toggleClass("active");
			$(this).next(".filter-options-content").toggleClass("layered-close");
			return false;
		});
		
		/* Mobile & iPad Filter Products toggle */
		$('.filter-toggle').click(function(e){
			$('.sidebar').toggleClass('filters-active');
			$('body').toggleClass('filters-opened');
			e.preventDefault();
		});

		$('.close-filters').on('click',function () {
			$('.sidebar').removeClass('filters-active');
			$('body').removeClass('filters-opened');
		});
	});

	/* Product Page Accordion */
	$(".detail-item").find(".detail-title").click(function() {
		$(this).toggleClass("active-tab").find("span").toggleClass("icon-minus icon-plus");
		$(this).next().toggleClass("open").slideToggle("fast")
	});
});