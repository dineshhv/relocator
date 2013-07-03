(function($){
   var Highlight = function(element, options)
   {
       var elem = $(element);
       var obj = this;

       // Merge options with defaults
       var settings = $.extend({
           param: 'defaultValue'
       }, options || {});
       
       ind=elem.attr('id');
       $('#'+ind+" #hoverbox" ).each(function() {
       		img_width = $(this).css('width');
		    img_height = $(this).css('height');
		    desc=$(this).children().data('desc');
		    mt=parseInt(img_height.replace("px", ""))+20;
		   mv=mt-30;
		    if($(this).hasClass('videobox')==false)
		    {
		    $(this).append('<div id="highlighter" style="width:'+img_width+'; height:'+img_height+'; background-color:rgba(32,32,32,.5); position:absolute; z-index:15; margin-top:'+mt+'px;"> <div class="hig_content">'+desc+'</div></div>');
		    }
		});
      
       $('#'+ind+" li #hoverbox").hover(function() {
             $(this).children('#highlighter').animate({"margin-top":"-="+ mv+"px"},"slow"); 
				
		},function() {
		 	$(this).children('#highlighter').animate({"margin-top":"+="+mv+"px"},"slow",function(){
			 	$(this).children('#highlighter').find("div:last").remove();
			 	
		 	});
			
		
		});
       
       
       // Public method
       this.publicMethod = function()
       {
           //console.log('publicMethod() called!');
       };
   };

   $.fn.highlight = function(options)
   {
       return this.each(function()
       {
           var element = $(this);
          
           // Return early if this element already has a plugin instance
           if (element.data('slider')) return;

           // pass options to plugin constructor
           var highlight = new Highlight(this, options);
          
           // Store plugin object in this element's data
           element.data('slider', highlight);
       });
   };
})(jQuery);