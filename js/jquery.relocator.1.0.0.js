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
          direction	: "bottom",
          title		: true,
          pos		: "top",
          
          
       }, options || {});
       
       var matched, browser;
       jQuery.uaMatch = function( ua ) {
	   ua = ua.toLowerCase();
	   var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

		    return {
		        browser: match[ 1 ] || "",
		        version: match[ 2 ] || "0"
		    };
		};

		matched = jQuery.uaMatch( navigator.userAgent );
		browser = {};
		
		if ( matched.browser ) {
		    browser[ matched.browser ] = true;
		    browser.version = matched.version;
		}
		
		// Chrome is Webkit, but Webkit is also Safari.
		if ( browser.chrome ) {
		    browser.webkit = true;
		} else if ( browser.webkit ) {
		    browser.safari = true;
		}
		
		jQuery.browser = browser;
		
       repositon(elem, settings, matched.browser);
       addhighlight(elem, settings, matched.browser);
      
       
       
       // Public method
       this.addhighlight = function()
       {
           
       };
   };

   function repositon(element, options, browser) 
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
   function addhighlight(element, options, browser) 
   {
		if(options.title==true)
		{
			ID=element.attr('id');
			if(options.direction=="top")
			{
				$('#'+ID+" li" ).each(function( index ) {
					var title=$(this).children().children().data('title');
					$(this).children().append('<div class="title_bg" ><div class="title_txt">'+title+'</div></div>');
					if(options.highlight==false)
					{
						$(".title_bg").css('position','relative');
					}
				});
				$('.title_bg').css({'position': 'absolute', 'z-index': 5,'margin-top': '-150px'});
			}
			if(options.direction=="bottom")
			{
				$('#'+ID+" li" ).each(function( index ) {
					var title=$(this).children().children().data('title');
					$(this).children().append('<div class="title_bg" ><div class="title_txt">'+title+'</div></div>');
					if(options.highlight==false)
					{
						$(".title_bg").css('position','relative');
					}
				});
				$('.title_bg').css({'position': 'absolute', 'z-index': 5,'margin-top': '-28px'});
			}
		}
		if(options.highlight==true)
		{
			ID=element.attr('id');
			if(options.direction=="top")
			{
				$('#'+ID+" li" ).each(function() {
					img_width = $(this).css('width');
					img_height = $(this).css('height');
					desc=$(this).children().children().data('desc');		
					mt=parseInt(img_height.replace("px", "")); //+parseInt(options.size.replace("px", ""))
					var ht=$(".title_bg").css('height');
					if(browser=='mozilla')
					{
						var pd=$(".title_bg").css('padding-top');
						
						targ=parseInt(ht.replace("px", ""))+(parseInt(pd.replace("px", ""))*2);
					}
					else
					{
						var pd=$(".title_bg").css('padding');
						targ=parseInt(ht.replace("px", ""))+(parseInt(pd.replace("px", ""))*2);
					}
					
					mv=mt-targ;
					//mv=mt-parseInt(options.size.replace("px", ""));
					if($(this).children().find('img').length>0){
					
					 $(this).children().append('<div id="highlighter" style="width:'+img_width+'; height:'+img_height+'; position:relative; z-index:15; margin-top:0px;"> <div class="hig_content">'+desc+'</div></div>');
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
			if(options.direction=="bottom")
			{
				$('#'+ID+" li" ).each(function() {
					img_width = $(this).css('width');
					img_height = $(this).css('height');
					desc=$(this).children().children().data('desc');		
					mt=parseInt(img_height.replace("px", "")); //+parseInt(options.size.replace("px", ""))
					var ht=$(".title_bg").css('height');
					var pd=$(".title_bg").css('padding');
					targ=parseInt(ht.replace("px", ""))+(parseInt(pd.replace("px", ""))*2);
					Fht=mt-targ;
					mv=mt;
					console.log(Fht);
					//mv=mt-parseInt(options.size.replace("px", ""));
					if($(this).children().find('img').length>0){
					
					 $(this).children().append('<div id="highlighter" style="width:'+img_width+'; height:'+Fht+'px;  position:relative; z-index:15; margin-top:-300px;"> <div class="hig_content">'+desc+'</div></div>');
					}
				});
				$('#'+ID+" li ").hover(function() 
				{
					$(this).children().children('#highlighter').animate({"margin-top":"+="+ mv+"px"},options.speed); 
				},
				function() 
				{
					$(this).children().children('#highlighter').animate({"margin-top":"-="+mv+"px"},options.speed,function(){
					$(this).children().children('#highlighter').remove();
					});
				});
			
			}
			
			
			
			
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