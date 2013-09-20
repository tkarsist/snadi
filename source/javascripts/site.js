//=require vendor/jquery-1.9.1.min
//=require "vendor/modernizr-2.6.2-custom"
//=require "vendor/fancybox2/jquery.fancybox.pack"

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
                'background' : 'rgba(113, 210, 193, 0.2)'
            }
        }
    }, nextClick: "true"
});


});


