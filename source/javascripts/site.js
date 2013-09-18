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
