;(function($) {

	var main = {
		w: $(window),
		d: $(document),
		init: function(){
			
			this.global.init();
			this.header.init();
			this.loaded();
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
		}
			
	};

	window.main = main;

	$(function(){
		window.main.init();
	});

})(jQuery);

