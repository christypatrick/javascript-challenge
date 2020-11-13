// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO data from data.js
console.log(data);

function defaultTable(data) {
  tbody.html(""); 
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
}

defaultTable(data);

/////reset table/////

// // // Get a reference to the form controls
// var formControl = d3.selectAll(".form-control")

// // // Select the button
// var resetButton = d3.select("#reset-btn");

// resetButton.on("click", function() {

// // // remove any data from the form
// formControl.html("");

// // remove any data from the tables
// tbody.html("");

// //load the default table
// defaultTable(data)
// });


////////////////////// filtering data /////////////////////

// Create a dictionary for the filters
var filterDictionary = {};

function updateFilters () {
  var grabbedElement = d3.select(this).select("input");
  var inputValue = grabbedElement.property("value")
  var genericID = grabbedElement.attr("id");
  
  // console.log(inputValue)
  
  // gather filter input data to add to the dictionary
  if (inputValue) {
    filterDictionary[genericID] = inputValue;
  } else {
    delete filterDictionary[genericID]
  }
  filteredTable();
}

function filteredTable() {
  let filteredData = tableData;

  Object.entries(filterDictionary).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  defaultTable(filteredData);
}


d3.selectAll(".filter").on("change", updateFilters);

var button = d3.selectAll("#filter-btn");


