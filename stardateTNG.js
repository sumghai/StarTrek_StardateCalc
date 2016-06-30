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
function calendarDateToStardateTng( year, month, day, hour, minute )
{
	yearInput = parseInt( year );
	monthInput = parseInt( month );
	dayInput = parseInt( day );
	hourInput = parseInt( hour );
	minuteInput = parseInt( minute );
	
	var stardateOrigin = new Date( "May 25, 2322 00:00:00" );
	var stardateInput = new Date();
	
	stardateInput.setYear( yearInput );
	stardateInput.setMonth( monthInput );
	stardateInput.setDate( dayInput );
	stardateInput.setHours( hourInput );
	stardateInput.setMinutes( minuteInput );
	stardateInput.setSeconds( 0 );
	stardateInput.toGMTString( 0 );
	
	var findMilliseconds = stardateInput.getTime() - stardateOrigin.getTime();
	
	var findStarYear = findMilliseconds / ( 60 * 60 * 24 * 365.2422 );
	
	findStarYear = Math.floor( findStarYear * 100 );
	stardateOut = findStarYear / 100;
		
	return stardateOut;
}

/**
 * Converts a calendar date to its corresponding Stardate (TNG)
 * @param {Number} stardate
 * @return {string} calendarDateOut
 */
function stardateTngToCalendarDate( stardate )
{
	var stardateOrigin = new Date("May 25, 2322 00:00:00");
	
	var stardateIn = eval( stardate );
	
	var dateOut = stardateIn * 60 * 60 * 24 * 365.2422 ;
	
	var resultMilliseconds = stardateOrigin.getTime() + dateOut;
	
	var resultDate = new Date();
	
	resultDate.setTime( resultMilliseconds );
	
	var m_names = new Array(
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	);
	
	var calendarDateOut = m_names[resultDate.getMonth()] + " " + resultDate.getDate() + ", " + resultDate.getFullYear();
	
	return calendarDateOut;
}
