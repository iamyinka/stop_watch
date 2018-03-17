$(function () {
//	Variables
//		App Mode
	var app_mode = false;
//		Time counter
	var time_counter = 0;
//		lap counter
	var lap_counter = 0;
//		variable for setInterval
	var action;
//		number of laps
	var lap_number = 0;
//		mins, secs, millisecs, for time and lap
	var timer_min, timer_sec, timer_msec, lap_min, lap_sec, lap_msec;
//	On App load, show start and lap buttons
	hideShowButtons('#control1', '#control2');
//	Click on start button
	$('#control1').click(function() {
//		mode = on
			mode = true;
//		show stop and lap buttons
			hideShowButtons('#control3', '#control2');
//		start counter
			startAction();
	});
//		
//	Click on stop button
	$('#control3').click(function () {
//		show resume and reset buttons
			hideShowButtons('#control4', '#control5');
//		stop counter
			stopAction();
	});

//		
//	Click on resume button
	$('#control4').click(function() {
//		show stop and lap buttons
			hideShowButtons('#control3', '#control2');
//		start counter
			startAction();
	})

//		
//	Click on reset butons
	$('#control5').click(function() {
//		reload the page
			location.reload();
	})

//		
//	click on lap button
	$('#control2').click(function() {
//		if mode is on
			if (mode) {
//			stop action
				clearInterval(action)
//			reset lap and print lap details
				lap_counter = 0;
				add_lap();
//			start action
				startAction();
			}

	});

//	functions
	
function hideShowButtons(x, y) {
	$('.controls').hide();
	$(x).css("display", "inline-block");
	$(y).css("display", "inline-block");
}
	
function startAction() {
	action = setInterval(function() {
		time_counter++;
		lap_counter++;
		updateTime(); 
	}, 10);
}

function stopAction () {
	// body...
	clearInterval(action);
}

function updateTime() {
	timer_min = Math.floor(time_counter/6000);
	timer_sec = Math.floor((time_counter % 6000) / 100);
	timer_msec = (time_counter % 6000) % 100;
	$('#timer-min').text(format_numbers(timer_min));
	$('#timer-sec').text(format_numbers(timer_sec));
	$('#timer-milsec').text(format_numbers(timer_msec));

	lap_min = Math.floor(lap_counter/6000);
	lap_sec = Math.floor((lap_counter % 6000) / 100);
	lap_msec = (lap_counter % 6000) % 100;
	$('#lap-min').text(format_numbers(lap_min));
	$('#lap-sec').text(format_numbers(lap_sec));
	$('#lap-milsec').text(format_numbers(lap_msec));
}

function format_numbers(number) {
	if(number < 10) {
		return '0' + number;
	} 
	return number;
}

function add_lap() {
	lap_number++;
	var lap_details = '<p id="logCount"><span class="lap-num">Lap ' + lap_number + '</span> <span class="logTimer">' + format_numbers(lap_min) + ':' + format_numbers(lap_sec) + ':' + format_numbers(lap_msec) + '</span></p>';
	$('.log-display').prepend(lap_details);
}
	
});