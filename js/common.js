//youtube API 불러오는 부분
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '800',
    width: '1320',
    videoId: 'mmZj7U9iy_Y',
    playerVars: {
      'setVolume': 0,
      'rel': 0,
      'autohide': 1,
      'enablejsapi': 1,
      'disablekb': 1,
      'showinfo': 0,
      'loop': 1,
      'control': 0
    },
    events: {
      'onReady': onPlayerReady, //로딩중에 이벤트 실행한다
      'onStateChange': onPlayerStateChange //플레이어 상태 변화 시 이벤트를 실행한다.
    }
  });
}

function onPlayerReady(event) {
  //로딩된 후에 실행될 동작을 작성한다(소리 크기,동영상 속도를 미리 지정하는 것등등...)
  event.target.playVideo(); //자동재생
}

var done = false;

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
    //플레이어가 재생중일 때 작성한 동작이 실행된다.
    // (원하는 시간만큼만 재생되고 멈추게 하는 것도 가능하다.)
  }
}
