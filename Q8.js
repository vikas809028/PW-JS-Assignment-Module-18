function calculateDaysUntilEvent(startDate) {
    let currentDate = new Date();
    let eventStartDate = new Date(startDate);
    
    // Calculate the difference in milliseconds between the current date and the event start date
    let timeDifference = eventStartDate.getTime() - currentDate.getTime();
    
    // Convert milliseconds to days
    let daysDifference = Math.abs(Math.ceil(timeDifference / (1000 * 3600 * 24)));
    
    return daysDifference;
  }
  

let daysUntilEvent = calculateDaysUntilEvent("2023-08-31");
console.log(`Number of days until the event: ${daysUntilEvent}`);
  