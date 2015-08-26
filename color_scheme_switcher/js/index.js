$(document).ready (startApp);

function startApp(){

$('li#yellowButton').hover(switchYellow);
$('li#purpleButton').click(switchPurple);
$('li#grayButton').click(switchGray);
$('li#whiteButton').click(switchWhite);
}

function switchYellow(){

	//turn background yellow
	$('body').css('backgroundColor', 'yellow');
	//background color yellow
	//make text black
	$('body').css('color', 'black');
	//text is black
}
function switchPurple(){
	//make background purple
	$('body').css('backgroundColor', 'purple');
	//background color purple
	$('body').css('color', 'white');
	//make text white
}
function switchGray(){
	//make background grey
	$('body').css('backgroundColor', 'grey');
	//background color grey
	$('body').css('color', 'white');
	//make text white


}
function switchWhite(){
	//make background white
	$('body').css('backgroundColor', 'white');
	//background color white
	$('body').css('color', 'white');
	//make text white


}

