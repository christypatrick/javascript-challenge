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

// // Select the button
var resetButton = d3.select("#reset-btn");

resetButton.on("click", function() {

// // remove any data from the form
d3.select("#datetime").node().value = "";
d3.select("#city").node().value = "";
d3.select("#state").node().value = "";
d3.select("#country").node().value = "";
d3.select("#shape").node().value = "";

// remove any data from the tables
tbody.html("");

// prevent page refresh
d3.event.preventDefault();

//load the default table
defaultTable(data)
});


////////////////////// filtering data /////////////////////

// Create a dictionary for the filters
var filterDictionary = {};

function updateFilters () {
  var grabbedElement = d3.select(this).select("input");
  var inputValue = grabbedElement.property("value")
  var genericID = grabbedElement.attr("id");
  
  // prevent page refresh
  d3.event.preventDefault();
  
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


