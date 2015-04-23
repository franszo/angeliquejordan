;(function($) {

	var main = {
		w: $(window),
		d: $(document),
		init: function(){
			
			this.global.init();
			this.header.init();
			this.infiniteScroll();
			this.loaded();
			this.slideout();
			this.fullpage.init();
		},


		loaded: function(){  
			
		},

		global: {
			init: function(){

				setTimeout(function() {
					$('body').addClass('loaded');
				}, 1500);
							
			}
		},

		body:{
			element: $('body')
		},

		header: {
			element: $('#header'),
			init: function(){
				var header = main.header.element,
					menuBtn = $('.menu-btn', header);

				menuBtn.on('click', function(e){
					e.preventDefault();
					$(this).toggleClass('active');
					header.toggleClass('navigation-open');
				});
				
				main.w.on('scroll', this.scroll).trigger('scroll');
			},
			scroll: function(){
				var scrollTop = main.w.scrollTop(),
					body = main.body.element,
					header = main.header.element,
					btn = $('.menu-btn', header);

				if(scrollTop > 10 && !body.hasClass('header-fixed')) {
					body.addClass('header-fixed');
				} else if(scrollTop < 10 && body.hasClass('header-fixed')) {
					body.removeClass('header-fixed');
				}

				if(main.header.element.hasClass('navigation-open')) {
					header.removeClass('navigation-open');
					btn.removeClass('active white');
				}

				$( ".primary-navigation" ).mouseleave(function() {
					header.removeClass('navigation-open');
					btn.removeClass('active white');
				});
			}
		},

		infiniteScroll: function() {
			  var container = $('ul.grid');

			container.infinitescroll({
				navSelector: "#navbelow",
				nextSelector: "#navbelow a",
				itemSelector: ".grid li",
				extraScrollPx: 150,
			loading: {
				finishedMsg: 'No more items to load.',
					img: 'http://i.imgur.com/qkKy8.gif'
				}
			}, function (newElements) {
				var newElems = $( newElements ).hide();
					newElems.imagesLoaded(function(){
					newElems.fadeIn(); // fade in when ready
				});			  	
			});

			$(document).ajaxError(function(e,xhr,opt) {
				if(xhr.status==404)
				  $('a#next').remove();
			});			  	
		},

		slideout: function() {

			var element = $('.slideout'),
				btn = $('.btn', element);

			btn.on('click', function(e){
				e.preventDefault();
				$(this).closest( ".slideout" ).toggleClass('active');
				$('html').toggleClass('slide-open');					
			});			

			$('#tortilla').click(function() {
				element.click(function(event){
				    event.stopPropagation();
				});					
				element.removeClass('active');
			});
		},

		fullpage: {
			init: function() {
				if($('body').hasClass('single-work')) {

					var fullPage = $('#single-work');

					fullPage.fullpage({
						navigation: true,
						navigationPosition: 'right',
						responsive: 900,
						css3: true,
						loopBottom: false,
						loopTop: false,
						loopHorizontal: false,
						recordHistory: true
					});

				}
			}
		}		
	};

	window.main = main;

	$(function(){
		window.main.init();
	});

})(jQuery);

