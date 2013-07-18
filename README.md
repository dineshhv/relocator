### relocator.
Relocator is lightweight jQuery plugin to create photo gallery. this plugin will make the different size images to fit with the specified canvas without "size resizing"
 
##features
* Plugin will resize the image and fit within the given canvas without "size resizing" 
* Also provide extra feature like show the title and animate the image description on mouse hover.

### code
step 1
Include the below scripts on the Html file
```
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.relocator.1.0.0.js"></script>

```
step 2
Add the below javascript code inside the <head> section
```
<script>
	$(document).ready(function(){
		$('#relocator').relocate({
			title		: true,
			highlight	: true,
			direction	: "top",
			speed		: 250,
		});
	});
</script>

```
step 3
Just Add the Code and Save it as Css file
```
<style>
.relocator{ width:720px; margin-top: 10px; height: auto; display: inline-block;}
.relocator ul { list-style: none; margin: 0px; padding: 0px; height: auto; }
.relocator ul li{  width:200px; height: 150px;  overflow:hidden;  position: relative;  float: left;  
margin-left: 20px; margin-bottom: 15px;  padding:10px; background: #ffffff;}
.relocator ul li a{ width:200px; height: 150px; overflow: hidden; display: block; position: relative; }
.title_bg{ background: rgba(255,255,255,.7); padding: 5px;  width:190px; }
#highlighter{  background: rgba(255,255,255,.7); }
.title_txt{  color: #ff6c00; text-decoration: none; }
.hig_content{ text-decoration: none;  color: #ff6c00;  overflow: hidden; padding: 5px; }
a{ text-decoration: none;  color: #000;}
</style>

```
step 4
Finally add the Html elements
```
<div class="relocator" id="relocator">
 <ul>
   <li>
    <a href=""><img src="gallery/1.jpg" data-title="White Clouds" data-desc="White Clouds"></a>
   </li>
   <li>
    <a href=""><img src="gallery/2.jpg" data-title="Bug" data-desc="Bug"></a>
   </li>
   <li>
    <a href=""><img src="gallery/3.jpg" data-title="Flight Landing" data-desc="Flight Landing"></a>
   </li>
   <li>
    <a href=""><img src="gallery/4.jpg" data-title="Angry Child" data-desc="Angry Child"></a>
   </li>
   <li>
    <a href=""><img src="gallery/5.jpg" data-title="Sunset" data-desc="Sunset"></a>
   </li>
   <li>
    <a href=""><img src="gallery/6.jpg" data-title="Old Toy" data-desc="Old Toy"></a>
   </li>
   <li>
    <a href=""><img src="http://farm6.staticflickr.com/5088/5366575398_22cf324331_b.jpg" 
	data-title="Landing" data-desc="beautiful shot"></a>
   </li>
   <li>
    <a href=""><img src="http://farm1.staticflickr.com/141/337589344_23c5933ca6_o.jpg" 
	data-title="Scenic Kosovo" data-desc="Colorfull landscape photograph"></a>
   </li>
   <li>
    <a href=""><img src="http://farm4.staticflickr.com/3158/2547608404_c0c22440e8_o.jpg" 
	data-title="Scenic Route" data-desc="Scenic Route 207 Texas Plain Trail"></a>
   </li>
 </ul>
</div>

```


