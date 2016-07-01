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
function stardateTngToCalendarDate( stardate )
{
	var stardateOrigin = new Date( "July 5, 2318 12:00:00" );
	
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
