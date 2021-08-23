function clock(){
	var hour,min,sec,time;
	var session = "AM";
	var date = new Date();
	hour = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();

	if (hour==12) {
		hour = 00;
	}
	else if (hour>12) {
		hour = hour - 12;
		session = "PM";
	}
	else{
		alert("Something wrong");
	}

	if (hour<10) {
		hour = "0" + hour;
	}
	if (min<10) {
		min = "0" + min;
	}
	if (sec<10) {
		sec = "0" + sec;
	}


	time = hour + " : " + min + " : " + sec;

	var timeDisplay = document.getElementById("timeDisplay");
	var sessionDisplay = document.getElementById("sessionDisplay");
	timeDisplay.innerHTML = time;
	sessionDisplay.innerHTML = session;

	setTimeout(clock,1000);
}
clock();