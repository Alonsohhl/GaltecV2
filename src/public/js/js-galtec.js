"use strict";


var str_in = "url(img/slider_1.jpg)";
var str_out = "url(img/bg.jpg)";



function slider(str_in,str_out,index){

setTimeout(function() {
//			$( "#hero-slideshow" ).css("background-image",str_in);					
			$( "#next-slideshow-image-scale" ).css("background-image",str_out);
			$( "#next-slideshow-image").removeClass("is-visible");
			setTimeout(function(){
				$("#next-slideshow-image" ).last().addClass("is-visible");
				
				setTimeout(function(){
					$( "#hero-slideshow" ).css("background-image",str_out);	
					switch (index) {
						case 0:
								slider("url(img/slider_1.jpg)","url(img/bg.jpg)",1);
								break;
						case 1:
								slider("url(img/bg.jpg)","url(img/slider_2.jpeg)",2);
								break;
						case 2:
								slider("url(img/slider_2.jpeg)","url(img/bg.jpg)",3);
								break;
						case 3:
								slider("url(img/bg.jpg)","url(img/slider_3.jpeg)",4);
								break;
						case 4:
								slider("url(img/slider_3.jpeg)","url(img/bg.jpg)",5);
								break;
						case 5:
								slider("url(img/bg.jpg)","url(img/slider_4.jpeg)",6);
								break;
						case 6:
								slider("url(img/slider_4.jpeg)","url(img/bg.jpg)",7);
								break;
						case 7:
								slider("url(img/bg.jpg)","url(img/slider_1.jpg)",0);
								break;
						
				}
					
					},2000);
			}, 1000);
		}, 500);
};

slider("url(img/bg.jpg)","url(img/slider_1.jpg)",0);



//Tools
var toolsButtons = $('#toolsButtons').find('li'),
    toolsContents = $('#toolsContents').find('li'),
    PreloadImages = {},
    SliderBigImageObj = $("#slider_big_image"),
	slideImageWrapper = $('#slideImage');
	
toolsButtons.each(function (i) {
	PreloadImages[this.id] = new Image();
	PreloadImages[this.id].src = $(this).data("image");
});

toolsButtons.click(function(e){
    e.preventDefault();//reviene que se ejecute la accion por ejemplo https://api.jquery.com/event.preventdefault/
    var index = $(this).index();
    showTools(index);
});

function showTools(index){
    var imgSrc = SliderBigImageObj.attr('src');
    var imgSrcset = SliderBigImageObj.attr('srcset');
    // var index = $(item).index();
    if (typeof(PreloadImages[toolsButtons.eq(index).attr('id')].src) != 'undefined' && PreloadImages[toolsButtons.eq(index).attr('id')].src != null)
    {
        var _src = PreloadImages[toolsButtons.eq(index).attr('id')].src;
        var src2x = _src.replace('.jpg', '_2x.jpg');
        var srcset = _src + " 1x, " + src2x + " 2x";

        var img = '<img src="'+imgSrc+'" srcset="'+imgSrcset+'" width="787" height="584" alt="Ahrefs" style="z-index: 9;" id="slider_image_fade">';
        slideImageWrapper.prepend(img);
        $('#slider_image_fade').stop().fadeOut(800, function () {
            $('#slider_image_fade').remove();
        });
        SliderBigImageObj.attr("src", _src);
        SliderBigImageObj.attr("srcset", srcset);
    }
    toolsButtons.removeClass('active');
    toolsButtons.eq(index).addClass('active');
    toolsContents.removeClass('active');
    toolsContents.eq(index).addClass('active');
    return false;
}