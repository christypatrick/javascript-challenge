// from data.js
var tableData = data;

// YOUR CODE HERE!

//Array of Javascript ovjects
//appends a table to the web page and hten adds new rows of data for each UFO sighting
// columns:  date/time, city, state, country, shape, comment
//date form in the html document and write code that will 
//listen for events and search through the date/time column to find rows that 
//match user input

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

// Step 1: Loop Through `data` and log each UFO report object
data.forEach(ufo => {
    console.log(ufo);
  
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
    var row = tbody.append("tr");
  
    // Step 3:  Use `Object.entries` to log each UFO report value
    Object.entries(ufo).forEach(([key, value]) => {
      console.log(key, value);
  
      // Step 4: Use d3 to append 1 cell per UFO report value 
      var cell = row.append("td");
  
      // Step 5: Use d3 to update each cell's text with
      // ufo report values
      cell.text(value);
    });
  });