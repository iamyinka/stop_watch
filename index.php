<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <title>Bootstrap 4 Stop-Watch</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="apple-touch-icon" href="">
    <link rel="shortcut icon" href="" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!-- Link to your CSS file -->
    <link rel="stylesheet" href="css/main.css">
</head>

<body>

    <!-- Start coding here -->
		<div class="container">
			
			<header>
				<h1>Stop Watch :: HTML, CSS &amp; jQuery</h1>
			</header>
			
			<div class="lap">
				<span id="lap-min">00</span>:
				<span id="lap-sec">00</span>:
				<span id="lap-milsec">00</span>
			</div>
			
			<div class="timer">
				<span id="timer-min">00</span>:
				<span id="timer-sec">00</span>:
				<span id="timer-milsec">00</span>
			</div>
			
			<div id="controls">
				<div  class="controls" id="control1">
					Start
				</div>
				
				<div  class="controls" id="control3">
					Stop
				</div>
				
				<div  class="controls" id="control2">
					Lap
				</div>
				
				
				
				<div  class="controls" id="control4">
					Resume
				</div>
				
				<div  class="controls" id="control5">
					Reset
				</div>
			</div>
			
			
			<div class="row">
				<div class="col-10 mx-auto">
					<div class="log-display clearfix">
					
					</div>
				</div>
			</div>
		</div>

    <!-- Coding End -->

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/app.js"></script>
</body>
</html>