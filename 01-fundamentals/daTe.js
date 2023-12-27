/**
 * Below are syntaxes for creating a Date Object using Date() constructor.
 *  -- new Date()
 *  -- new Date(milliseconds)
 *  -- new Date(datestring)
 *  -- new Date(year, month, date[,hour,minute,second,millisecond])
 *    -- NOTE: Parameters in the brackets are always optional.
 *    With no arguments, the Date() constructor creates a Date object
 *    set to the current date and time.   
 * Below are some of the use cases of the Date method
 *  */

let dt = new Date();
console.log("getMilliseconds() : ", dt.getMilliseconds() + " milliseconds")

let dt2 = new Date("January 25, 2003 10:15:00");
console.log("getMinutes() : ", dt2.getMinutes() + ' minutes')

//Note: getMonth() method returns the month in the specified date according
//      to local time. The value returned by getMonth() is an integer
//      between 0 and 11. 0 corresponds to January, 1 to February and so on.
console.log("getMonth() : ", dt2.getMonth() + ' months')

