
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


      // for loop
      for (let i = 0; i < studentReport.length; i++) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
      }
    
      // while loop
      let i = 0;
      while (i < studentReport.length) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
        i++;
      }
    
      // forEach loop
      studentReport.forEach(function (item) {
        if (item < LIMIT) {
          console.log(item);
        }
      });
    
      // for...in loop
      for (let i in studentReport) {
        if (studentReport[i] < LIMIT) {
          console.log(studentReport[i]);
        }
      }

      console.log("=== Next " + DAYS + " Days ===");

    // Get today’s info
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const todayIndex = today.getDay();

    // Using a FOR loop to list the next DAYS from today
    for (let d = 1; d <= DAYS; d++) {
    let futureDayIndex = (todayIndex + d) % 7;
    console.log(dayNames[futureDayIndex]);
    }