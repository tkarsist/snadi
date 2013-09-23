//=require vendor/jquery-1.9.1.min
//=require "vendor/modernizr-2.6.2-custom"
//=require "vendor/fancybox2/jquery.fancybox.pack"
// //=require "vendor/fancybox2/jquery.fancybox-thumbs"

$(document).ready(function() {
	
	// Load youtube video feed
	//$("#vekaVideosContainer").load("youtube_videos.php");
	$("#vekaVideosContainer").load("test.html");
	
	// Hide/Show all videos
	$("a.hideShowAllVideosLink").click(function() {
		$("#vekaYoutubeChannelContainer").toggleClass('all');
		return true;
	});
	
});



$(document).ready(function() {
		//$(".fancybox").fancybox(	);
$(".fancybox").fancybox({
    helpers : {
        overlay : {
            css : {
                'background' : 'rgba(255, 255, 255, 0.6)'
            }
        },
        title: {
        	type: 'inside'
    	},
        thumbs	: {
				width	: 50,
				height	: 50
		}
    }, 
    nextClick: "true",

});


});


