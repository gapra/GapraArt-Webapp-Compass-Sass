//Preloader
rotate = 1;
function hide_preloader() { //DOM
	rotate = 0;
	$("#preloader").fadeOut(1000, function(){
		$('nav').css("marginTop","-100px");
		$('nav').show(function(){
			$('nav').delay(900).css("display","block").animate({top: '100'}, 800);
		});
	});
}

$(document).ready(function(){
	
	// calculate height 
	var screen_ht = $(window).height();
	var preloader_ht = 100;
	var padding =(screen_ht/2)-preloader_ht;
	
	$("#preloader").css("padding-top",padding+"px");
	
	// loading animation using script
	function anim(){ $("#preloader_image").animate({left:'0px'}, 8000,
		function(){ 
			$("#preloader_image").animate({left:'0px'}, 5000 ); 
			if(rotate==1){ 
				anim();
				
			}  
		});
		
	}

	anim();
	
	$('.home-menu li.about').hide();
		$('.home-menu li.about').delay(1000).fadeIn('slow');
	$('.home-menu li.portfolio').hide();
		$('.home-menu li.portfolio').delay(1600).fadeIn('slow');
	$('.home-menu li.whatican').hide();
		$('.home-menu li.whatican').delay(2200).fadeIn('slow');
	$('.home-menu li.blog').hide();
		$('.home-menu li.blog').delay(2800).fadeIn('slow');
	$('.home-menu li.contact').hide();
		$('.home-menu li.contact').delay(3400).fadeIn('slow');
	//logo
	$('.logo').hide();
		$('.logo').delay(4000).fadeIn(3000);
		
	//Landing page script bro
	$('.home').click(function(){
		$('html, body').animate({scrollTop: '0'}, 900);
		$('nav .content-nav li a').removeClass('active-about');
		$('nav .content-nav li a').removeClass('active-portfolio');
		$('nav .content-nav li a').removeClass('active-whatican');
		$('nav .content-nav li a').removeClass('active-blog');
		$('nav .content-nav li a').removeClass('active-contact');
	});
	$('.about').click(function(){
		$('html, body').animate({scrollTop: '600'}, 900);
		$('nav .content-nav li a.about').addClass('active-about', function(){
			$('nav .content-nav li a').removeClass('active-portfolio');
			$('nav .content-nav li a').removeClass('active-whatican');
			$('nav .content-nav li a').removeClass('active-blog');
			$('nav .content-nav li a').removeClass('active-contact');
		});
	});
	$('.portfolio').click(function(){
		$('html, body').animate({scrollTop: '1320'}, 900);
		$('nav .content-nav li a.portfolio').addClass('active-portfolio', function(){
			$('nav .content-nav li a').removeClass('active-about');
			$('nav .content-nav li a').removeClass('active-whatican');
			$('nav .content-nav li a').removeClass('active-blog');
			$('nav .content-nav li a').removeClass('active-contact');
		});
	});
	$('.whatican').click(function(){
		$('html, body').animate({scrollTop: '2020'}, 900);
		$('nav .content-nav li a.whatican').addClass('active-whatican', function(){
			$('nav .content-nav li a').removeClass('active-about');
			$('nav .content-nav li a').removeClass('active-portfolio');
			$('nav .content-nav li a').removeClass('active-blog');
			$('nav .content-nav li a').removeClass('active-contact');
		});
	});
	
	$('.blog').click(function(){
		$('html, body').animate({scrollTop: '2720'}, 900);
		$('nav .content-nav li a.blog').addClass('active-blog', function(){
			$('nav .content-nav li a').removeClass('active-about');
			$('nav .content-nav li a').removeClass('active-whatican');
			$('nav .content-nav li a').removeClass('active-portfolio');
			$('nav .content-nav li a').removeClass('active-contact');
		});
	});
	$('.contact').click(function(){
		$('html, body').animate({scrollTop: '3420'}, 900);
		$('nav .content-nav li a.contact').addClass('active-contact', function(){
			$('nav .content-nav li a').removeClass('active-about');
			$('nav .content-nav li a').removeClass('active-whatican');
			$('nav .content-nav li a').removeClass('active-blog');
			$('nav .content-nav li a').removeClass('active-portfolio');
		});
	});
	
	//function if scrolled
	$('.entry-about').hide();
	$('.entry-portfolio, .entry-whatican, .entry-blog, .entry-contact').hide();
	$('.portfolio-ico, .whatican-icon, .entry-whatican .desc, .blog-ico, .entry-blog .desc, .contact-ico, .entry-contact .desc').hide();
	$('#desc-port').hide();
	$('.item1, .item2, .item3, .item4, .item5, #btn-allport, #btnblog').hide();
	$('#loading_about').hide();
	$('.loading-block-about').hide();
	$('.loading-block-portfolio, .loading-block-whatican, .loading-block-blog, .loading-block-contact').hide();
	$('#loading_portfolio, #loading_whatican, #loading_blog, #loading_contact').hide();
	$('span.hand, span.gd, span.ad, span.as, span.htm, span.css, span.rwd, span.jquery, span.wp, span.php').css("width","0%");
	$('.entry-contact .for-cp').hide();
	$('li.fb, li.twitter, li.gplus, li.pin').hide();
	$(document).scroll(function () {
	    var about_y = $(this).scrollTop();
	    var portfolio_y = $(this).scrollTop();
	    var whatican_y = $(this).scrollTop();
	    var blog_y = $(this).scrollTop();
	    var contact_y = $(this).scrollTop();
	    // for active
	    if (about_y < 600 || about_y > 900){
	    	$('nav .content-nav li a.about').removeClass('active-about');
	    }
	    if (portfolio_y < 1300 || portfolio_y > 1900){
	    	$('nav .content-nav li a').removeClass('active-portfolio');
	    }
	    if (whatican_y < 1900 || whatican_y > 2500){
	    	$('nav .content-nav li a.whatican').removeClass('active-whatican');
	    }
	    if (blog_y < 2700 || blog_y > 3200){
	    	$('nav .content-nav li a.blog').removeClass('active-blog');
	    }
	    if (contact_y < 3400){
	    	$('nav .content-nav li a.contact').removeClass('active-contact');
	    }
	    
	    if (about_y > 500) {
	    	$('nav .content-nav li a.about').addClass('active-about');
	    	$('#loading_about').fadeIn(1200, function(){
	    		$('.loading-block-about').delay(800).fadeIn(function(){
	    			$('.entry-about').show().animate({top: 0}, 600);
	    		});
	    	});
	    }
	    
	    if (portfolio_y > 1200) {
	    	$('nav .content-nav li a.portfolio').addClass('active-portfolio');
	    	$('nav .content-nav li a.about').removeClass('active-about');
	    	$('nav .content-nav li a.whatican').removeClass('active-whatican');
	    	$('#loading_portfolio').fadeIn(1200, function(){
	    		$('.loading-block-portfolio').delay(800).fadeIn(function(){
	    			$('.entry-portfolio').show(function(){
	    				$('.portfolio-ico').show().animate({marginTop: 60}, 600, function(){
	    					//$('.portfolio-item').fadeIn(800);
	    					$('.portfolio-item li.item1').fadeIn(function(){
	    						$('.portfolio-item li.item2').fadeIn(function(){
	    							$('.portfolio-item li.item3').fadeIn(function(){
	    								$('.portfolio-item li.item4').fadeIn(function(){
	    									$('.portfolio-item li.item5').fadeIn(function(){
	    										$('#btn-allport').fadeIn(800);
	    									});
	    								});
	    							});
	    						});
	    					});
	    				});
	    			});
	    		});
	    	});
	    }
	    
	    if (whatican_y > 1900) {
	    	$('nav .content-nav li a.whatican').addClass('active-whatican');
	    	$('nav .content-nav li a.portfolio').removeClass('active-portfolio');
	    	$('nav .content-nav li a.about').removeClass('active-about');
	    	$('#loading_whatican').fadeIn(1200, function(){
	    		$('.loading-block-whatican').delay(1200).fadeIn(function(){
	    			$('.entry-whatican').fadeIn(1200, function(){
	    				$('.whatican-ico').fadeIn(function(){
	    					$('.entry-whatican .desc').fadeIn(function(){
	    						$('span.hand').delay(800).animate({width: "98%"}, 900);
	    						$('span.gd').delay(1100).animate({width: "98%"}, 900);
	    						$('span.ad').delay(1400).animate({width: "94%"}, 900);
	    						$('span.as').delay(1700).animate({width: "92%"}, 900);
	    						$('span.htm').delay(2000).animate({width: "96%"}, 900);
	    						$('span.css').delay(2300).animate({width: "96%"}, 900);
	    						$('span.rwd').delay(2600).animate({width: "90%"}, 900);
	    						$('span.jquery').delay(2900).animate({width: "80%"}, 900);
	    						$('span.wp').delay(3200).animate({width: "70%"}, 900);
	    						$('span.php').delay(3500).animate({width: "74%"}, 900);
	    					});
	    				});
	    			});
	    		});
	    	});
	    }
	    
	    if (blog_y > 2600){
	    	$('nav .content-nav li a.blog').addClass('active-blog');
	    	$('nav .content-nav li a.about').removeClass('active-about');
	    	$('nav .content-nav li a.portfolio').removeClass('active-portfolio');
	    	$('nav .content-nav li a.whatican').removeClass('active-whatican');
	    	$('#loading_blog').fadeIn(1200, function(){
	    		$('.loading-block-blog').delay(800).fadeIn(function(){
	    			$('.entry-blog').fadeIn(function(){
	    				$('.blog-ico').fadeIn(function(){
	    					$('.entry-blog .desc').fadeIn(function(){
	    						$('#btnblog').fadeIn();
	    					});
	    				});
	    			});
	    		});
	    	});
	    }
	    
	    if (contact_y > 3400){
	    	$('nav .content-nav li a.contact').addClass('active-contact');
	    	$('nav .content-nav li a.blog').removeClass('active-blog');
	    	$('nav .content-nav li a.about').removeClass('active-about');
	    	$('nav .content-nav li a.portfolio').removeClass('active-portfolio');
	    	$('nav .content-nav li a.whatican').removeClass('active-whatican');
	    	$('#loading_contact').fadeIn(1200, function(){
	    		$('.loading-block-contact').delay(800).fadeIn(function(){
	    			$('.entry-contact').fadeIn(function(){
	    				$('.contact-ico').fadeIn(function(){
	    					$('.entry-contact .desc').fadeIn(function(){
	    						$('.entry-contact .for-cp').fadeIn(800, function(){
	    							$('li.fb').fadeIn(function(){
	    								$('li.twitter').fadeIn(function(){
	    									$('li.gplus').fadeIn(function(){
	    										$('li.pin').fadeIn();
	    									});
	    								});
	    							});
	    						});
	    					});
	    				});
	    			});
	    		});
	    	});
	    }
	});
	
	//change background for section 1
	function bg1(){
		var color = ["#ff5945", "#d14c1f", "#ab2b45"];
		var colormid = ["#2a8371", "#224d77", "#5b264d"];
		var bgimg = ["url(images/df720135.flatsur.png)", "url(images/75f6463c.bg-3.jpg)", "url(images/3619e510.bg-4.jpg)"];
		var counter = 0;
		var countermid = 0;
		//$('#bghome').hide();
		function changeBgColor(){
			$('#home').animate({ backgroundColor: color[counter] }, 800);
			$('#bghome').animate({opacity: 0}, 800, function(){
				$(this).css("background-image", bgimg[counter]).css("background-position", "right -20px").animate({opacity: 1}, 800);
			});
			counter++;
			if(counter == color.length){
				counter = 0;
			}
		}
		function changeBgLogo(){
			$('.middle-home').animate({ backgroundColor: colormid[countermid] }, 600);
			countermid++;
			if(countermid == colormid.length){
				countermid = 0;
			}
		}
		setInterval(changeBgColor, 6000);
		setInterval(changeBgLogo, 4000);
	}
	
	function bgleft(){
		var position = ["-800", "0"];
		var colours = [ "#505050", "#107a65"];
	    var counter = 0;
	    function bgleftanim() {
	        $("#for-animate-bg .bgleft").animate({ marginTop: position[counter] }, 600 );
	        	$("#for-animate-bg .bgleft2").show(function(){
			        $("#for-animate-bg .bgleft2").delay(4000).animate({ backgroundColor: colours[counter] }, 600 );
			        	//$("#for-animate-bg .bgleft3").show();
	        	});
	        counter++;
	        if(counter == colours.length) {
	            counter = 0;
	        }
	    }
	    setInterval(bgleftanim, 8000);
	}
	function bgcenter(){
		var position = ["-800", "0"];
		var colours = [ "#757575", "#15ac8f"];
	    var counter = 0;
	    function bgcenteranim() {
	        //$("#for-animate-bg .bgcenter").delay(600).animate({ backgroundColor: colours[counter] }, 200 );
	        $("#for-animate-bg .bgcenter").delay(600).animate({ marginTop: position[counter] }, 600 );
	        $("#for-animate-bg .bgcenter2").show(function(){
	        	$("#for-animate-bg .bgcenter2").delay(4600).animate({ backgroundColor: colours[counter] }, 600 );
	        });
	        counter++;
	        if(counter == colours.length) {
	            counter = 0;
	        }
	    }
	    setInterval(bgcenteranim, 8000);
	}
	function bgright(){
		var position = ["-800", "0"];
		var colours = [ "#969696", "#5cc5b1"];
	    var counter = 0;
	    function bgrightanim() {
	        $("#for-animate-bg .bgright").delay(1200).animate({ marginTop: position[counter] }, 600 );
	        $("#for-animate-bg .bgright2").show(function(){
	        	$("#for-animate-bg .bgright2").delay(5200).animate({ backgroundColor: colours[counter] }, 600 );
	        });
	        counter++;
	        if(counter == colours.length) {
	            counter = 0;
	        }
	    }
	    setInterval(bgrightanim, 8000);
	}
	
	bg1();
	bgleft();
	bgcenter();
	bgright();
	
	//desc portfolio hover
	$('.portfolio-item a').hover(function(){
		$('span.desc-img',this).animate({marginTop: '-50'}, 600);
	}, function(){
		$('span.desc-img',this).stop(true).animate({marginTop: '0'}, 300);
	});
	//backtop hover
	$('.backtop').hover(function(){
		$('span.backtop-hover', this).animate({height: '53px'}, 300);
	}, function(){
		$('span.backtop-hover', this).stop(true).animate({height: '5px'}, 200);
	});
	//back to top
	var offset = 220;
	var dur = 800;
	$(window).scroll(function(){
		if($(this).scrollTop() > offset){
			$('.backtop').fadeIn(dur);
		}else{
			$('.backtop').fadeOut(dur);
		}
	});
	$('.backtop').click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, dur);
		return false;
	});
});
