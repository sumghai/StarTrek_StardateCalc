/**
 * stardateTNG.js
 * Original script by Phillip L. Sublett (TrekGuide.com)
 * Repackaged by Robin "sumghai" Chang
 */

/**
 * Converts a calendar date to its corresponding Stardate (TNG)
 * @param {Number} year
 * @param {Number} month
 * @param {Number} day
 * @param {Number} hour
 * @param {Number} minute
 * @return {Number} stardateOut
 */
function calendarDateToStardateTng( calendarDateInput )
{
	var stardateOrigin = new Date( "July 5, 2318 12:00:00" );
	var calendarInput = new Date( calendarDateInput );

	calendarInput.setSeconds( 0 );
	calendarInput.toGMTString( 0 );
	
	var millisecondsSinceStardateOrigin = calendarInput.getTime() - stardateOrigin.getTime();

	stardateOut = millisecondsSinceStardateOrigin / 34367056.4;
		
	return stardateOut.toFixed(1);
}

/**
 * Converts a calendar date to its corresponding Stardate (TNG)
 * @param {Number} stardate
 * @return {string} calendarDateOut
 */
function stardateTngToCalendarDate( stardateInput )
{
	var stardateOrigin = new Date( "July 5, 2318 12:00:00" );
	
	var millisecondsSinceStardateOrigin = stardateInput * 34367056.4;
	
	var resultMilliseconds = stardateOrigin.getTime() + millisecondsSinceStardateOrigin;
	
	var resultDate = new Date();
	
	resultDate.setTime( resultMilliseconds );
	
	var weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];
	
	var calendarOutput = 
		weekdayNames[resultDate.getDay()] + " " + 
		('0' + resultDate.getDate()).slice(-2) + " " +
		monthNames[resultDate.getMonth()] + " " +
		resultDate.getFullYear() + " @ " +
		('0' + resultDate.getHours()).slice(-2) + ":" +
		resultDate.getMinutes() + ":" +
		resultDate.getSeconds();
	
	return calendarOutput;
}
