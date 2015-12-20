var tag = document.getElementById("youtube_api"),
firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var video1 = new youtubeObject('qMPpnCvCZvw');
}
var videoId = 'qMPpnCvCZvw';

var youtubeObject = function(videoId) {
    var self = this;
    
    self.videoId = videoId;
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    self.player = new YT.Player('player', {
      height: '300',
      width: '300',
      videoId: self.videoId,
      events: {
        'onReady': self.onPlayerReady,
        'onStateChange': self.onPlayerStateChange
      }
    });
    
    // 4. The API will call this function when the video player is ready.
    self.onPlayerReady = function(event) {
        event.target.playVideo();
    }
    
    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    self.done = false;
    self.onPlayerStateChange = function(event){
      if (event.data == YT.PlayerState.PLAYING && !self.done) {
        setTimeout(stopVideo, 6000);
        self.done = true;
      }
    }

    self.stopVideo = function() {
        self.player.stopVideo();
    }
}