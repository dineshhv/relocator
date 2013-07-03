/*****************************************************
*													 *
*	Author: Dinesh Vadivel							 *
*	Plugin: Jquery.relocator.1.0.0.js				 *
*	Date:	20-06-2013								 *
*													 *
*													 *
*													 *
*													 *
*													 *
*													 *
*****************************************************/

(function($){
   var Relocate = function(element, options)
   {
       var elem = $(element);
       var obj = this;

       // Merge options with defaults
       var settings = $.extend({
          highlight : true,
          speed		: 1000,
          direction	: "top",
          title		:true,
          pos		: "top"     
          
       }, options || {});
       
       
       repositon(elem, settings);
       addhighlight(elem, settings);
      
       
       
       // Public method
       this.addhighlight = function()
       {
           
       };
   };

   function repositon(element, options) 
   {
		var img=new Image();
		var img_real_width,img_real_height;
		ID=element.attr('id');
		$('#'+ID+" li" ).each(function( index ) {
			if($(this).children().find('img').length>0){
				//$(this).children().children().html('<img src="images/loading.gif" />');
				var Src=$(this).children().children().attr('src');
				$(this).children().children().attr("src", Src.src).load(function(){
					img_width = $(this).css('width');
				    img_height = $(this).css('height');
				    desc=$(this).children().data('desc');
				    var width = $(this).parent().parent().css('width');
			        var height = $(this).parent().parent().css('height');
			        var photoAspectRatio = img_real_width / img_real_height;
			        var canvasAspectRatio = width.replace("px", "") / height.replace("px", "");
			        if (photoAspectRatio < canvasAspectRatio) 
			        {
					    $(this).css('width', width);
					    $(this).css('height', 'auto');
					    var intHeight = height.replace("px", ""); //tirar o PX
						var crheight=((((width.replace("px", "")/img_real_width)*img_real_height)-height.replace("px", ""))/2)*-1;
						$(this).css('margin-top', crheight);
					}
					else 
					{
						$(this).css('width', 'auto');
						$(this).css('height', height);
						var crwidth=((((height.replace("px", "")/img_real_height)*img_real_width)-width.replace("px", ""))/2)*-1;
						$(this).css('margin-left', crwidth);
					}
				});
			}
			
		});
	    	
   };
   function addhighlight(element, options) 
   {
		if(options.title==true)
		{
			ID=element.attr('id');
			$('#'+ID+" li" ).each(function( index ) {
				var title=$(this).children().children().data('title');
				$(this).children().append('<div class="title_bg"><div class="title_txt">'+title+'</div></div>');
				if(options.highlight==false)
				{
					$(".title_bg").css('position','relative');
				}
			});
		}
		if(options.highlight==true)
		{
			ID=element.attr('id');
			$('#'+ID+" li" ).each(function() {
				img_width = $(this).css('width');
				img_height = $(this).css('height');
				desc=$(this).children().children().data('desc');		
				mt=parseInt(img_height.replace("px", "")); //+parseInt(options.size.replace("px", ""))
				var ht=$(".title_bg").css('height');
				var pd=$(".title_bg").css('padding');
				targ=parseInt(ht.replace("px", ""))+(parseInt(pd.replace("px", ""))*2);
				mv=mt-targ;
				//mv=mt-parseInt(options.size.replace("px", ""));
				if($(this).children().find('img').length>0){
				
				 $(this).children().append('<div id="highlighter" style="width:'+img_width+'; height:'+img_height+'; background-color:rgba(32,32,32,.5); position:relative; z-index:15; margin-top:0px;"> <div class="hig_content">'+desc+'</div></div>');
				}
			});
			$('#'+ID+" li ").hover(function() 
			{
				$(this).children().children('#highlighter').animate({"margin-top":"-="+ mv+"px"},options.speed); 
			},
			function() 
			{
				$(this).children().children('#highlighter').animate({"margin-top":"+="+mv+"px"},options.speed,function(){
				$(this).children().children('#highlighter').remove();
				});
			});
			
		}
		
	   	
   };
  
  
   $.fn.relocate = function(options)
   {
       return this.each(function()
       {
           var element = $(this);
          
           // Return early if this element already has a plugin instance
           if (element.data('relocator')) return;

           // pass options to plugin constructor
           var relocate = new Relocate(this, options);
          
           // Store plugin object in this element's data
           element.data('relocator', relocate);
       });
   };
})(jQuery);