"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/
//GLOBAL VARIABLES 
var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'><caption>upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date( thisDay.getTime() + 14*24*60*60*1000);
//loop for calendar
for (var i = 0; i < eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();
   //conditional if statement
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + "@" + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}
tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;
