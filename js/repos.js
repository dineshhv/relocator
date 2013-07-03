(function($){
	$.fn.repos = function() {
	var img=new Image();
	var img_real_width,img_real_height;
		$( ".imgbox" ).each(function( index ) {
			var imgid=$(this).children().attr('id');
				
				var img=$('#'+imgid).attr('src');
				$("#"+imgid).attr("src", img.src).load(function(){
					//get the image real with and height;
		           img_real_width = this.width;
		           img_real_height = this.height;
		           img.scr=this.src;
		           // get the stage width and height
		           var width = $(this).parent().css('width');
		           var height = $(this).parent().css('height');
		         
		           var photoAspectRatio = img_real_width / img_real_height;
		          
		           var canvasAspectRatio = width.replace("px", "") / height.replace("px", "");
		           
		         //  console.log(photoAspectRatio+'<'+canvasAspectRatio);
		           if (photoAspectRatio < canvasAspectRatio) {
					    $(this).css('width', width);
					   // console.log(img_real_height*photoAspectRatio);
					    $(this).css('height', 'auto');
					   
					    var intHeight = height.replace("px", ""); //tirar o PX
					    var crheight=((((width.replace("px", "")/img_real_width)*img_real_height)-height.replace("px", ""))/2)*-1;
					    $(this).css('margin-top', crheight);
					    //$(this).css('marginTop', (-Math.floor(intHeight / 2)));
					}
					else {
					//console.log(height.replace("px", ""));
					    $(this).css('width', 'auto');
					    $(this).css('height', height);
					    var crwidth=((((height.replace("px", "")/img_real_height)*img_real_width)-width.replace("px", ""))/2)*-1;
					    $(this).css('margin-left', crwidth);
					}
					
					addTitle=$("#"+imgid).attr('title');
					$(this).parent().append('<div class="title_bg"><div class="title">'+addTitle+'</div></div>');
					
				
	           
	        });
			
			  
			
		});
	
	    return ;
    }; 
})(jQuery);