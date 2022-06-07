function MediaPlayer(config) {
    this.media = config.el;
  }
  
  MediaPlayer.prototype.play = function () {
    this.media.play();
  };
  
  MediaPlayer.prototype.pause = function () {
    this.media.pause();
  };
  
  MediaPlayer.prototype.getStatus = function () {
    return this.media.paused;
  };

export default MediaPlayer;