// from data.js
var tableData = data;

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
////////////////////// filtering by date //////////////////////

// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

// Select the input element and get the raw HTML node
var dateInputElement = d3.select("#datetime");
var cityInputElement = d3.select("#city");
var stateInputElement = d3.select("#state");
var countryInputElement = d3.select("#country");
var shapeInputElement = d3.select("#shape");

// Get the value property of the input element
var dateInputValue = dateInputElement.property("value");
var cityInputValue = cityInputElement.property("value");
var stateInputValue = stateInputElement.property("value");
var countryInputValue = countryInputElement.property("value");
var shapeInputValue = shapeInputElement.property("value");

console.log(dateInputValue);
console.log(cityInputValue);
console.log(stateInputValue);
console.log(countryInputValue);
console.log(shapeInputValue);

//console.log(sightings);

var filteredData = sightings.filter(sighting => sighting.datetime === dateInputValue ||
                                                sighting.city === cityInputValue ||
                                                sighting.state === stateInputValue ||
                                                sighting.country === countryInputValue ||
                                                sighting.shape === shapeInputValue);

console.log(filteredData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// remove any data from the table
tbody.html("");


// Step 1: Loop Through `data` and log each UFO report object
filteredData.forEach(ufoFiltered => {
    console.log(ufoFiltered);
  
    // Step 2:  Use d3 to append one table row `tr` for each UFO report object
    var row = tbody.append("tr");
  
    // Step 3:  Use `Object.entries` to log each UFO report value
    Object.entries(ufoFiltered).forEach(([key, value]) => {
      console.log(key, value);
  
      // Step 4: Use d3 to append 1 cell per UFO report value 
      var cell = row.append("td");
  
      // Step 5: Use d3 to update each cell's text with
      // ufo report values
      cell.text(value);
    });
  });
});