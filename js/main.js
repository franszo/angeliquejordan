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
			this.lettering.init();



			$('.dragscroll img').pep({
			  axis: "y",
			  easeDuration: 500,
			  useCSSTranslation: false,
			  rest: function(ev, obj){ 
			  	outOfBounds(ev, obj)
			  }
			});

			// Check if the text went outside its parent
			function outOfBounds(ev,obj){       
			  
			  if ( -obj.$el.position().top > (obj.$el.outerHeight() - obj.$el.parent().outerHeight()) ){
			   obj.$el.css({ top: -obj.$el.outerHeight() + obj.$el.parent().outerHeight()  })
			  }
			                          
			   if ( obj.$el.position().top > 0 ){ 
			     setTimeout(function(){ 
			       obj.$el.css({ top: 0 });
			     }, 50); 
			   }
			}

			$('a[href$=".gif"], a[href$=".jpg"], a[href$=".png"], a[href$=".bmp"]').magnificPopup({type:'image'});

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
					body = $('body.home');
					header = main.header.element,
					btn = $('.menu-btn', header);

				if(scrollTop > 0 && !body.hasClass('header-fixed')) {
					body.addClass('header-fixed');
					$('.site-title').fadeOut();
				} else if(scrollTop < 0 && body.hasClass('header-fixed')) {
					body.removeClass('header-fixed');
				}
			}
		},

		lettering: {
			element: $('.menu-item a, .slideout .btn, .work-title'),
			init: function() {
				elements = main.lettering.element;
				elements.lettering();
				elements.addClass('lettering');
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
				btn.removeClass('active');
				$(this).toggleClass('active');
				if($('html').hasClass('slide-open')) {
					if($(this).closest( ".slideout" ).hasClass('active')) {
						$(this).closest( ".slideout" ).toggleClass('active');	
						$('html').toggleClass('slide-open');					
					} else {
						$( ".slideout" ).toggleClass('active');	
					}					
				} else {
					if($(this).closest( ".slideout" ).hasClass('active')) {
						$(this).closest( ".slideout" ).toggleClass('active');	
						$('html').toggleClass('.slide-open');					
					} else {
						$(this).closest( ".slideout" ).toggleClass('active');	
						$('html').toggleClass('slide-open');	
					}						
				}
			});			

			$('#tortilla').click(function() {
				element.click(function(event){
				    event.stopPropagation();
				});					
				element.removeClass('active');
				$('html').removeClass('slide-open');
			});
		},

		fullpage: {
			init: function() {
				if($(window).width() < 500) { 
				// do any 480 width stuff here, or simply do nothing
					return;
				} else {
					if($('body').hasClass('single-work')) {

						var fullPage = $('#single-work');

						fullPage.fullpage({
							menu: false,
							anchors:['firstPage', 'secondPage', 'thirdPage', 'fourtPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage'],						
							navigation: true,
							navigationPosition: 'right',
							easing: 'easeInOut',
							css3: true,
							loopBottom: false,
							loopTop: false,
							loopHorizontal: false,
							recordHistory: true
						});
					}
				}
			}
		}		
	};

	window.main = main;

	$(function(){
		window.main.init();
	});

})(jQuery);

