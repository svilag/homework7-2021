var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /=0.95;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log(video.currentTime);
	video.loop = true;
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing Volume");
	console.log(this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML=video.volume * 100 + "%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		console.log("Muting Video");
		video.muted = true;
		document.querySelector("#mute").innerHTML="Unmute"
	} else if (video.muted == true) {
		console.log("Muting Video");
		video.muted = false;
		document.querySelector("#mute").innerHTML="Mute"
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove("oldSchool")
});