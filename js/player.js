document.addEventListener("DOMContentLoaded", function() { 
	initPlayer(); 
}, false);
 
var player;
var playPauseBtn;

function initPlayer() {

	player          = document.getElementById('media');	
	actionBtn       = document.getElementById('action-button');
	player.controls = false;
	 
	player.addEventListener('play', function() { 
		changeButton(actionBtn, 'pause');
	}, false);

	player.addEventListener('pause', function() { 
		changeButton(actionBtn, 'play');
	}, false);
		
}

function togglePlayPause() {

	if (player.paused) {
		changeButton(actionBtn, 'pause');
		player.play();
	}else {
		changeButton(actionBtn, 'play');
		player.pause();
	}
}

function changeButton(btn, value) {
	btn.title     = value;
	// btn.innerHTML = value;
	btn.className = value;
}